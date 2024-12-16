export enum RootStackScreens {
  AuthStack = 'AuthStack',
  MainStack = 'MainStack',
}

export type RootStackParamList = {
  [RootStackScreens.AuthStack]: undefined;
  [RootStackScreens.MainStack]: undefined;
};
