import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Goals() {
  const goals = [
    {
      title: 'New Laptop',
      targetAmount: 50000,
      currentAmount: 35000,
      deadline: 'December 2024',
      icon: 'laptop',
      category: 'Electronics',
    },
    {
      title: 'Travel Fund',
      targetAmount: 100000,
      currentAmount: 45000,
      deadline: 'March 2025',
      icon: 'airplane',
      category: 'Travel',
    },
    {
      title: 'Emergency Fund',
      targetAmount: 150000,
      currentAmount: 90000,
      deadline: 'June 2024',
      icon: 'shield-check',
      category: 'Savings',
    },
  ];

  interface Goal {
    title: string;
    targetAmount: number;
    currentAmount: number;
    deadline: string;
    icon: string;
    category: string;
  }

  const GoalCard = ({ goal }: { goal: Goal }) => {
    const progress = (goal.currentAmount / goal.targetAmount) * 100;
    
    return (
      <View style={styles.goalCard}>
        <View style={styles.goalHeader}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons name={goal.icon as any} size={24} color="#10b981" />
          </View>
          <View style={styles.categoryTag}>
            <Text style={styles.categoryText}>{goal.category}</Text>
          </View>
        </View>

        <Text style={styles.goalTitle}>{goal.title}</Text>
        
        <View style={styles.amountContainer}>
          <Text style={styles.currentAmount}>
            ₱{goal.currentAmount.toLocaleString()}
          </Text>
          <Text style={styles.targetAmount}>
            / ₱{goal.targetAmount.toLocaleString()}
          </Text>
        </View>

        <View style={styles.progressBarBackground}>
          <View style={[styles.progressBar, { width: `${progress}%` }]} />
        </View>

        <View style={styles.goalFooter}>
          <MaterialCommunityIcons name="calendar" size={16} color="#6B7280" />
          <Text style={styles.deadline}>{goal.deadline}</Text>
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Goals</Text>
        <TouchableOpacity style={styles.addButton}>
          <MaterialCommunityIcons name="plus" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.goalsList}>
        {goals.map((goal, index) => (
          <GoalCard key={index} goal={goal} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Noto-Bold',
    color: '#374151',
  },
  addButton: {
    backgroundColor: '#10b981',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  goalsList: {
    padding: 16,
  },
  goalCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  goalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#dcfce7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryTag: {
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  categoryText: {
    color: '#6B7280',
    fontSize: 12,
    fontFamily: 'Roboto-Medium',
  },
  goalTitle: {
    fontSize: 18,
    color: '#374151',
    fontFamily: 'Roboto-Bold',
    marginBottom: 8,
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 12,
  },
  currentAmount: {
    fontSize: 20,
    color: '#10b981',
    fontFamily: 'Roboto-Bold',
  },
  targetAmount: {
    fontSize: 14,
    color: '#6B7280',
    marginLeft: 4,
    fontFamily: 'Roboto-Medium',
  },
  progressBarBackground: {
    height: 8,
    backgroundColor: '#f3f4f6',
    borderRadius: 4,
    marginBottom: 12,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#10b981',
    borderRadius: 4,
  },
  goalFooter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deadline: {
    marginLeft: 6,
    color: '#6B7280',
    fontSize: 14,
    fontFamily: 'Roboto-Medium',
  },
});