/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import {
  Ionicons,
  Entypo,
  EvilIcons,
  MaterialCommunityIcons,
  FontAwesome5,
} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
// import TabOneScreen from '../screens/TabOneScreen';
// import TabTwoScreen from '../screens/TabTwoScreen';
import HomeScreen from '../screens/HomeScreen';
import LibraryScreen from '../screens/LibraryScreen';
import PremiumScreen from '../screens/PremiumScreen';
import SearchScreen from '../screens/SearchScreen';

import {
  BottomTabParamList,
  HomeParamList,
  LibraryParamList,
  PremiumParamList,
  SearchParamList,
} from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName='Home'
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name='Home'
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo
              size={30}
              style={{ marginBottom: -3 }}
              name='home'
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name='Search'
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <EvilIcons
              size={30}
              style={{ marginBottom: -3 }}
              name='search'
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name='Your Library'
        component={LibraryNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              size={30}
              style={{ marginBottom: -3 }}
              name='library-outline'
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name='Premium'
        component={PremiumNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5
              size={30}
              style={{ marginBottom: -3 }}
              name='spotify'
              color={color}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{ headerTitle: 'Home Title', headerShown: true }}
      />
    </HomeStack.Navigator>
  );
}

const LibraryStack = createStackNavigator<LibraryParamList>();

function LibraryNavigator() {
  return (
    <LibraryStack.Navigator>
      <LibraryStack.Screen
        name='LibraryScreen'
        component={LibraryScreen}
        options={{ headerTitle: 'Library Title' }}
      />
    </LibraryStack.Navigator>
  );
}

const PremiumStack = createStackNavigator<PremiumParamList>();

function PremiumNavigator() {
  return (
    <PremiumStack.Navigator>
      <PremiumStack.Screen
        name='PremiumScreen'
        component={PremiumScreen}
        options={{ headerTitle: 'Premium Title' }}
      />
    </PremiumStack.Navigator>
  );
}

const SearchStack = createStackNavigator<SearchParamList>();

function SearchNavigator() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name='SearchScreen'
        component={SearchScreen}
        options={{ headerTitle: 'Search Title' }}
      />
    </SearchStack.Navigator>
  );
}
