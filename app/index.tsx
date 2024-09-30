//this page is efectively a landing page upon the app opening 

import { Text, View } from "react-native";
import Landing from '../components/Landing';
import SignUp from '../auth/sign-up/sign-up.js'
import SignIn from '../auth/sign-in/sign-in.js'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {auth} from '../configs/FireBaseConfigs'
import { Redirect } from "expo-router";

export default function Index() {

  const Stack = createNativeStackNavigator();
  const user = auth.currentUser;
  
  return (

    <Stack.Navigator >
      <Stack.Screen name="Landing" component={Landing}/>
      <Stack.Screen name="SignUp" component={SignUp}/>
      <Stack.Screen name="SignIn" component={SignIn}/>
    </Stack.Navigator>

);
}
