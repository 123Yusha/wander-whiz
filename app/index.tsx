
import { View } from "react-native";
import Landing from "./components/Landing";
import { auth } from "./configs/FireBaseConfigs";
import { Redirect } from "expo-router";
import 'react-native-get-random-values';

export default function Index() {

  const user = auth.currentUser;

  return ( 

  <View>
{user ? <Redirect href={'/(tabs)/Trips'}/> : 


  <Landing/> }

  </View>
  )
  
}

