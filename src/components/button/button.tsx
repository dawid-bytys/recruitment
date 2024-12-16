import { Text, TouchableOpacity } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import { ButtonProps } from './types';
import { styles } from './styles';

export function Button({
  shadow = false,
  title,
  titleStyle,
  buttonStyle,
  ...props
}: ButtonProps) {
  return (
    <Shadow
      disabled={!shadow}
      offset={[0, 3]}
      startColor={'#cecece'}
      distance={6}
    >
      <TouchableOpacity {...props} style={[styles.button, buttonStyle]}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      </TouchableOpacity>
    </Shadow>
  );
}
