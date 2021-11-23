import React, { useState, useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { Container } from '../../../assets/styles/styles';
import { Ionicons } from '@expo/vector-icons';
import { useAuthContext } from '../../Hook/useAuthContext';

const Login = () => {
    const navigation = useNavigation();
    const [ email, onChangeEmail ] = useState('');
    const [ password, onChangePassword ] = useState('');
    const { auth } = useAuthContext();
    
    const handleLoginPress = async () => {
        await auth.handleLogin({
           username: 'dominn@gmail.com',
           password: '000000@!!!234',
        })
        navigation.navigate('Portfolio')
    }
    
    return (
        <Container>
            <StatusBar style='auto' />
            <SafeAreaView style={{ flex: 1, paddingHorizontal: 18, }}>
                <View style={styles.blockHeading}>
                    <View style={styles.backBtnWrap}>
                        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
                            <Ionicons name="md-close-outline" color="rgba(255, 255, 255, .9)" size={20} />
                        </TouchableOpacity>                    
                    </View>
                </View>
                
                <View style={styles.pageTitleWrap}>
                    <Text style={styles.blockTitle}>Log in</Text>                    
                </View>
                
                <ScrollView showsVerticalScrollIndicator={false}>                
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 0}
                        style={{  flexDirection: 'column', height: '100%', }}
                    >
                        <View style={styles.loginPageWrap}>                    
                            <View style={styles.formWrapper}>
                                <View style={styles.inputWrap}>
                                    <Text style={styles.label}>Email Address</Text>
                                    <TextInput 
                                        style={styles.inputBox}
                                        keyboardType="email-address"
                                        placeholder="Email address"
                                        placeholderTextColor="#828690"
                                    />
                                </View>
                                <View style={styles.inputWrap}>
                                    <Text style={styles.label}>Password</Text>
                                    <TextInput 
                                        style={styles.inputBox} 
                                        placeholder="*********"
                                        placeholderTextColor="#828690"
                                    />
                                </View>
                                
                                <View style={styles.loginWrap}>
                                    {/* <Text style={{ color: '#c2c2c2', marginRight: 2, }}> Do not have an account? </Text> */}                                
                                    <TouchableOpacity onPress={() => handleLoginPress()}>
                                        <Text style={styles.loginText}>Forgot Password?</Text>
                                    </TouchableOpacity>
                                </View>
                                
                                <View style={styles.actionArea}>
                                    <TouchableOpacity style={styles.signupBtn} onPress={() => handleLoginPress()}>
                                        <Text style={styles.buttonText}>Log in</Text>
                                    </TouchableOpacity>                            
                                </View>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
                <View style={styles.bottomSpace}></View>
            </SafeAreaView>
        </Container>
    )
}

export default Login;

const styles = StyleSheet.create({
    loginPageWrap: {
        flex: 1,
        // paddingHorizontal: 18,
        // borderColor: '#fff',
        // borderWidth: 1,
        marginVertical: 45,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: '80%',
    },
    bottomSpace: {
        height: 180,
    },
    blockHeading: {
        // backgroundColor: '#fff',
        color: '#fff',
        flexBasis: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        paddingTop: 5,
        // paddingHorizontal: 12,
        position: 'relative',
    },
    pageTitleWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        marginTop: 30,
        marginBottom: 20,
    },
    blockTitle: {
        fontSize: 32,
        color: '#fff',
        flexBasis: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        fontFamily: 'SourceSansPro_700Bold',
    },
    backBtnWrap: {
        flexBasis: 135,
    },
    backBtn: {
        width: 34,
        height: 34,
        backgroundColor: 'rgba(78, 79, 80, 0.3)',
        color: '#fff',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    pattern: {
        color: '#fff',
    },
    formWrapper: {
        marginVertical: 20,
    },
    inputWrap: {
        marginBottom: 14,
    },
    label: {
        color: '#ccc',
        fontFamily: 'SourceSansPro_700Bold',
        marginBottom: 10,
    },
    inputBox: {
        fontFamily: 'SourceSansPro_400Regular',
        color: '#fff',
        borderWidth: 1,
        borderColor: 'rgba(78, 79, 80, 0.8)',
        backgroundColor: 'rgba(78, 79, 80, 0.3)',
        borderRadius: 3,
        paddingHorizontal: 8,
        paddingVertical: 8,
    },
    actionArea: {
        width: '100%',
        marginTop: 25,
        // flex: 1,
    },
    signupBtn: {
        backgroundColor: '#c3841c',
        color: '#f5f6f7',
        fontWeight: '600',
        paddingVertical: 16,
        paddingHorizontal: 60,
        borderRadius: 6,
        // width: '70%',
        marginBottom: 20,
    },
    buttonText: {
        color: '#f5f6f7',
        fontFamily: 'SourceSansPro_700Bold',
        fontSize: 16,
        textAlign: 'center',
    },
    loginWrap: {
        flexDirection: 'row',
        // justifyContent: 'center',
    },
    loginText: {
        color: '#c5bee4',
        fontFamily: 'SourceSansPro_400Regular',
        fontWeight: "700"
    }
})