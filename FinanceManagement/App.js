import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home/Home";
import Onboarding from "./screens/OnBoarding/OnBoarding";
import SignUp from "./screens/SignUp/SignUp";
import AddEarning from './screens/Create/AddEarning';
import AddSpending from './screens/Create/AddSpending';
import Profile from './screens/Home/Profile';
import Spendings from './screens/Home/Spendings';
import Earnings from './screens/Home/Earnings';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="signup"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddEarning"
          component={AddEarning}
          options={{ headerShown: true, title:"Add Earning" }}
        />
        <Stack.Screen
          name="AddSpending"
          component={AddSpending}
          options={{ headerShown: true, title:"Add Spending" }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: true, title:"Profile" }}
        />
        <Stack.Screen
          name="Spendings"
          component={Spendings}
          options={{ headerShown: true, title:"Spendings" }}
        />
        <Stack.Screen
          name="Earnings"
          component={Earnings}
          options={{ headerShown: true, title:"Earnings" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
