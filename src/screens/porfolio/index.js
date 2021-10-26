import { rosybrown } from 'color-name';
import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native';
import { Container } from '../../../assets/styles/styles';
import ProfitGraph from './ProfitGraph';
import Transaction from '../../components/portfolio.js/transaction';

const Portfolio = () => {
    return (
        <Container>
            <View style={styles.profileBody}>
                <Image style={styles.profileImage} source={require('../../../assets/images/pattern-1.jpg')} />
            </View>
            <View style={{ marginHorizontal: 18, }}>
                <View style={styles.portfolioSumary}>
                    <Text style={styles.heading}>My Portfolio</Text>
                    
                    <View style={styles.portfolioDetails}>
                        <Text style={styles.smallHeading}>Total Balance</Text>
                        <Text style={styles.portfolioAmount}>$2,442</Text>
                        
                        <View style={styles.roiBody}>
                            <Text style={styles.roiPercent}>+0,36 % </Text>
                            <Text style={styles.roiAmount}>($ 9,04)</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.recentTransactions}>
                <Text style={styles.transactionTitle}>Recent Transactions</Text>
                <View style={{ marginVertical: 10, }}>
                    <Transaction />
                </View>
            </View>
            
            <View style={{ marginHorizontal: 10 }}>
                <ProfitGraph />
            </View>
            <View>
                <Text style={styles.text}>
                    Portfolio Page
                </Text>
            </View>
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
        justifyContent: 'flex-end',
        width: '100%',
        height: 55,
        padding: 12,
        paddingTop: 45,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 50,
        borderColor: '#fff',
        borderWidth: 2,
    },
    portfolioSumary: {
        backgroundColor: '#f1a932',
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
        textAlign: 'center',
        fontSize: 40,
        fontWeight: '800',
        letterSpacing: 1,
    },
    roiBody: {
        flexBasis: 100,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    roiPercent: {
        color: '#00953b',
    },
    roiAmount: {
        color: '#fff',
    },
    recentTransactions: {
        flexBasis: 100,
        paddingHorizontal: 20,
        backgroundColor: '#D69934',
    },
    transactionTitle: {
        color: '#fff',
    }
})