import { getFontName } from '@/commons/fonts';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    height: 50,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  middleWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  title: {
    fontSize: 20,
    fontFamily: getFontName('Outfit', '400'),
  },
  component: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
