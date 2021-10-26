import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Welcome from '../screens/onBoarding/Welcome';
import Login from '../screens/auth/Login';
import onScreenIntroduction from '../screens/onBoarding';
import Portfolio from '../screens/porfolio';

const Stack = createStackNavigator();
const screenOptionsStyle = {
    headerShown: false,
}

const AppStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionsStyle}>
            <Stack.Screen name="On Boading" component={onScreenIntroduction} />
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Portfolio" component={Portfolio} />
        </Stack.Navigator>
    )
}

export default AppStackNavigator;
