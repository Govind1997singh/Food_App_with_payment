import { LogBox } from "react-native";
import {
    FORGOT_PASSWORD_FAILURE,
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    REGISTER_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    GET_USER_LIST_FAILURE,
    GET_USER_LIST_REQUEST,
    GET_USER_LIST_SUCCESS
} from '../ActionTypes';
import { auth, firestore, storage } from 'firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useNavigation } from "@react-navigation/native";
import _ from "lodash";

LogBox.ignoreLogs([
    "Warning: Async Storage has been extracted from react-native core",
]);

export const DEFAULT_PHOTO_URI = "https://i.imgur.com/QampJyJ.png";
export const DEFAULT_PHOTO_ROUND = "https://i.imgur.com/1czVlKm.png";

const generateReferCode = () => {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return "P_"+text;
}

export const LoginRequest = (userData, navigation) => async dispatch => {
    // const navigation = useNavigation()
    // const navigation = useNavigation(); 
    ////console.log("dataa   ------------------->", userData)
    dispatch({
        type: LOGIN_REQUEST
    });
    return auth().signInWithEmailAndPassword(userData.email, userData.password).then(rs => {
        // //console.log("login res ---> ", rs)
        if (rs.user) {
            // let userx = rs.user
            firestore().collection('users')
                .where('email', '==', userData.email).get().then(rq => {
                    // //console.log("rq --> ", rq.docs[0].data())
                    if (rq.size > 0) {
                        const { email, username, uid, referralCode, photoUrl, balance } = rq.docs[0].data()
                        const result = {
                            userInfo: {
                                 email, username, uid, referralCode, photoUrl, balance
                            },
                        }
                        //console.log("result ----> ", result)
                        dispatch({
                            type: LOGIN_SUCCESS,
                            payload: result
                        });
                        AsyncStorage.setItem('userLoginInfo', JSON.stringify(result))
                            .then(() => {
                                ////console.log("data ---> ", data)
                                navigation.navigate('tabs')
                            })
                    }
                })
        }
    })
        .catch((error) => {
            //console.log("signInWithEmailAndPassword error1111111---> ", error);
            // alert(error.message);
            // console.log(error.message)
            if(error.message == "There is no user record corresponding to this identifier. The user may have been deleted."){
            alert("You have entered an invalid username or password")
            }else{
                alert(error.message);
            }
            dispatch({
                type: LOGIN_FAILURE,
                payload: error.message
            });
        });
};

export const RegisterRequest = (userData, navigation) => async dispatch => {
    // console.log("dataa   ------------------->", userData)
    // const navigation = useNavigation()
    // console.log(userData.data.email)
    dispatch({
        type: REGISTER_REQUEST
    });
    return auth()
        .createUserWithEmailAndPassword(userData.email, userData.password)
        .then(rs => {
            // //console.log("re--> ", rs)
            firestore().collection('users').doc(rs.user.uid)
                .set({
                    email: userData.email,
                    username: userData.username,
                    createdAt: (new Date).getTime(),
                    referralCode: generateReferCode(),
                    uid:rs.user.uid,
                    balance:10,
                    createdAt:(new Date).getTime(),
                    useRefferal:userData.referral
                })
                .then(res => {
                    if(userData.referral != ""){
                        firestore().collection("users")
                        .where("referralCode", "==", userData.referral)
                        // .then((res)=>{
                        .get()
                        .then((querySnapshot) => {
                            if(querySnapshot.docs.length > 0 ){
                            var data = querySnapshot.docs[0].data()
                            console.log(querySnapshot.docs[0].data())
                            firestore().collection("users").doc(data.uid).update({
                            balance: data.balance + 10
                            })
                            firestore().collection("users").doc(data.uid).collection("invitedUser")
                            .doc(rs.user.uid)
                            .set({
                                email: userData.email,
                                username: userData.username,
                                createdAt: (new Date).getTime(),
                                referralCode: generateReferCode(),
                                uid:rs.user.uid,
                                balance:10,
                                createdAt:(new Date).getTime(),
                                useRefferal:userData.referral
                            })
                        }
                        })
          
                    }
                    dispatch({
                        type: REGISTER_SUCCESS,
                        payload: rs.user
                    });
                    // navigation.navigate('tabs')
                    dispatch(LoginRequest(userData, navigation))
                    //console.log('registered');
                    // navigate("SignIn");
                })

        })
        .catch((error) => {
            ////console.log("createUserWithEmailAndPassword error---> ", error.message);
            alert(error.message);
            dispatch({
                type: REGISTER_FAILURE,
                payload: error.message
            });
        });
}
export const LogoutRequest = (navigation) => async dispatch => {
    dispatch({
        type: LOGOUT_REQUEST
    });
    try {
        await AsyncStorage.clear();
        auth().signOut().then(() => {
            //console.log('User signed out!')
            dispatch({
                type: LOGOUT_SUCCESS,
            });
            navigation.navigate("CreateAccount");
            // navigate('SignIn')
        });
    } catch (error) {
        //console.log("logout error---> ", error);
        alert(error.message);
        dispatch({
            type: LOGOUT_FAILURE,
            payload: error.message
        });
    }
}

export const ForgotPasswordRequest = (email, navigation) => async dispatch => {
    // console.log("here -->", email)
    dispatch({
        type: FORGOT_PASSWORD_REQUEST
    });
    const usersRef = firestore().collection('users')
    const emailCheck = await usersRef
        .where('email', '==', email).get()
    if (emailCheck.size > 0) {
        await auth()
            .sendPasswordResetEmail(emailCheck.docs[0].data().email)
            .then(() => {
                navigation.navigate("EmailSent")
                // alert(`Password reset email sent ${email} to successfully`)
                dispatch({
                    type: FORGOT_PASSWORD_SUCCESS,
                });
            })
            .catch((error) => {
                //console.log("forgotpassword error---> ", error.message);
                alert(error.message);
                dispatch({
                    type: FORGOT_PASSWORD_FAILURE,
                    payload: error.message
                });
            });
    }else{
            alert("This email is does not exist in our record")
            dispatch({
                type: FORGOT_PASSWORD_FAILURE,
                // payload: error.message
            });
        }
}
export const GetUserListRequest = (loginUserId, orderby) => async dispatch => {
    const userList = [];
    dispatch({
        type: GET_USER_LIST_REQUEST
    });
    // console.log("call")
    await firestore().collection('users')
        .orderBy(orderby, 'desc')
        // .limit(LIMIT_POSTS_PER_LOADING + loadedUids.length)
        .get()
        .then((querySnapshot) => {
          
            querySnapshot.forEach((docUser) => {
                if(orderby == "balance"){
                    userList.push(docUser.data())
                }
                else{
                       if(docUser.data().uid != loginUserId){
                userList.push(docUser.data())
                }
            }
                    //    console.log(docUser.data())
                // console.log("Email"+email)
            });
            // console.log("gsp")
            // console.log(userList)
            // alert(querySnapshot.docs[0].data().uid)
            dispatch({
                type: GET_USER_LIST_SUCCESS,
                payload: userList
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
            dispatch({
                type: GET_USER_LIST_FAILURE,
                payload: error
            });
        });
        
      
};


