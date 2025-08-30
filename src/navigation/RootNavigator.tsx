import React from 'react';
import { Text } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useTheme } from '../theme';
import {
  SignInPage,
  SignUpPage,
  HomePage,
  BookingsPage,
  ListVehiclePage,
  ProfilePage,
  VehicleDetailsPage,
} from '../ui/pages';
import type {
  RootStackParamList,
  AuthStackParamList,
  HomeTabsParamList,
} from './types';

const RootStack = createStackNavigator<RootStackParamList>();
const AuthStack = createStackNavigator<AuthStackParamList>();
const HomeTabs = createBottomTabNavigator<HomeTabsParamList>();

function AuthNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="SignIn" component={SignInPage} />
      <AuthStack.Screen name="SignUp" component={SignUpPage} />
    </AuthStack.Navigator>
  );
}

function HomeTabsNavigator() {
  const theme = useTheme();

  return (
    <HomeTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.mutedText,
        tabBarStyle: {
          backgroundColor: theme.colors.surface,
          borderTopColor: theme.colors.divider,
          paddingBottom: 8,
          paddingTop: 8,
          height: 60,
        },
      }}
    >
      <HomeTabs.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: 20, color }}>🏠</Text>
          ),
        }}
      />
      <HomeTabs.Screen
        name="Bookings"
        component={BookingsPage}
        options={{
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: 20, color }}>📅</Text>
          ),
        }}
      />
      <HomeTabs.Screen
        name="ListVehicle"
        component={ListVehiclePage}
        options={{
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: 20, color }}>➕</Text>
          ),
        }}
      />
      <HomeTabs.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: 20, color }}>👤</Text>
          ),
        }}
      />
    </HomeTabs.Navigator>
  );
}

export function RootNavigator() {
  const theme = useTheme();

  const navigationTheme = {
    ...DefaultTheme,
    dark: false,
    colors: {
      primary: theme.colors.primary,
      background: theme.colors.bg,
      card: theme.colors.surface,
      text: theme.colors.primaryTextOn,
      border: theme.colors.divider,
      notification: theme.colors.primary,
    },
  };

  return (
    <NavigationContainer theme={navigationTheme}>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="AuthStack" component={AuthNavigator} />
        <RootStack.Screen name="HomeTabs" component={HomeTabsNavigator} />
        <RootStack.Screen
          name="VehicleDetails"
          component={VehicleDetailsPage}
          options={{
            headerShown: true,
            title: 'Vehicle Details',
            headerStyle: {
              backgroundColor: theme.colors.surface,
            },
            headerTintColor: theme.colors.primaryTextOn,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
