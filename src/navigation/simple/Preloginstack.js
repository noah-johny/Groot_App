import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LandingPage, Login, Signup} from '../../screens/prelogin';
const Stack = createNativeStackNavigator();
const PreloginStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Landing Page" component={LandingPage} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Sign Up" component={Signup} />
    </Stack.Navigator>
  );
};
export default PreloginStack;