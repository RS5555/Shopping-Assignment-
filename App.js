// App.js
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import CustomDrawer from './components/CustomDrawer';
import SignUpScreen from './screens/SignUpScreen/SignUpScreen';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import ProductDetailScreen from './screens/ProductDetailScreen/ProductDetailScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const HomeDrawer = () => (
  <Drawer.Navigator
    drawerContent={props => <CustomDrawer {...props} />}
    screenOptions={{
      drawerActiveBackgroundColor: '#FF9B05',
      drawerActiveTintColor: '#ffffff',
      drawerInactiveTintColor: '#5c5a5a',
      drawerLabelStyle: {
        marginLeft: -15,
        fontFamily: 'Roboto-Medium',
        fontSize: 15,
        fontWeight: 'bold',
        borderRadius: 20,
      },
    }}>
    <Drawer.Screen
      name="home"
      component={HomeScreen}
      options={{
        title: 'Home',
      }}
    />
  </Drawer.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="loginScreen" component={LoginScreen} />
        <Stack.Screen name="signUpScreen" component={SignUpScreen} />
        <Stack.Screen name="productDetailScreen" component={ProductDetailScreen} />
        <Stack.Screen name="homeDrawer" component={HomeDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
