import { Text, View } from 'react-native';
import { styles } from './styles';
import { useEffect } from 'react';
import { MainStackScreens } from '@/navigation/stacks/main/types';
import type { WelcomeScreenProps } from './types';

export function WelcomeScreen({ navigation }: WelcomeScreenProps) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate(MainStackScreens.Home);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [navigation]);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.helloText}>Hello recruitment</Text>
    </View>
  );
}
