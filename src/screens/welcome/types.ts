import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type {
  MainStackParamList,
  MainStackScreens,
} from '@/navigation/stacks/main/types';

export interface WelcomeScreenProps {
  navigation: NativeStackNavigationProp<
    MainStackParamList,
    MainStackScreens.Welcome
  >;
}
