import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Text, View, StyleSheet, Image, SafeAreaView, ScrollView, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import { Container } from '../../../assets/styles/styles';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { Formik } from 'formik';
import * as yup from 'yup'


const BuyCoin = ({ route }) => {
      const navigation = useNavigation();
      const { actionType } = route.params
      const [ pageContent, setPageContent ] = useState(null)
    
      console.log({ actionType });
      const formatTitle = () => {
         switch (actionType) {
            
            case 'buy':
               setPageContent({
                  title: 'Buy',
                  desc: 'Buying Modi-bit is superfast and easy',
                  buttonText: 'Buy'
               })
               break;
               
            case 'sell':
               setPageContent({
                  title: 'Sell',
                  desc: 'Some random sell description',
                  buttonText: 'Sell'
               })
               break;
               
            case 'self-finance':
               setPageContent({
                  title: 'Self Finance',
                  desc: 'Some random sell description',
                  buttonText: 'Buy'
               })
               break;
         
            default:
               break;
         }
      }
    
      const initialValues = {
         oldPassword: '',
         newPassword: ''
      }
      
      const ValidationSchema = yup.object().shape({
         oldPassword: yup.string().required(''),
         newPassword: yup.string().required('Password is required')
      })
    
      useEffect(() => {
        formatTitle()
      }, []);
    
    return (
         <Container>
            <SafeAreaView style={{ flex: 1,}}>
               <View style={styles.blockHeading}>
                  <View style={styles.backBtnWrap}>
                     <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
                        <Ionicons name="md-close-outline" color="rgba(255, 255, 255, .9)" size={20} />
                     </TouchableOpacity>                 
                  </View>
                  <Text style={styles.blockTitle}>{ pageContent && pageContent.title }</Text>
               </View>
               
               { console.log({ pageContent }) }
                
               <ScrollView>                  
                  <View style={{ paddingHorizontal: 12, marginTop: 35 }}>                     
                     {/* <View style={{ flex: 1, marginTop: 12 }}>
                        <Text style={styles.heading}>Quick Purchase</Text>
                        <Text style={styles.desc}>Buying Modi-bit is superfast and easy</Text>
                     </View> */}
                     
                     <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 0}
                        style={{  flexDirection: 'column', height: '100%', }}
                     >
                        <View style={styles.registerPageWrap}>
                            <Formik
                                validationSchema={ValidationSchema}
                                initialValues={initialValues}
                                onSubmit={(values) => {
                                    console.log({ values });
                                }}
                            >
                                {({ handleChange, handleBlur, values }) => (
                                    
                                    <View style={styles.formWrapper}>
                                        <View style={styles.inputWrap}>
                                            <Text style={styles.label}>Amount (USD)</Text>
                                            <TextInput 
                                                style={styles.inputBox}
                                                placeholder="***********"
                                                placeholderTextColor="#828690"
                                                onChangeText={handleChange('newPassword')}
                                                onBlur={handleBlur('newPassword')}
                                                value={values.newPassword}
                                            />
                                        </View>
                                        
                                          <View style={{ flex: 1, marginTop: 10 }}>
                                             <Text style={styles.infoText}>1 modicum = 10,000 modi-bits = 1 room; 1 modi-bit = $1,000</Text>
                                          </View>
                                          
                                          <View style={styles.actionArea}>
                                             <TouchableOpacity style={styles.signupBtn} onPress={() => navigation.navigate('Portfolio')}>
                                                <Text style={styles.buttonText}>{pageContent && pageContent.buttonText}</Text>
                                             </TouchableOpacity>                            
                                          </View>
                                    </View>
                                )}
                            </Formik>
                           <View style={styles.bottomSpace}></View>
                        </View>
                     </KeyboardAvoidingView>
                  </View>
                  
               </ScrollView>
            </SafeAreaView>
         </Container>
    )
}

export default BuyCoin;

const styles = StyleSheet.create({
   bottomSpace: {
      height: 210,
   },
   blockHeading: {
      // backgroundColor: '#fff',
      color: '#fff',
      flexBasis: 80,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: '100%',
      // height: 55,
      paddingTop: 5,
      paddingHorizontal: 12,
      position: 'relative',
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(78, 79, 80, 0.3)',
   },
   blockTitle: {
      fontSize: 21,
      color: '#fff',
      flexGrow: 3,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      fontFamily: 'SourceSansPro_700Bold',
   },
   backBtnWrap: {
      // flexBasis: 135,
      flexGrow: 2,
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
   infoText: {
      color: '#ccc',
      fontFamily: 'SourceSansPro_400Regular',
      marginBottom: 10,
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
})