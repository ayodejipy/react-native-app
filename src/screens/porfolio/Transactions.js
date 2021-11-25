import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Text, View, StyleSheet, Image, SafeAreaView, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { Container } from '../../../assets/styles/styles';
import { TransactionLists } from '../../utils/data';
import Transaction from '../../components/portfolio.js/Transaction';
import { useState } from 'react/cjs/react.development';

const TransactionsScreen = () => {
    const navigation = useNavigation();
    const [record, setRecord] = useState(TransactionLists)
    
    const renderTransactions = ({ item }) => {
        return (
            <Transaction transaction={item} />
        )
    }
    
    const renderDefaultData = () => {
        setRecord(TransactionLists);
    }
    
    const filterRecords = (type) => {
        type = type.toLowerCase();
        let dataArray;
        
        switch (type) {
            case 'all':
                // filter then iterate over each item
                dataArray = TransactionLists
                setRecord(dataArray)
                break;
        
            case 'purchases':
                // filter then change state data
                dataArray = TransactionLists.filter(item => !item.sold)
                setRecord(dataArray)
                break;
        
            case 'sales':
                // filter then add to state
                dataArray = TransactionLists.filter(item => item.sold)
                setRecord(dataArray)
                break;
        
            default:
                break;
        }
    }
    
    useEffect(() => {
        console.log('opened')
        renderDefaultData();
    }, [])
    
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
                    <View style={{ paddingHorizontal: 14, marginTop: 35, }}>
                        <Text style={styles.filterTitle}>Show Transactions by </Text>
                        <View style={styles.filterWrap}>
                            <TouchableOpacity style={styles.filterBodyWrap} onPress={() => filterRecords('all')}>
                                <View>
                                    <Text style={styles.filterText}>All</Text>                                
                                </View>
                            </TouchableOpacity>                  
                            <TouchableOpacity style={styles.filterBodyWrap} onPress={() => filterRecords('purchases')}>
                                <View>                    
                                    <Text style={styles.filterText}>Purchases</Text>                                
                                </View>
                            </TouchableOpacity>  
                            <TouchableOpacity style={styles.filterBodyWrap} onPress={() => filterRecords('sales')}>
                                <View>                    
                                    <Text style={styles.filterText}>Sales</Text>                                
                                </View>
                            </TouchableOpacity>  
                        </View>
                        
                        <View style={{ marginTop: 10, height: "100%",}}>
                            <SafeAreaView style={styles.recentTransactions}>
                                {/* <Text style={styles.transactionTitle}>Recent Transactions</Text> */}
                                <SafeAreaView style={{ marginVertical: 20, flexBasis: 200, }}>
                                    <FlatList 
                                        data={record}
                                        renderItem={renderTransactions}
                                        keyExtractor={item => item.id}
                                        contentContainerStyle={{ paddingBottom: 65 }}               
                                    />
                                </SafeAreaView>
                            </SafeAreaView>
                        </View>
                    </View>                    
                </ScrollView>
            </SafeAreaView>
        </Container>
    )
}

export default TransactionsScreen;

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
    filterWrap: {
        flexDirection: 'row',
    },
    filterBodyWrap: {
        flexBasis: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#c3841c',
        borderRadius: 3,
        marginRight: 8,
        paddingHorizontal: 10,
        paddingVertical: 7,
    },
    filterText: {
        color: '#fff',
        fontSize: 13,
        fontFamily: 'SourceSansPro_400Regular'
    },
    details: {
        paddingHorizontal: 10,
        marginVertical: 40,
    },
    filterTitle: {
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