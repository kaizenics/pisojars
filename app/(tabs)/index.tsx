import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function Overview() {
  return (
    <View style={styles.container}>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <View style={styles.card}>
          <FontAwesome name="money" size={24} color="#10b981" />
          <Text style={styles.cardTitle}>Total Salary</Text>
          <Text style={styles.amount}>₱50,000</Text>
        </View>

        <View style={styles.card}>
          <FontAwesome name="credit-card" size={24} color="#10b981" />
          <Text style={styles.cardTitle}>Total Expense</Text>
          <Text style={styles.amount}>₱30,000</Text>
        </View>

        <View style={styles.card}>
          <FontAwesome name="calculator" size={24} color="#10b981" />
          <Text style={styles.cardTitle}>Monthly Budget</Text>
          <Text style={styles.amount}>₱20,000</Text>
        </View>
      </ScrollView>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <FontAwesome5 name="piggy-bank" size={24} color="#10b981" />
          <Text style={styles.buttonText}>Savings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <FontAwesome name="bell" size={24} color="#10b981" />
          <Text style={styles.buttonText}>Remind</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <FontAwesome name="list-alt" size={24} color="#10b981" />
          <Text style={styles.buttonText}>Budget</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.entriesContainer}>
        <View style={styles.entriesHeader}>
          <Text style={styles.entriesTitle}>Latest Entries</Text>
          <TouchableOpacity>
            <FontAwesome name="ellipsis-h" size={20} color="#7f8c8d" />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.entriesScroll}>
          <View style={styles.entryItem}>
            <View style={styles.entryMain}>
              <Text style={styles.entryTitle}>Food</Text>
              <Text style={styles.entryAmount}>+$20 <Text style={styles.vatText}>+ Vat 0.05</Text></Text>
            </View>
            <Text style={styles.entryDate}>Oct 15, 2023</Text>
          </View>

          <View style={styles.entryItem}>
            <View style={styles.entryMain}>
              <Text style={styles.entryTitle}>Uber</Text>
              <Text style={styles.entryAmount}>+$15 <Text style={styles.vatText}>+ Vat 0.05</Text></Text>
            </View>
            <Text style={styles.entryDate}>Oct 15, 2023</Text>
          </View>

          <View style={styles.entryItem}>
            <View style={styles.entryMain}>
              <Text style={styles.entryTitle}>Shopping</Text>
              <Text style={styles.entryAmount}>+$50 <Text style={styles.vatText}>+ Vat 0.05</Text></Text>
            </View>
            <Text style={styles.entryDate}>Oct 14, 2023</Text>
          </View>

          <View style={styles.entryItem}>
            <View style={styles.entryMain}>
              <Text style={styles.entryTitle}>Coffee</Text>
              <Text style={styles.entryAmount}>+$5 <Text style={styles.vatText}>+ Vat 0.05</Text></Text>
            </View>
            <Text style={styles.entryDate}>Oct 14, 2023</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
  },
  scrollContainer: {
    padding: 16,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginRight: 16,
    width: 150,
    height: 150, 
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 16,
    color: '#7f8c8d',
    marginTop: 12,
    marginBottom: 8,
    fontFamily: 'Roboto-Regular',
  },
  amount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    fontFamily: 'Noto-Bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 25, // increased padding
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    alignItems: 'center',
    padding: 15, // increased padding
  },
  buttonText: {
    marginTop: 8,
    fontSize: 12,
    color: '#2c3e50',
    fontFamily: 'Noto-Medium',
  },
  entriesContainer: {
    backgroundColor: 'white',
    padding: 16,
    flex: 1,
    minHeight: 250, // added minimum height
  },
  entriesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  entriesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    fontFamily: 'Noto-Bold',
  },
  entriesScroll: {
    flex: 1,
  },
  entryItem: {
    backgroundColor: '#f8f9fa',
    paddingVertical: 16, 
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  entryMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
  },
  entryTitle: {
    fontSize: 16,
    color: '#2c3e50',
    fontFamily: 'Noto-Medium',
  },
  entryAmount: {
    fontSize: 16,
    color: '#2ecc71',
    fontFamily: 'Noto-Medium',
  },
  vatText: {
    fontSize: 12,
    color: '#7f8c8d',
    fontFamily: 'Roboto-Regular',
  },
  entryDate: {
    fontSize: 12,
    color: '#7f8c8d',
    fontFamily: 'Roboto-Regular',
  },
});
