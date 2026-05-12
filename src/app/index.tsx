import { globalStyles } from "@/styles/global";
import { Link } from "expo-router";
import { ScrollView, Text } from "react-native";
import HomeHeader from "../components/HomeHeader";

export default function HomeScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>Macrotrack</Text>
      <HomeHeader />
      <Link href="/meals" style={{ fontSize: 18, color: "#007bff" }}>
        Go to meals
      </Link>
      <Link href="/add-meals" style={{ fontSize: 18, color: "#007bff" }}>
        Add meals
      </Link>
    </ScrollView>
  );
}
