import { colors } from "@/styles/global";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: colors.background },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="index"
        options={{ headerShown: false, title: "Home" }}
      />
      <Stack.Screen name="meals" options={{ title: "Meals" }} />
      <Stack.Screen name="add-meals" options={{ title: "Add Meals" }} />
    </Stack>
  );
}
