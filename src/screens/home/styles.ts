import { StyleSheet } from 'react-native';
import { getFontName } from '@/commons/fonts';

export const styles = StyleSheet.create({
  innerWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  homeText: {
    fontSize: 24,
    fontFamily: getFontName('Outfit', '300'),
  },
  buttonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 20,
  },
});
