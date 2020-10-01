import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/Home";
import Detail from "../pages/Detail";

const MyStack = createStackNavigator();

function Routes() {
  return (
    <MyStack.Navigator screenOptions={{ headerShown: false }}>
      <MyStack.Screen name="Home" component={Home} />
      <MyStack.Screen name="Detail" component={Detail} />
    </MyStack.Navigator>
  );
}

export default Routes;
