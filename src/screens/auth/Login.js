import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { Container } from '../../../assets/styles/styles';

const Login = () => {
    const navigation = useNavigation();
    const [ email, onChangeEmail ] = useState('');
    const [ password, onChangePassword ] = useState('');
    
    return (
        <Container>
            <StatusBar style='auto' />
            <SafeAreaView style={{ flex: 1, }}>
                <Text style={styles.pattern}>Omo x333</Text>
            </SafeAreaView>
        </Container>
    )
}

export default Login;

const styles = StyleSheet.create({
    patternWrap: {
        width: '100%',
        height: '48%',
    },
    pattern: {
        color: '#fff',
    },
})