import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen';
import { MapScreen } from '../screens/MapScreen';
import { DiscoveryScreen } from '../screens/DiscoveryScreen';
import { ChatScreen } from '../screens/ChatScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { FullProfileScreen } from '../screens/FullProfileScreen';
import { RootStackParamList, RootTabParamList } from './types';
import { colors } from '../theme/tokens';

const Tabs = createBottomTabNavigator<RootTabParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

function MainTabs() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#100b0b',
          borderTopColor: colors.border,
          height: 64,
          paddingBottom: 8,
          paddingTop: 8
        },
        tabBarActiveTintColor: colors.gold,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarIcon: ({ color, size }) => {
          const iconMap: Record<keyof RootTabParamList, keyof typeof Ionicons.glyphMap> = {
            Home: 'sparkles',
            Map: 'map',
            Discovery: 'images',
            Chat: 'chatbubbles',
            Profile: 'person-circle'
          };
          return <Ionicons name={iconMap[route.name]} size={size} color={color} />;
        }
      })}
    >
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Map" component={MapScreen} />
      <Tabs.Screen name="Discovery" component={DiscoveryScreen} />
      <Tabs.Screen name="Chat" component={ChatScreen} />
      <Tabs.Screen name="Profile" component={ProfileScreen} />
    </Tabs.Navigator>
  );
}

export function AppNavigator() {
  return (
    <NavigationContainer
      theme={{
        ...DarkTheme,
        colors: {
          ...DarkTheme.colors,
          background: colors.bg,
          card: '#100b0b',
          text: colors.textPrimary,
          border: colors.border,
          primary: colors.gold
        }
      }}
    >
      <Stack.Navigator>
        <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen
          name="FullProfile"
          component={FullProfileScreen}
          options={{
            title: 'Artist Profile',
            headerStyle: { backgroundColor: '#100b0b' },
            headerTintColor: colors.textPrimary,
            headerShadowVisible: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
