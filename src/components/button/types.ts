import type {
  StyleProp,
  TouchableOpacityProps,
  TextStyle,
  ViewStyle,
} from 'react-native';

export type ButtonProps = TouchableOpacityProps & {
  title: string;
  titleStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  shadow?: boolean;
};
