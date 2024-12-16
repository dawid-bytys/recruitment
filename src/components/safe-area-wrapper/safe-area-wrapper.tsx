import { SafeAreaView } from 'react-native';
import { styles } from './styles';
import type { PropsWithChildren } from 'react';

export function SafeAreaWrapper({ children }: PropsWithChildren) {
  return <SafeAreaView style={styles.wrapper}>{children}</SafeAreaView>;
}
