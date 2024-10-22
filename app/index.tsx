
import { View } from "react-native";
import Landing from "./components/Landing";
import { auth } from "./configs/FireBaseConfigs";
import { Redirect } from "expo-router";


export default function Index() {

  const user = auth.currentUser;

  return ( 

  <View>
{user ? <Redirect href={'/(tabs)/mytrip'}/> : 


  <Landing/> }

  </View>
  )
  
}

