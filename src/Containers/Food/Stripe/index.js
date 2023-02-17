// import { StripeProvider } from '@stripe/stripe-react-native';
import { CardField, useStripe } from '@stripe/stripe-react-native';
import RazorpayCheckout from 'react-native-razorpay';
// import { Button, View } from 'native-base';

// export default function StripePayment() {
//   return (
//     <StripeProvider
//       publishableKey={"pk_test_LH4nfN9MSCjGAkaF6IWrazue00C2LoZscP"}
//       merchantIdentifier="merchant.identifier"
//     >
//       <PaymentScreen />
//     </StripeProvider>
//   );
// }


// function PaymentScreen() {
//   const { confirmPayment } = useStripe();
//   const _createToken = async ( Token) => {
//     const { error, token } = await createToken(buildTestTokenParams(type));

//     if (error) {
//       Alert.alert(`Error code: ${error.code}`, error.message);
//       console.log(`Error: ${JSON.stringify(error)}`);
//     } else if (token) {
//       Alert.alert(
//         'Success',
//         `The token was created successfully! token: ${token.id}`
//       );
//     }
//   };
//   return (
//       <View>
//     <CardField
//       postalCodeEnabled={true}
//       placeholders={{
//         number: '4242 4242 4242 4242',
//       }}
//       cardStyle={{
//         backgroundColor: '#FFFFFF',
//         textColor: '#000000',
//       }}
//       style={{
//         width: '100%',
//         height: 50,
//         marginVertical: 30,
//       }}
//       onCardChange={(cardDetails) => {
//         console.log('cardDetails', cardDetails);
//       }}
//       onFocus={(focusedField) => {
//         console.log('focusField', focusedField);
//       }}
//     />
//     <Button
//     title="hello"
//     onPress={confirmPayment}
//     />
//     </View>
//   );
// }

import React from 'react';
import { firestore } from 'firebase'
import { StyleSheet, Text, Button, TextInput, View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
var stripe = require('stripe-client')('pk_test_5gr4EWFwVAePiJnJFYmrf3X900GWW3aGHs');
export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      cardNumber: "",
      cvc: "",
      name: "",
      exp_month: "",
      exp_year: "",
      spinner: false,

    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Spinner
          visible={this.state.spinner}
          textContent={'generating token...'}
          textStyle={{ color: 'blue' }}
        />


        <TextInput maxLength={25}
          keyboardType='default'
          multiline={false}
          placeholder='Card Name'
          style={[styles.input, styles.nameInput]}
          onChangeText={(text) => this.setState({ name: text })} />
        <TextInput maxLength={16}
          keyboardType='number-pad'
          multiline={false}
          placeholder='Card Number'
          style={[styles.input, styles.cardNumber]}
          onChangeText={(text) => this.setState({ cardNumber: text })} />
        <TextInput maxLength={3}
          keyboardType='number-pad'
          multiline={false}
          placeholder='CVC'
          style={[styles.input, styles.cvcInput]}
          onChangeText={(text) => this.setState({ cvc: text })} />
        <View style={{ flexDirection: 'row' }}>
          <TextInput maxLength={2}
            keyboardType='number-pad'
            multiline={false}
            placeholder='MM'
            style={[styles.input, styles.expDateInput]}
            onChangeText={(text) => this.setState({ exp_month: text })} />
          <Text style={{ fontSize: 18 }}>/</Text>
          <TextInput maxLength={2}
            keyboardType='number-pad'
            multiline={false}
            placeholder='YY'
            style={[styles.input, styles.expDateInput]}
            onChangeText={(text) => this.setState({ exp_year: text })} />
        </View>
        <Button title="Place Order" color={"#f05522"} onPress={() => this.onProcessPayment()} />
      </View>
    );
  }
  async onProcessPayment() {
      this.setState({spinner: true})
      const data = this.props.navigation.getParam('data', {})
      console.log(data.user.uid)
      var information = {
        card: {
          number: this.state.cardNumber,
          exp_month: this.state.exp_month,
          exp_year: this.state.exp_year,
          cvc: this.state.cvc,
          name: this.state.name
        }
      }

      var card = await stripe.createToken(information);
      if(!card.error){
        var token = card.id;
console.log(token)

      //   const usersCollection = await firestore().collection('allusers').doc(data.user.uid).collection("OrderHistory")
      //   usersCollection.add({...data, card:card}).then(async(res)=>{

      //   const usersCollection2 = await firestore().collection('restaurent').doc(data.restaurant.id).collection("Orders")
      //   usersCollection2.add({...data, card:card}).then(async(res2)=>{


      //   const usersCollection1 = await firestore().collection('Orders')
      //   usersCollection1.add({...data, card:card})
      //   .then((res3)=>{
      //   this.props.navigation.navigate("TabView")
      //   // this.setState({loading:false})
      //   // setLoading(false)
      // })
      // .catch((e)=>{
      //   alert(e.message)
      // })

      // })
      // .catch((e)=>{
      //   alert(e.message)
      // })

      // })
      // .catch((e)=>{
      //   alert(e.message)
      // })




    //     // alert(`Token: ${token}`)
    //   }else{
    //     alert(`Error: ${card.error.code}`)
    //   }
    //   this.setState({spinner: false})
    // var options = {
    //   description: 'Credits towards consultation',
    //   image: 'https://i.imgur.com/3g7nmJC.png',
    //   currency: 'INR',
    //   key: '', // Your api key
    //   amount: '5000',
    //   name: 'foo',
    //   prefill: {
    //     email: 'void@razorpay.com',
    //     contact: '9191919191',
    //     name: 'Razorpay Software'
    //   },
    //   theme: { color: '#F37254' }
    // }
    // RazorpayCheckout.open(options).then((data) => {
    //   // handle success
    //   alert(`Success: ${data.razorpay_payment_id}`);
    // }).catch((error) => {
    //   // handle failure
    //   console.log(`Error: ${error} | ${error.description}`)
    //   alert(`Error: ${error.code} | ${error.description}`);
    // });

        }  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8
  },
  input: {
    fontSize: 18,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    width: "85%",
    paddingLeft: 5
  },
  cardNumber: {
    width: "85%"
    // width: 150,
  },
  cvcInput: {
    width: "85%"
    // width: 50
  },
  nameInput: {
    // width: undefined,
    // alignSelf: 'stretch'
  },
  expDateInput: {
    width: 50,
    marginHorizontal: 4
  }
});