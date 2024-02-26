// In App.js in a new project

import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons/MaterialCommunityIcons";

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function PodcastsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Podcasts Screen</Text>
      <Button
        title="Podcasts Page"
        onPress={() => {
          navigation.navigate("Podcasts");
        }}
      />
    </View>
  );
}

function LiveScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button
        title="Live Page"
        onPress={() => {
          navigation.navigate("Live");
        }}
      />
    </View>
  );
}

function ScheduleScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button
        title="Schedule Page"
        onPress={() => {
          navigation.navigate("Schedule");
        }}
      />
    </View>
  );
}

function ContactScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button
        title="Contact Page"
        onPress={() => {
          navigation.navigate("Contact");
        }}
      />
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{ activeTintColor: "blue", inactiveTintColor: "gray" }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
          }}
        />
        <Tab.Screen
          name="Podcasts"
          component={PodcastsScreen}
          options={{ title: "Podcasts" }}
        />

        <Tab.Screen
          name="Live"
          component={LiveScreen}
          options={{ title: "Live" }}
        />

        <Tab.Screen
          name="Schedule"
          component={ScheduleScreen}
          options={{ title: "Schedule" }}
        />

        <Tab.Screen
          name="Contact"
          component={ContactScreen}
          options={{ title: "Contact" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
