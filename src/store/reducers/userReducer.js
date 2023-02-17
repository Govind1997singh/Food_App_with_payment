import * as actionTypes from '../ActionTypes';

const initialState = {
    // loading: null,
    user: null,
    message: "",
    first_name: '',
    loading: false,
    users: [],
    userList:[]
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_START: {
            return {
                ...state,
                loading: false,
            }
        }
        case actionTypes.REGISTER_REQUEST: {
            return {
                ...state,
                loading: true,
            }
        }
        case actionTypes.REGISTER_SUCCESS: {
            console.log("user red ---> ", initialState.first_name)
            return {
                ...state,
                // user: action.payload,
                // user: { ...action.payload.user },
                loading: false,
            }
        }
        case actionTypes.REGISTER_FAILURE: {
            return {
                ...state,
                message: action.payload,
                loading: false,
            }
            // const message2 = action.payload.message
            // Alert.alert('Error', message2)
        }
        case actionTypes.LOGIN_REQUEST: {
            return {
                ...state,
                loading: true,
            }
        }
        case actionTypes.LOGIN_SUCCESS: {
            return {
                ...state,
                user: action.payload,
                loading: false,
            }
        }
        case actionTypes.LOGIN_FAILURE: {
            return {
                ...state,
                message: action.payload,
                loading: false,
            }
        }
        case actionTypes.UPDATE_PASSWORD_REQUEST: {
            return {
                ...state,
                loading: true
            }
        }
        case actionTypes.UPDATE_PASSWORD_SUCCESS: {
            return {
                ...state,
                loading: false,
                user: action.payload
            }
        }
        case actionTypes.UPDATE_PASSWORD_FAILURE: {
            return {
                ...state,
                loading: false,
                message: action.payload
            }
        }
        case actionTypes.UPDATE_PROFILE_REQUEST: {
            return {
                ...state,
                loading: true
            }
        }
        case actionTypes.UPDATE_PROFILE_SUCCESS: {
            return {
                ...state,
                loading: false,
                user: action.payload
            }
        }
        case actionTypes.UPDATE_PASSWORD_FAILURE: {
            return {
                ...state,
                loading: false,
                message: action.payload
            }
        }
        case actionTypes.LOGOUT_REQUEST: {
            return {
                ...state,
                loading: true,
            }
        }
        case actionTypes.LOGOUT_SUCCESS: {
            return {
                ...state,
                loading: false,
                user: null
            }
        }
        case actionTypes.LOGOUT_FAILURE: {
            return {
                ...state,
                message: action.payload,
                loading: false,
            }
        }
        case actionTypes.FORGOT_PASSWORD_REQUEST: {
            return {
                ...state,
                loading: true,
            }
        }
        case actionTypes.FORGOT_PASSWORD_SUCCESS: {
            console.log("user red ---> ", initialState.first_name)
            return {
                ...state,
                loading: false,
            }
        }
        case actionTypes.FORGOT_PASSWORD_FAILURE: {
            return {
                ...state,
                message: action.payload,
                loading: false,
            }
        }
        case actionTypes.GET_USER_LIST_REQUEST:{
            return {
                ...state,
                loading: true,
                // feedList: [],
            }
        }
        case actionTypes.GET_USER_LIST_SUCCESS: {
            return {
                ...state,
                loading: false,
                userList: action.payload,
            }
        }
        case actionTypes.GET_USER_LIST_FAILURE: {
            return {
                ...state,
                loading: false,
                errorMessage: action.payload,
            }
        }

       default:
            return state
    }
}