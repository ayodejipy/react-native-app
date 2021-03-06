import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
// Screens
import Welcome from '../screens/onBoarding/Welcome';
import Login from '../screens/auth/Login';
import onScreenIntroduction from '../screens/onBoarding';
import Register from '../screens/auth/Register';
import EditProfile from '../screens/user/EditProfile';
import ChangePassword from '../screens/user/ChangePassword';
import BuyCoin from '../screens/porfolio/Buy';

import AppTabNavigator from './TabNavigator';

const Stack = createStackNavigator();
const screenOptionsStyle = {
    headerShown: false,
}
const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
};

const AppStackNavigator = () => {
    return (
        <>
            <Stack.Navigator screenOptions={screenOptionsStyle}>
                <Stack.Screen name="OnBoading" component={onScreenIntroduction} />
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Portfolio" component={AppTabNavigator} />
                <Stack.Screen name="EditProfile" component={EditProfile} />
                <Stack.Screen name="ChangePassword" component={ChangePassword} />
                <Stack.Screen name="BuyCoin" component={BuyCoin} />
                
                {/* <Stack.Screen name="SinglePortfolio" component={SinglePortfolio} />
                <Stack.Screen name="Profile" component={Profile} 
                    options={{ transitionSpec: {
                            open: config,
                            close: config,
                        }
                    }} 
                /> */}
            </Stack.Navigator>
        </>
    )
}

export default AppStackNavigator;
