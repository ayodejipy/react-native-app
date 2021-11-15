import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Text, View, StyleSheet, Image, SafeAreaView, ScrollView, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import { Container } from '../../../assets/styles/styles';
import { Entypo, Ionicons } from '@expo/vector-icons';


const ChangePassword = () => {
    const navigation = useNavigation();
    
    return (
         <Container>
            <SafeAreaView style={{ flex: 1,}}>
               <View style={styles.blockHeading}>
                  <View style={styles.backBtnWrap}>
                     <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
                        <Ionicons name="md-close-outline" color="rgba(255, 255, 255, .9)" size={20} />
                     </TouchableOpacity>                 
                  </View>
                  <Text style={styles.blockTitle}>Change Password</Text>
               </View>
                
               <ScrollView>                  
                  <View style={{ paddingHorizontal: 12, }}>
                     <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 0}
                        style={{  flexDirection: 'column', height: '100%', }}
                     >
                        <View style={styles.registerPageWrap}>
                           <View style={styles.formWrapper}>
                               <View style={styles.inputWrap}>
                                   <Text style={styles.label}>Password</Text>
                                   <TextInput 
                                       style={styles.inputBox}
                                       placeholder="Full name"
                                       defaultValue="Ossai Emmanuel"
                                       placeholderTextColor="#828690"
                                   />
                               </View>
                               <View style={styles.inputWrap}>
                                   <Text style={styles.label}>Phone Number</Text>
                                   <TextInput 
                                       style={styles.inputBox}
                                       placeholder="Phone number"
                                       defaultValue="0815467777"
                                       placeholderTextColor="#828690"
                                   />
                               </View>
                               
                               <View style={styles.actionArea}>
                                   <TouchableOpacity style={styles.signupBtn} onPress={() => navigation.navigate('Portfolio')}>
                                       <Text style={styles.buttonText}>Update Password</Text>
                                   </TouchableOpacity>                            
                               </View>
                           </View>
                           <View style={styles.bottomSpace}></View>
                        </View>
                     </KeyboardAvoidingView>
                  </View>
                  
               </ScrollView>
            </SafeAreaView>
         </Container>
    )
}

export default ChangePassword;

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
   editPhotoWrap: {
      flexBasis: 135,
      position: 'absolute',
      right: -12,
      bottom: 0,
   },
   editPhoto: {
      width: 30,
      height: 30,
      backgroundColor: 'rgba(78, 79, 80, 0.97)',
      color: '#fff',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 15,
   },
   profileBody: {
       // backgroundColor: '#fff',
       width: "100%",
       // flex: 1,
       flexDirection: 'row',
       justifyContent: 'center',
       alignItems: 'center',
       // width: '100%',
       paddingTop: 35,
       paddingHorizontal: 12,
       position: 'relative',
       marginBottom: 30,
      //  borderBottomWidth: 1,
      //  borderBottomColor: 'rgba(78, 79, 80, 0.3)',
       paddingBottom: 16,
   },
   profileImage: {
       alignSelf: 'flex-start',
       alignContent: 'center',
       width: 90,
       height: 90,
       borderRadius: 50,
       // borderColor: '#fff',
       // borderWidth: 1,
   },
   profileDetails: {
       width: 200,
   },
   helpTextImage: {
       fontFamily: 'SourceSansPro_400Regular',
       textAlign: 'center',
       color: '#f6f5fa',
   },
   editWrap: {
       marginTop: 10,
   },
   editBtn: {
       fontFamily: 'SourceSansPro_400Regular',
       width: 100,    
       textAlign: 'center',
       backgroundColor: 'rgba(75, 241, 149, 0.25)',
       color: 'rgba(75, 241, 149, 0.7)',
       paddingVertical: 6,
       borderRadius: 4,
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