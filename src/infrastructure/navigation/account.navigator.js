// import React from "react";
// import { Text, View } from "react-native";
// import {
//   createStackNavigator,
//   TransitionPresets,
// } from "@react-navigation/stack";

// import { AccountScreen } from "../../features/account/screens/account.screen";
// import { LoginScreen } from "../../features/account/screens/login.screen";
// import { RegisterScreen } from "../../features/account/screens/Register.screen";

// const Stack = createStackNavigator();

// export const AccountNavigator = () => {
//   <Stack.Navigator
//     headerMode="none"
//     // screenOptions={{
//     //   ...TransitionPresets.ModalPresentationIOS,
//     // }}
//   >
//     <Stack.Screen name="Main" component={AccountScreen} />
//     <Stack.Screen name="Login" component={LoginScreen} />
//     <Stack.Screen name="Register" component={RegisterScreen} />
//   </Stack.Navigator>;
// };

import React from "react";
import { Text, View } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

import { AccountScreen } from "../../features/account/screens/account.screen";
import { LoginScreen } from "../../features/account/screens/login.screen";
import { RegisterScreen } from "../../features/account/screens/Register.screen";

const AccountStack = createStackNavigator();

export const AccountNavigator = () => {
  return (
    <AccountStack.Navigator headerMode="none">
      <AccountStack.Screen name="Main" component={AccountScreen} />
      <AccountStack.Screen name="Login" component={LoginScreen} />
      <AccountStack.Screen name="Register" component={RegisterScreen} />
    </AccountStack.Navigator>
  );
};
