import React from "react";
import { Tabs, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Dimensions } from "react-native";

export default function TabsLayout() {
  const router = useRouter();

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveTintColor: "#059669",
        tabBarInactiveTintColor: "#52525b",
        tabBarStyle: {
          backgroundColor: "#e5e5e5",
          borderTopWidth: 0,
          height: 65,
          paddingTop: 10,
          paddingBottom: 0,
          position: 'relative',
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "Noto-Medium",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Overview",
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
          tabBarLabelStyle: {
            fontFamily: "Noto-Medium",
            fontSize: 12,
          }
        }}
      />
      <Tabs.Screen
        name="add/index"
        options={{
          title: "",
          headerShown: false,
          tabBarButton: () => (
            <Pressable 
              style={styles.addButton}
              onPress={() => router.push("/add")}
            >
              <Ionicons name="add" size={32} color="white" />
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen
        name="settings/index"
        options={{
          title: "Settings",
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={size} />
          ),
          tabBarLabelStyle: {
            fontFamily: "Noto-Medium",
            fontSize: 12,
          }
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  addButton: {
    position: 'absolute',
    bottom: 20,
    left: Dimensions.get('window').width / 2 - 32,
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#059669',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  }
});
