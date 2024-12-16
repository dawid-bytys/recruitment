import { RED, WHITE } from '@/commons/colors';
import { getFontName } from '@/commons/fonts';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: RED,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontFamily: getFontName('Outfit', '500'),
    color: WHITE,
  },
});
