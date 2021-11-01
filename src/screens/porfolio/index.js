import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Text, View, StyleSheet, Image, SafeAreaView, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { Container } from '../../../assets/styles/styles';
import Transaction from '../../components/portfolio.js/transaction';
import { TransactionLists, AccountBalances } from '../../utils/data';
import PortfolioBalance from './Balances';

const Portfolio = () => {
    const navigation = useNavigation();
    const [greeting, setGreeting ] = useState("Wash your hands, use your mask!")
    
    const handleTimeReport = () => {
        const date = new Date()
        const time = date.getHours();
        if(time < 12) {
            setGreeting("Beautiful morning, innit!")
            return
        }
        if(time > 12 ) {
            setGreeting("Good Afternoon, let's go have lunch!!!")
            return 
        }
        setGreeting("Don't forget to wash your hands.")
    }
    
    const renderTransactions = ({ item }) => {
        return (
            <Transaction transaction={item} />
        )
    }
    
    useEffect(() => {
        handleTimeReport()
    }, [])
    
    return (
        <Container>
            <View style={styles.profileBody}>
                <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                    <Image style={styles.profileImage} source={require('../../../assets/images/pattern-1.jpg')} />                    
                </TouchableOpacity>
                <View style={{ flex: 1, marginLeft: 10,}}>
                    <Text style={{ color: '#fff', fontSize: 18, fontWeight: '800', fontFamily: 'SourceSansPro_700Bold', }}>Welcome, Ossai</Text>
                    <Text style={{ color: '#fff', fontSize: 12, textTransform: 'lowercase', fontFamily: 'SourceSansPro_400Regular', }}>{greeting}</Text>                    
                </View>
            </View>
            <View style={{ marginHorizontal: 10, }}>
                <Text style={styles.heading}>My Portfolio</Text>
                
                <FlatList 
                    data={AccountBalances}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => <PortfolioBalance item={item} /> }
                    horizontal
                    showsHorizontalScrollIndicator
                    pagingEnabled={true}
                    bounces={false}
                    disableIntervalMomentum
                />
                
            </View>
            
            <ScrollView style={{ marginTop: 30 }}>
                <SafeAreaView style={styles.recentTransactions}>
                    <Text style={styles.transactionTitle}>Recent Transactions</Text>
                    <SafeAreaView style={{ marginVertical: 20, }}>
                        <FlatList 
                            data={TransactionLists}
                            renderItem={renderTransactions}
                            keyExtractor={item => item.id}                            
                        />
                    </SafeAreaView>
                </SafeAreaView>
                
                {/* <SafeAreaView style={{ marginHorizontal: 10 }}>
                    <ProfitGraph />
                </SafeAreaView> */}
                {/* <SafeAreaView>
                    <Text style={styles.text}>
                        Portfolio Page
                    </Text>
                </SafeAreaView> */}
            </ScrollView>
        </Container>
    )
}

export default Portfolio;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        color: '#fff',
    },
    text: {
      fontWeight: "600",
      fontSize: 24,
    },
    profileBody: {
        // backgroundColor: '#fff',
        flexBasis: 100,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        height: 55,
        padding: 12,
        paddingTop: 45,
        position: 'relative',
        marginBottom: 45,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 50,
        borderColor: '#fff',
        borderWidth: 2,
    },
    portfolioSumary: {
        backgroundColor: '#c3841c',
        borderRadius: 8,
        width: '100%',
        // height: 65,
        flexBasis: 100,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 35,
    },
    heading: {
        fontFamily:  'SourceSansPro_600SemiBold',
        fontWeight: '600',
        fontSize: 16,
        color: '#ecebf4',
        marginBottom: 15,
    },
    portfolioDetails: {
        // backgroundColor: '#fff',
        // opacity: 0.6,
        marginVertical: 15,
        flexBasis: 100,
        width: '100%',
    },
    smallHeading: {
        fontSize: 12,
        textAlign: 'center',
        color: '#fff',
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
        fontFamily: 'SourceSansPro_400Regular,'
    },
    roiPercent: {
        color: '#03b148',
        fontFamily: 'SourceSansPro_400Regular,'
    },
    roiAmount: {
        color: '#fff',
    },
    recentTransactions: {
        flex: 1,
        flexBasis: 100,
        paddingHorizontal: 20,
        // backgroundColor: '#D69934',
    },
    transactionTitle: {
        color: '#fff',
        fontSize: 12,
        textTransform: 'uppercase',
    }
})