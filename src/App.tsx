import { RootStack } from '@/navigation/stacks/root/root';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BootSplash from 'react-native-bootsplash';
import { LIGHT_GRAY } from '@/commons/colors';

const THEME = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: LIGHT_GRAY,
  },
};

export function App() {
  function handleOnReady() {
    BootSplash.hide({ fade: true });
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={THEME} onReady={handleOnReady}>
        <RootStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
