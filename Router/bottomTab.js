import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import HomeScreen from "../screens/HomeScreen";
import AddScreen from "../screens/addScreen";
import PacketScreen from "../screens/packetScreen";


export default function BottomTab() {
    const bottomTab = createBottomTabNavigator();

    return (
        <bottomTab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "white",
                tabBarInactiveTintColor: "white",
                tabBarStyle: {
                    backgroundColor: "#161955",
                    height: 60,
                    paddingBottom: 10,
                    paddingTop: 8
                }
            }}
        >
            <bottomTab.Screen
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="list" size={size} color={color} />
                    )
                }}
                name="Dashboard"
                component={HomeScreen}
            />
            <bottomTab.Screen
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="dashboard" size={size} color={color} />
                    )
                }}
                name="Daftar Packet"
                component={PacketScreen}
            />
            <bottomTab.Screen
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="plus" size={size} color={color} />
                    )
                }}
                name="Tambah"
                component={AddScreen}
            />
        </bottomTab.Navigator>
    )
}