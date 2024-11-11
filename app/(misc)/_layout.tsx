import React from "react";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="income" options={{ title: "Add Income" }} />
        <Stack.Screen name="expense" options={{ title: "Total Expenses" }}  />
        <Stack.Screen name="goals" options={{ title: "Add Goal" }} />
      </Stack>
    </>
  );
}
