import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, ScrollView, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { Container } from '../../../assets/styles/styles';
import { Ionicons } from '@expo/vector-icons';
import { Formik } from 'formik';
import * as yup from "yup"
import Spin from '../../components/Spinner/Spinner';
import { useAuthContext } from '../../Hook/useAuthContext';

const Register = () => {
    const navigation = useNavigation();
    const { loading } = useAuthContext()
        
    const initialValues = {
        name: '',
        phoneNumber: '',
        email: '',
        password: '',
        referralEmail: '',
    }
    
    const signupValidationSchema = yup.object().shape({
        name: yup.string().required('Name is required'),
        phoneNumber: yup.string().required('Phone number is required'),
        email: yup.string().email('Please enter a valid email').required(''),
        password: yup.string().required('Password is required'),
        referralEmail: yup.string().email('Please enter a valid email')
    })
    
    const triggerSignupService = () => {
        
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
                    <Text style={styles.blockTitle}>Create an Account</Text>                    
                </View>
                
                <ScrollView showsVerticalScrollIndicator={false}>                
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 0}
                        style={{  flexDirection: 'column', height: '100%', }}
                    >
                        <View style={styles.registerPageWrap}>
                            <Formik
                                validationSchema={signupValidationSchema}
                                initialValues={initialValues}
                                onSubmit={ values => {
                                    // console.log({ values })
                                    triggerSignupService(values)
                                }}
                            >
                                {({ handleChange, handleBlur, handleSubmit, values }) => (
                                    <View style={styles.formWrapper}>
                                        <View style={styles.inputWrap}>
                                            <Text style={styles.label}>Full Name</Text>
                                            <TextInput 
                                                style={styles.inputBox}
                                                placeholder="Full name"
                                                placeholderTextColor="#828690"
                                                onChangeText={handleChange('name')}
                                                onBlur={handleBlur('name')}
                                                value={values.name}
                                            />
                                        </View>
                                        <View style={styles.inputWrap}>
                                            <Text style={styles.label}>Phone Number</Text>
                                            <TextInput 
                                                style={styles.inputBox}
                                                placeholder="Phone number"
                                                placeholderTextColor="#828690"
                                                onChangeText={handleChange('phoneNumber')}
                                                onBlur={handleBlur('phoneNumber')}
                                                value={values.phoneNumber}
                                            />
                                        </View>
                                        <View style={styles.inputWrap}>
                                            <Text style={styles.label}>Email Address</Text>
                                            <TextInput 
                                                style={styles.inputBox}
                                                keyboardType="email-address"
                                                placeholder="Email address"
                                                placeholderTextColor="#828690"
                                                onChangeText={handleChange('email')}
                                                onBlur={handleBlur('email')}
                                                value={values.email}
                                            />
                                        </View>
                                        <View style={styles.inputWrap}>
                                            <Text style={styles.label}>Password</Text>
                                            <TextInput 
                                                style={styles.inputBox} 
                                                placeholder="*********"
                                                placeholderTextColor="#828690"
                                                onChangeText={handleChange('password')}
                                                onBlur={handleBlur('password')}
                                                value={values.password}
                                            />
                                        </View>
                                        <View style={styles.inputWrap}>
                                            <Text style={styles.label}>Referrer (optional)</Text>
                                            <TextInput 
                                                style={styles.inputBox} 
                                                placeholder="Referrer's email"
                                                placeholderTextColor="#828690"
                                                keyboardType="email-address"
                                                onChangeText={handleChange('referralEmail')}
                                                onBlur={handleBlur('referralEmail')}
                                                value={values.referralEmail}
                                            />
                                        </View>
                                        
                                        <View style={styles.actionArea}>
                                            <TouchableOpacity style={styles.signupBtn} onPress={navigation.navigate('Portfolio')}>
                                                <Text style={styles.buttonText}>{ loading ? <Spin /> : 'Sign up' }</Text>
                                            </TouchableOpacity>                            
                                        </View>
                                    </View>
                                )}
                            </Formik>
                            <View style={styles.bottomSpace}></View>
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
            </SafeAreaView>
        </Container>
    )
}

export default Register;

const styles = StyleSheet.create({
    registerPageWrap: {
        flex: 1,
        // paddingHorizontal: 18,
        // borderColor: '#fff',
        // borderWidth: 1,
        marginVertical: 45,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: '96%',
    },
    bottomSpace: {
        height: 220,
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
    registerWrap: {
        flexDirection: 'row',
        // justifyContent: 'center',
    },
    registerText: {
        color: '#c5bee4',
        fontFamily: 'SourceSansPro_400Regular',
        fontWeight: "700"
    }
})