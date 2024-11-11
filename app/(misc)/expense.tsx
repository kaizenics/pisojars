import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Expense() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  type Expense = {
    category: string;
    amount: number;
    icon: 'food' | 'car' | 'shopping' | 'receipt' | 'medical-bag';
  };

  const expenses: Expense[] = [
    { category: 'Food', amount: 1250, icon: 'food' },
    { category: 'Transport', amount: 800, icon: 'car' },
    { category: 'Shopping', amount: 2500, icon: 'shopping' },
    { category: 'Bills', amount: 3500, icon: 'receipt' },
    { category: 'Health', amount: 1000, icon: 'medical-bag' },
  ];

  const totalExpense = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.totalCard}>
        <Text style={styles.totalLabel}>Total Expenses</Text>
        <Text style={styles.totalAmount}>₱{totalExpense.toLocaleString()}</Text>
      </View>

      <CalendarStrip
        style={styles.calendar}
        calendarColor={'#ffffff'}
        calendarHeaderStyle={styles.calendarHeader}
        dateNumberStyle={styles.dateNumber}
        dateNameStyle={styles.dateName}
        highlightDateNumberStyle={styles.highlightDate}
        highlightDateNameStyle={styles.highlightDate}
        selectedDate={selectedDate}
        onDateSelected={date => setSelectedDate(date.toDate())}
        scrollable
        showMonth
        iconStyle={{display: 'none'}}
      />

      <View style={styles.expensesList}>
        {expenses.map((expense, index) => (
          <View key={index} style={styles.expenseCard}>
            <View style={styles.expenseIcon}>
              <MaterialCommunityIcons name={expense.icon} size={24} color="#10b981" />
            </View>
            <View style={styles.expenseDetails}>
              <Text style={styles.expenseCategory}>{expense.category}</Text>
              <Text style={styles.expenseAmount}>₱{expense.amount.toLocaleString()}</Text>
            </View>
          </View>
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
  totalCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    margin: 16,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  totalLabel: {
    fontSize: 16,
    color: '#6B7280',
    fontFamily: 'Roboto-Medium',
  },
  totalAmount: {
    fontSize: 32,
    color: '#10b981',
    fontFamily: 'Noto-Bold',
    marginTop: 8,
  },
  calendar: {
    height: 100,
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    marginBottom: 16,
  },
  calendarHeader: {
    color: '#374151',
    fontSize: 14,
    fontFamily: 'Noto-Bold',
  },
  dateNumber: {
    color: '#374151',
    fontSize: 16,
    fontWeight: '600',
  },
  dateName: {
    color: '#6B7280',
    fontSize: 12,
  },
  highlightDate: {
    color: '#10b981',
    fontWeight: '700',
  },
  expensesList: {
    padding: 16,
  },
  expenseCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  expenseIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#dcfce7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  expenseDetails: {
    flex: 1,
  },
  expenseCategory: {
    fontSize: 16,
    color: '#374151',
    fontFamily: 'Roboto-Medium',
  },
  expenseAmount: {
    fontSize: 18,
    color: '#10b981',
    fontFamily: 'Roboto-Bold',
    marginTop: 4,
  },
});