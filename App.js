// import Navigation from "./src/navigation/Navigation";
import AppNavigation from './src/Navigation/AppNavigation';
import firebase from 'firebase'
import { NativeBaseProvider } from 'native-base'
import React, { useEffect } from "react";
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import AsyncStorage from "@react-native-async-storage/async-storage";
const firebaseConfig = {
  apiKey: "AIzaSyAfUrsKP8-KNF45uRk7goODp1jihrIncA4",
  authDomain: "maffinapp-815e3.firebaseapp.com",
  projectId: "maffinapp-815e3",
  storageBucket: "maffinapp-815e3.appspot.com",
  messagingSenderId: "301983727799",
  appId: "1:301983727799:web:def39bf25e869ebb74cd32",
  measurementId: "G-44E9131C2B"
};
firebase.initializeApp(firebaseConfig)
// firebase.firestore().settings({
//   experimentalForceLongPolling: true, // this line
//   useFetchStreams: false, // and this line
// })

const store = configureStore();
export default function App() {

  LogBox.ignoreLogs(["Warning: ..."]);
  LogBox.ignoreLogs(["Setting a timer..."]);
  LogBox.ignoreAllLogs();
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    </NativeBaseProvider>
  );
}
