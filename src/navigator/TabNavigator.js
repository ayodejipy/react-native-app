import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
// Screens
import Portfolio from '../screens/porfolio';
import SinglePortfolio from '../screens/porfolio/portfolio';
import Transactions from '../screens/porfolio/Transactions';
import Profile from '../screens/user';
import { AntDesign, Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

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

const AppTabNavigator = () => {
    
    return (
        <>            
            <Tab.Navigator 
                screenOptions={{ ...screenOptionsStyle,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        elevation: 0,
                        backgroundColor: '#091022',
                        borderTopColor: '#091022',
                        // marginTop: tabHeight,
                    },
                    // tabBarInactiveTintColor: '#f5f5f5'
                }}
            >
                <Tab.Screen name="Home" component={Portfolio} 
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={{alignItems: 'center', justifyContent: 'center', }}>
                                <AntDesign name="home" style={[styles.icon, { color: focused ? '#c3841c' : '#828690' }]} />
                                <Text style={[styles.iconText, { color: focused ? '#c3841c' : '#828690', }]}>Home</Text>
                            </View>
                        )
                    }} 
                />
                <Tab.Screen name="userPortfolio" component={SinglePortfolio}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={{alignItems: 'center', justifyContent: 'center', }}>
                                <Feather name="bar-chart-2" style={[styles.icon, { color: focused ? '#c3841c' : '#828690' }]} />
                                <Text style={[styles.iconText, { color: focused ? '#c3841c' : '#828690', }]}>Portfolio</Text>
                            </View>
                        )
                    }} 
                />
                <Tab.Screen name="Transactions" component={Transactions} 
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={{alignItems: 'center', justifyContent: 'center', }}>
                                <AntDesign name="creditcard" style={[styles.icon, { color: focused ? '#c3841c' : '#828690' }]} />
                                <Text style={[styles.iconText, { color: focused ? '#c3841c' : '#828690', }]}>Transactions</Text>
                            </View>
                        )
                    }} 
                />
                
                <Tab.Screen name="Profile" component={Profile} 
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={{alignItems: 'center', justifyContent: 'center', }}>
                                <Feather name="menu" style={[styles.icon, { color: focused ? '#c3841c' : '#828690' }]} />
                                <Text style={[styles.iconText, { color: focused ? '#c3841c' : '#828690', }]}>More</Text>
                            </View>
                        )
                    }} 
                />
            </Tab.Navigator>
        </>
    )
}

const styles = StyleSheet.create({
    icon: {
        fontSize: 18,
        marginBottom: 4,
        // color: focused ? '#c3841c' : '#828690',
    },
    iconText: {
        fontFamily: 'SourceSansPro_600SemiBold',
        fontSize: 13,
        textTransform: 'capitalize',
        // color: focused ? '#c3841c' : '#828690',
    },
})

export default AppTabNavigator;
