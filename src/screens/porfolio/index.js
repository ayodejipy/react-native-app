import React, { useState, useRef, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { Text, View, StyleSheet, Image, SafeAreaView, ScrollView, FlatList, TouchableOpacity, Animated } from 'react-native';
import { Container } from '../../../assets/styles/styles';
import Transaction from '../../components/portfolio.js/Transaction';
import { TransactionLists, AccountBalances } from '../../utils/data';
import PortfolioBalance from './Balances';
import Paginator from './Pagination';
import { useAuthContext } from '../../Hook/useAuthContext';
import { MaterialIcons } from '@expo/vector-icons';


const Portfolio = () => {
    const tabHeight = useBottomTabBarHeight();
    const navigation = useNavigation();
    const [greeting, setGreeting ] = useState("Wash your hands, use your mask!")
    const [transactions, setTransactions ] = useState(null)
    const { userData } = useAuthContext();
    
    // console.log(userData);
    
    // scrolling home 
    const slideRef = useRef(null)
    const [ index, setCurrentIndex ] = useState(0)
    const scrollX  = useRef(new Animated.Value(0)).current;
    
    const balanceCardChanges = useRef(({viewableItems}) => {
        setCurrentIndex(viewableItems[0].index)
    }).current
    
    const changeIndex = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
    
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
    
    const getLatestTransactions = () => {
        let data = [...TransactionLists]
        data = data.splice(0, 8)
        setTransactions(data)
    }
    
    const loadInput = (typeOfAction) => {
        navigation.navigate('BuyCoin', {
            actionType: typeOfAction
        })
    }
    
    useEffect(() => {
        getLatestTransactions();
        handleTimeReport()
    }, [])
    
    return (
        <Container tabHeight={tabHeight}>
            {/* <ScrollView style={styles.scrollview}> */}
                <View style={styles.profileBody}>
                    <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                        <Image style={styles.profileImage} source={require('../../../assets/images/pattern-1.jpg')} />                    
                    </TouchableOpacity>
                    <View style={{ flex: 1, marginLeft: 10,}}>
                        <Text style={{ color: '#fff', fontSize: 18, fontWeight: '800', fontFamily: 'SourceSansPro_700Bold', }}>Welcome, {userData}</Text>
                        <Text style={{ color: '#fff', fontSize: 12, textTransform: 'none', fontFamily: 'SourceSansPro_400Regular', }}>{greeting}</Text>                    
                    </View>
                </View>
                <View style={{ marginHorizontal: 10, }}>
                    <Text style={styles.heading}>My Portfolio</Text>
                    
                    <FlatList 
                        data={AccountBalances}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => <PortfolioBalance item={item} /> }
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled={true}
                        bounces={false}
                        onScroll={ Animated.event([{ nativeEvent: {contentOffset: { x: scrollX }} }], {
                            useNativeDriver: false
                        }) }
                        scrollEventThrottle={32}
                        onViewableItemsChanged={balanceCardChanges}
                        viewabilityConfig={changeIndex}
                        ref={slideRef}
                    />
                    
                    <Paginator data={AccountBalances} scrollX={scrollX} />                
                </View>
            
                <View style={{ marginHorizontal: 14, flex: 1, flexShrink: 1, }}>
                    <TouchableOpacity onPress={ () => loadInput('self-finance')}>
                        <Text style={[styles.heading, { marginBottom: 6 }]}>Self Finance</Text>
                        <View style={styles.financeTab}>
                            <View style={{ marginRight: 13 }}>
                                <MaterialIcons name="attach-money" color="rgba(255, 255, 255, .5)" size={20} />
                            </View>
                            <View style={{ flexShrink: 1, }}>
                                <Text style={styles.finTitle}>Don't have $1000? Buy your modi-bits in bits! </Text>
                                
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            
                <View style={{ marginTop: 10, height: 185,}}>
                    <SafeAreaView style={styles.recentTransactions}>
                        <Text style={styles.transactionTitle}>Recent Transactions</Text>
                        <SafeAreaView style={{ marginVertical: 20, flexBasis: 200, }}>
                            <FlatList 
                                data={transactions}
                                renderItem={renderTransactions}
                                keyExtractor={item => item.id}
                                contentContainerStyle={{ paddingBottom: 95 }}               
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
                </View>
            {/* </ScrollView> */}
        </Container>
    )
}

export default Portfolio;

const styles = StyleSheet.create({
    scrollview: {
        height: '100%',
        width: '100%',
        // borderWidth: 5,
        // borderRadius: 5,
        // borderColor: 'black',
        // backgroundColor: 'lightblue'
    },
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
        marginBottom: 30,
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
    financeTab: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'rgba(91, 82, 136, 0.7)',
        borderRadius: 4,
        paddingHorizontal: 12,
        paddingVertical: 20,
        marginVertical: 4,
    },
    finTitle: {
        fontSize: 16,
        color: '#fff',
        fontFamily: 'SourceSansPro_400Regular',
        // marginBottom: 5,
    },
    financeDesc: {
        color: '#b2afbd',
        fontSize: 14,
        fontFamily: 'SourceSansPro_400Regular',
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