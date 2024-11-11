import React from "react";
import { View, Text, Pressable, StyleSheet, Dimensions } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function Add() {
  const ActionButton = ({ title, icon, onPress, color }: { title: string; icon: keyof typeof MaterialCommunityIcons.glyphMap; onPress: () => void; color: string }) => (
    <Pressable 
      style={({pressed}) => [
        styles.button,
        { opacity: pressed ? 0.9 : 1,
          transform: [{ scale: pressed ? 0.98 : 1 }]
        }
      ]}
      onPress={onPress}
    >
      <MaterialCommunityIcons name={icon} size={32} color={color} />
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What would you like to add?</Text>
      
      <View style={styles.grid}>
        <ActionButton
          title="Income"
          icon="cash-plus"
          color="#10b981"
          onPress={() => router.push('/(misc)/income')}
        />
        <ActionButton
          title="Goals"
          icon="target"
          color="#10b981"
          onPress={() => router.push('/(misc)/goals')}
        />
        <ActionButton
          title="Expense"
          icon="cart-outline"
          color="#10b981"
          onPress={() => router.push('/(misc)/expense')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Noto-Bold',
    color: '#333',
    marginBottom: 32,
    marginTop: 40,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  button: {
    width: Dimensions.get('window').width / 2 - 32,
    aspectRatio: 1,
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  buttonText: {
    marginTop: 12,
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
    color: '#333',
  },
});
