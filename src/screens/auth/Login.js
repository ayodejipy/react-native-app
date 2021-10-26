import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

const Login = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Login Page
            </Text>
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
    },
    text: {
      fontWeight: "600",
      fontSize: 24,
    },
})