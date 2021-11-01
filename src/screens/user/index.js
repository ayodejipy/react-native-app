import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Text, View, StyleSheet, Image, SafeAreaView, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { Container } from '../../../assets/styles/styles';
import { Ionicons } from '@expo/vector-icons';
import ListDetails from '../../components/portfolio.js/listDetails';


const Profile = () => {
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
                    <Text style={styles.blockTitle}>Profile</Text>
                </View>
                
                <ScrollView>
                    <View style={styles.profileBody}>
                        <View style={{ flexGrow: 1,}}>
                            <Image style={styles.profileImage} source={require('../../../assets/images/main-new-2.png')} />
                        </View>
                        
                        <View style={styles.profileDetails}>
                            <Text style={styles.blockTitle}>Ossai Emmanuel </Text>
                            <TouchableOpacity style={styles.editWrap}>
                                <Text style={styles.editBtn}>Edit Profile</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                                        
                    <SafeAreaView style={styles.details}>
                        <Text style={styles.detailstitle}>Account &amp; Security</Text>
                        <View style={{ flex: 1, marginVertical: 10, }}>
                            <ListDetails title="Edit Profile" callback={() => navigation.navigate("Profile")} />
                            <ListDetails title="Password Reset" callback={() => navigation.navigate("Profile")} />                            
                        </View>
                        <Text style={styles.detailstitle}>About &amp; Seventhcliff Resort</Text>
                        <View style={{ flex: 1, marginVertical: 0, }}>
                            {/* <ListDetails title="" callback={() => navigation.navigate("Profile")} /> */}
                            <ListDetails title="Visit Our Website" callback={() => navigation.navigate("Profile")} />                            
                        </View>
                    </SafeAreaView>
                    
                    <SafeAreaView style={styles.actionButton}>
                        <TouchableOpacity>
                            <Text style={styles.logoutBtn}>Sign out</Text>                      
                        </TouchableOpacity>
                    </SafeAreaView>
                </ScrollView>
            </SafeAreaView>
        </Container>
    )
}

export default Profile;

const styles = StyleSheet.create({
    blockHeading: {
        // backgroundColor: '#fff',
        color: '#fff',
        flexBasis: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        // height: 55,
        paddingVertical: 40,
        paddingHorizontal: 12,
        position: 'relative',
    },
    blockTitle: {
        fontSize: 21,
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
    profileBody: {
        // backgroundColor: '#fff',
        width: "100%",
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // width: '100%',
        paddingTop: 35,
        paddingHorizontal: 12,
        position: 'relative',
        marginBottom: 30,
        borderWidth: 1,
        // borderBottomColor: 'rgba(78, 79, 80, 0.3)',
        paddingBottom: 16,
    },
    profileImage: {
        width: 90,
        height: 90,
        borderRadius: 50,
        borderColor: '#fff',
        borderWidth: 1,
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
    details: {
        paddingHorizontal: 10,
        marginVertical: 18,
    },
    detailstitle: {
        // color: 'rgba(78, 79, 80, 0.98)',
        color: '#c3c3c3',
        fontSize: 12.5,
        textTransform: 'uppercase',
        paddingBottom: 16,
        marginVertical: 10,
        fontFamily: 'SourceSansPro_600SemiBold',
    },
    actionButton: {
        flexBasis: 40,
        flexDirection: 'row',
        justifyContent: "center",
        paddingVertical: 20,
    },
    logoutBtn: {
        fontFamily: 'SourceSansPro_400Regular',
        width: 100,    
        textAlign: 'center',
        backgroundColor: 'rgba(223, 18, 18, 0.22)',
        color: 'rgba(255, 10, 10, 0.67)',
        paddingVertical: 6,
        borderRadius: 4,
    },
})