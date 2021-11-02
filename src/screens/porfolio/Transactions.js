import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Text, View, StyleSheet, Image, SafeAreaView, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { Container } from '../../../assets/styles/styles';
import listDetails from '../../components/portfolio.js/listDetails';
import { Ionicons } from '@expo/vector-icons';

const Transactions = () => {
    const navigation = useNavigation();
    return (
        <Container>
            <SafeAreaView style={{ flex: 1,}}>
                <View style={styles.blockHeading}>
                    {/* <View style={styles.backBtnWrap}>
                        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
                            <Ionicons name="md-arrow-back-outline" color="rgba(255, 255, 255, .9)" size={20} />
                        </TouchableOpacity>                    
                    </View> */}
                    <Text style={styles.blockTitle}>Transactions</Text>
                </View>
                
                <ScrollView>
                    <View style={{ marginHorizontal: 10, }}>
                        <View style={styles.portfolioSumary}>                    
                            <View style={styles.portfolioDetails}>
                                <View style={styles.IconWrap}>
                                    <Image style={styles.coinIcon} source={require('../../../assets/images/main-new-2.png')} />
                                </View>
                                <Text style={styles.smallHeading}>Modibit</Text>
                                <Text style={styles.portfolioAmount}>$ 242.25</Text>
                                
                                <Text style={[styles.smallHeading, {paddingVertical: 3, fontSize: 11, }]}>Gains</Text>
                                <View style={styles.roiBody}>
                                    <Text style={styles.roiPercent}>+ 0.36 % </Text>
                                    <Text style={styles.roiAmount}>+ $9.04</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                            
                </ScrollView>
            </SafeAreaView>
        </Container>
    )
}

export default Transactions;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        color: '#fff',
    },
    text: {
      fontWeight: "600",
      fontSize: 24,
    },
    blockHeading: {
        // backgroundColor: '#fff',
        color: '#fff',
        flexBasis: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        // height: 55,
        padding: 12,
        paddingTop: 5,
        position: 'relative',
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
    blockTitle: {
        fontSize: 21,
        color: '#fff',
        flexBasis: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        fontFamily: 'SourceSansPro_600SemiBold'
    },
    portfolioSumary: {
        // backgroundColor: '#c3841c',
        // borderRadius: 8,
        width: '100%',
        flexBasis: 100,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 35,
    },
    IconWrap: {
        backgroundColor: 'rgba(78, 79, 80, 0.3)',
        width: 57,
        height: 57,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    coinIcon: {
        width: 35,
        height: 35,
    },
    portfolioDetails: {
        marginVertical: 15,
        flexBasis: 100,
        width: '100%',
        alignItems: 'center',
    },
    smallHeading: {
        fontSize: 12,
        textAlign: 'center',
        color: '#fff',
        paddingVertical: 6,
    },
    portfolioAmount: {
        color: '#fff',
        fontFamily: 'SourceSansPro_700Bold',
        textAlign: 'center',
        fontSize: 40,
        fontWeight: '800',
        letterSpacing: 1,
    },
    roiBody: {
        flexBasis: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        fontFamily: 'SourceSansPro_400Regular',
    },
    roiPercent: {
        color: '#03b148',
        fontFamily: 'SourceSansPro_400Regular',
    },
    roiAmount: {
        color: '#fff',
        fontFamily: 'SourceSansPro_400Regular',
    },
    actionButtons: {
        flexBasis: 40,
        flexDirection: 'row',
        justifyContent: "space-around",
        // marginVertical: 10,
    },
    buyWrap: {
        // flexBasis: auto,
        flexGrow: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        // backgroundColor: '#fff',
    },
    buyBtn: {
        fontFamily: 'SourceSansPro_400Regular',
        width: 220,
        textAlign: 'center',
        backgroundColor: 'rgba(199, 125, 17, 0.7)',
        // backgroundColor: 'rgba(78, 79, 80, 0.3)',
        color: '#f6f5fa',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 10,
    },
    sellWrap: {
        flexGrow: 1,
        justifyContent: 'center', 
        alignItems: 'center',
    },
    sellBtn: {
        fontFamily: 'SourceSansPro_400Regular',
        width: 100,    
        textAlign: 'center',
        backgroundColor: 'rgba(78, 79, 80, 0.3)',
        color: '#f6f5fa',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 10,
    },
    details: {
        paddingHorizontal: 10,
        marginVertical: 40,
    },
    detailstitle: {
        color: 'rgba(78, 79, 80, 0.98)',
        fontSize: 12.5,
        textTransform: 'uppercase',
        paddingBottom: 16,
    },
    detailsContainer: {
        // backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(78, 79, 80, 0.3)',
        marginVertical: 8,
    },
    detailsHeading: {
        color: 'rgba(78, 79, 80, 0.98)',
    },
    detailsText: {
        color: 'rgba(79, 80, 82, 1)',
    },
})