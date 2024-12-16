import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WelcomeScreen } from '@/screens/welcome/welcome';
import { HomeScreen } from '@/screens/home/home';
import { MainStackScreens } from './types';
import type { MainStackParamList } from './types';

const Stack = createNativeStackNavigator<MainStackParamList>();

export function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen name={MainStackScreens.Welcome} component={WelcomeScreen} />
      <Stack.Screen name={MainStackScreens.Home} component={HomeScreen} />
    </Stack.Navigator>
  );
}
