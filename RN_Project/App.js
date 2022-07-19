
import 'react-native-gesture-handler'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import Login from './screen/login';
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';

import { navigationRef } from './RootNavigation';

import HomeScreen from './screen/HomeDrawer';
import NotificationsScreen from './screen/notification';
import Registration from './screen/Registration';
import ManageDocumentScreen from './screen/ManageDocument';
import ManageUserScreen from './screen/ManageUser';
import MessageScreen from './screen/Message';
import ChatScreen from './screen/Chat';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Root() {
  return (
    <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} options={{title:'Home'}} />
      <Drawer.Screen name="Message" component={MessageScreen}  options={{title:'Group Chat'}}/>
      <Drawer.Screen name="Users" component={ManageUserScreen}  options={{title:'Manage Users'}}/>
      <Drawer.Screen name="Document" component={ManageDocumentScreen} options={{title:'Manage Documents'}}/>
      <Drawer.Screen name="Notifications" component={NotificationsScreen} options={{title:'Logout'}} />
    </Drawer.Navigator>
  );
}
export default function App() {
  return (

    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName='Login'
        screenOptions={{
          headerMode: 'screen',
          headerTitleStyle: { fontSize: 30, fontWeight: "bold", },
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen name='Login' component={Login} options={{
          title: 'LOGIN',
        }} />
        <Stack.Screen name='Registration' component={Registration} options={{
          title: 'REGISTER',
        }} />
        <Stack.Screen
          name="Root"
          component={Root}
          options={{ headerShown: false }}
        />
        <Stack.Screen name='Chat' component={ChatScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
