import { Text, View } from "react-native";
import Landing from '../components/Landing';
import SignUp from '../auth/sign-up/sign-up.js'
import SignIn from '../auth/sign-in/sign-in.js'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
  
    <Stack.Navigator >
      <Stack.Screen name="Landing" component={Landing}/>
      <Stack.Screen name="SignUp" component={SignUp}/>
      <Stack.Screen name="SignIn" component={SignIn}/>
    </Stack.Navigator>
  

  );
}
