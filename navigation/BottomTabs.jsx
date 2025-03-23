import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";

import JobsScreen from "../screens/JobsScreen";
import JobDetailsScreen from "../screens/JobDetailsScreen";
import PaymentsScreen from "../screens/PaymentsScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Jobs"
        component={JobsScreen}
        options={{ tabBarIcon: ({ color }) => <FontAwesome5 name="briefcase" size={20} color={color} /> }}
      />
      <Tab.Screen
        name="History"
        component={JobDetailsScreen}
        options={{ tabBarIcon: ({ color }) => <FontAwesome5 name="history" size={20} color={color} /> }}
      />
      <Tab.Screen
        name="Payments"
        component={PaymentsScreen}
        options={{ tabBarIcon: ({ color }) => <FontAwesome5 name="credit-card" size={20} color={color} /> }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarIcon: ({ color }) => <FontAwesome5 name="user" size={20} color={color} /> }}
      />
      
    </Tab.Navigator>
  );
}
