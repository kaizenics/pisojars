import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "Noto-Regular": require("../assets/fonts/noto/NotoSansJP-Regular.ttf"),
    "Noto-Medium": require("../assets/fonts/noto/NotoSansJP-Medium.ttf"),
    "Noto-Bold": require("../assets/fonts/noto/NotoSansJP-Bold.ttf"),
    "Roboto-Regular": require("../assets/fonts/roboto/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../assets/fonts/roboto/Roboto-Medium.ttf"),
    "Roboto-Bold": require("../assets/fonts/roboto/Roboto-Bold.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (fontsLoaded) {

    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
      <Stack.Screen name="(misc)" options={{ headerShown: false }}/>
    </Stack>
  );
}
