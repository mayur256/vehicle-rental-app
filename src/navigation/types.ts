import type { NavigatorScreenParams } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

// Auth Stack
export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

// Home Tabs
export type HomeTabsParamList = {
  Home: undefined;
  Bookings: undefined;
  ListVehicle: undefined;
  Profile: undefined;
};

// Root Stack
export type RootStackParamList = {
  AuthStack: NavigatorScreenParams<AuthStackParamList>;
  HomeTabs: NavigatorScreenParams<HomeTabsParamList>;
  VehicleDetails: { vehicleId: string };
};

// Screen Props Types
export type AuthStackScreenProps<T extends keyof AuthStackParamList> = 
  NativeStackScreenProps<AuthStackParamList, T>;

export type HomeTabsScreenProps<T extends keyof HomeTabsParamList> = 
  BottomTabScreenProps<HomeTabsParamList, T>;

export type RootStackScreenProps<T extends keyof RootStackParamList> = 
  NativeStackScreenProps<RootStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}