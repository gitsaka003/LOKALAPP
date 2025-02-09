import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { JobsScreen } from '../screens/JobsScreen';
import { BookmarksScreen } from '../screens/BookmarksScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();


export function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen 
        name="Jobs" 
        component={JobsScreen} 
        options={{ tabBarIcon: ({ color, size }) => <Ionicons name="briefcase-outline" color={color} size={size} />} } 
      />
      <Tab.Screen 
        name="Bookmarks" 
        component={BookmarksScreen} 
        options={{ tabBarIcon: ({ color, size }) => <Ionicons name="bookmark-outline" color={color} size={size} />} } 
      />
    </Tab.Navigator>
  );
}
