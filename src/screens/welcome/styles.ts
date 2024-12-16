import { RED, WHITE } from '@/commons/colors';
import { getFontName } from '@/commons/fonts';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: RED,
  },
  helloText: {
    fontSize: 24,
    fontFamily: getFontName('Outfit', '400'),
    color: WHITE,
  },
});
