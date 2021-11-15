import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Container } from '../../../assets/styles/styles';

export default function Welcome(props) {
    const navigation = useNavigation();
    const [email, onChangeEmail ] = useState('')
    const [password, onChangePassword ] = useState('')
    
    const handleLoginPress = () => {
        navigation.navigate("Login");
    }
    
    return (
        <Container>
            <StatusBar style='auto' />
            
            <View style={styles.patternWrap}>
                <ImageBackground style={styles.pattern} resizeMode="cover" source={require('../../../assets/images/pattern-1.jpg')} />
            </View>
            <View style={styles.content}>
                <Text style={styles.text}>Modi-bit</Text>
                <Text style={styles.subHeading}>Make money investments crystal clear to you</Text>
            </View>
            <View style={styles.actionArea}>
                <TouchableOpacity style={styles.signupBtn} onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.buttonText}>Create an account</Text>
                </TouchableOpacity>
                
                <View style={styles.loginWrap}>
                    <Text style={{ color: '#64626c', marginRight: 2, }}> Already have an account? </Text>
                    
                    <TouchableOpacity onPress={() => handleLoginPress()}>
                        <Text style={styles.loginText}>Log in</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Container>
    );
}

const styles = StyleSheet.create({
    patternWrap: {
        width: '100%',
        height: '48%',
    },
    pattern: {
        flex: 1,
    },    
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        maxWidth: '100%',
        paddingHorizontal: 95,
    },
    text: {
        fontWeight: "700",
        color: '#ecebf4',
        textAlign: 'left',
        fontSize: 32,
    },
    subHeading: {
        color: '#a19eae',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: "500",
    },
    actionArea: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 25,
    },
    signupBtn: {
        backgroundColor: '#c5bee4',
        color: '#25242b',
        fontWeight: '600',
        paddingVertical: 12,
        paddingHorizontal: 60,
        borderRadius: 8,
        // width: '70%',
        marginBottom: 20,
    },
    buttonText: {
        color: '#25242b',
        fontWeight: '700',
        fontSize: 16,
    },
    loginWrap: {
        flexDirection: 'row',
    },
    loginText: {
        color: '#c5bee4',
        fontWeight: "700"
    }
});
