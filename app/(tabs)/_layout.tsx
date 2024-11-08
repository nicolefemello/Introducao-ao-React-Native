import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => (
            <MaterialIcons name="home" size={26} color="black" />
          )
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: () => (
          <MaterialIcons name="info" size={26} color="black" />
        )
        }}
      />
    </Tabs>
  );
}