import { MainStack } from '@/navigation/stacks/main/main';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackScreens } from './types';
import type { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootStack() {
  // here should be some auth logic to decide which stack to render

  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen name={RootStackScreens.MainStack} component={MainStack} />
    </Stack.Navigator>
  );
}
