import { Text, View } from 'react-native';
import { styles } from './styles';
import type { HeaderProps } from './types';

export function Header({ title, leftComponent, rightComponent }: HeaderProps) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.component}>{leftComponent}</View>
      <View style={styles.middleWrapper}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.component}>{rightComponent}</View>
    </View>
  );
}
