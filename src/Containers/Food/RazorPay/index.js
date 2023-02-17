import { TouchableOpacity, View , Text} from "react-native";
import RazorpayCheckout from 'react-native-razorpay';
import React from "react";

export default function Razor(){

    return(
        <View>
<TouchableOpacity onPress={() => {
  var options = {
    description: 'Credits towards consultation',
    image: 'https://i.imgur.com/3g7nmJC.png',
    currency: 'INR',
    key: '', // Your api key
    amount: '5000',
    name: 'foo',
    prefill: {
      email: 'gs@razorpay.com',
      contact: '+919926614851',
      name: 'Razorpay Software'
    },
    theme: {color: '#F37254'}
  }
  RazorpayCheckout.open(options).then((data) => {
    // handle success
    console.log(data)
    alert(`Success: ${data.razorpay_payment}`);
  }).catch((error) => {
    // handle failure
    console.log(error)
    alert(`Error: ${error.code} | ${error.description}`);
  });
}}>
  <Text>Hello dfgdf fgb dg fg h gfh ghb gh fd hgb gh</Text>
  <Text>Hello dfgdf fgb dg fg h gfh ghb gh fd hgb gh</Text>
  <Text>Hello dfgdf fgb dg fg h gfh ghb gh fd hgb gh</Text>
    </TouchableOpacity>
</View>

    )
} 