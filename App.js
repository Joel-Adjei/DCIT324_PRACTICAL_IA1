import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import AboutScreen from "./screens/AboutScreen";
import StackNavigation from "./StackNavigation";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={<HomeScreen />} />
    //     <Stack.Screen name="about" component={<AboutScreen />} />
    //     <Stack.Screen name="details" component={<DetailsScreen />} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={StackNavigation}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="About"
          component={AboutScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>

    // <View>
    //   <Text>Hello ddfdfdfddf</Text>
    // </View>
  );
}
