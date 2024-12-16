export enum MainStackScreens {
  Welcome = 'Welcome',
  Home = 'Home',
}

export type MainStackParamList = {
  [MainStackScreens.Welcome]: undefined;
  [MainStackScreens.Home]: undefined;
};
