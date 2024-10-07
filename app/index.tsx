import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Landing from '../components/Landing';
import SignUp from '../auth/sign-up/sign-up.js';
import SignIn from '../auth/sign-in/sign-in.js';
import TabLayout from './(tabs)/TabLayout.jsx'; // Ensure this path is correct
import MyTrip from './(tabs)/mytrip'; // Ensure this path is correct
import { auth } from '../configs/FireBaseConfigs';

const Stack = createNativeStackNavigator();

export default function Index() {
  const user = auth.currentUser;

  return (
    
      <Stack.Navigator> 
      
            <Stack.Screen name="Landing" component={Landing} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="SignIn" component={SignIn} />
      
      </Stack.Navigator>
    
  );
}

