import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

// Update interface with correct Ionicons type
interface SettingsItemProps {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  subtitle: string;
}

export default function SettingsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Account</Text>
        <SettingsItem 
          icon="person-outline" 
          title="Profile"
          subtitle="Manage your account information"
        />
        <SettingsItem 
          icon="notifications-outline" 
          title="Notifications"
          subtitle="Configure notification preferences"
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Preferences</Text>
        <SettingsItem 
          icon="color-palette-outline" 
          title="Theme"
          subtitle="Light or Dark mode"
        />
        <SettingsItem 
          icon="globe-outline" 
          title="Language"
          subtitle="English"
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Other</Text>
        <SettingsItem 
          icon="information-circle-outline" 
          title="About"
          subtitle="Version 1.0.0"
        />
        <SettingsItem 
          icon="help-circle-outline" 
          title="Help & Support"
          subtitle="FAQ, Contact us"
        />
      </View>
    </ScrollView>
  );
}

function SettingsItem({ icon, title, subtitle }: SettingsItemProps) {
  return (
    <TouchableOpacity style={styles.settingsItem}>
      <Ionicons name={icon} size={24} color="#059669" />
      <View style={styles.settingsItemText}>
        <Text style={styles.settingsItemTitle}>{title}</Text>
        <Text style={styles.settingsItemSubtitle}>{subtitle}</Text>
      </View>
      <Ionicons name="chevron-forward" size={24} color="#6b7280" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 14,
    fontFamily: 'Noto-Bold',
    color: '#6b7280',
    textTransform: 'uppercase',
  },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  settingsItemText: {
    flex: 1,
    marginLeft: 16,
  },
  settingsItemTitle: {
    fontSize: 16,
    fontFamily: 'Noto-Medium',
    color: '#1f2937',
  },
  settingsItemSubtitle: {
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    color: '#6b7280',
  },
});
