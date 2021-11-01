import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Text, View, StyleSheet, Image, SafeAreaView, ScrollView, FlatList, TouchableOpacity, useWindowDimensions} from 'react-native';
import { PortfolioSummary } from '../../../assets/styles/styles';

const PortfolioBalance = ({ item }) => {
    const navigation = useNavigation();
    const { width } = useWindowDimensions();
    
    return (
        <PortfolioSummary style={{ width: width - 40 }}>
            <View style={styles.portfolioDetails}>
                <Text style={styles.smallHeading}>{ item.title }</Text>
                <TouchableOpacity onPress={() => navigation.navigate("SinglePortfolio")}>
                    <Text style={styles.portfolioAmount}>${item.price}</Text>                    
                </TouchableOpacity>
                
                {/* <View style={styles.roiBody}>
                    <Text style={styles.roiPercent}>+0,36 %</Text>
                    <Text style={styles.roiAmount}>($ 9,04)</Text>
                </View> */}
            </View>
        </PortfolioSummary>
    )
}

export default PortfolioBalance;

const styles = StyleSheet.create({
    portfolioSumary: {
        // backgroundColor: '#c3841c',
        // borderRadius: 8,
        // flex: 1,        
        // flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'center',
        // // marginVertical: 35,
    },
    heading: {
        fontFamily:  'SourceSansPro_600SemiBold',
        fontWeight: '600',
        fontSize: 16,
        color: '#ecebf4',
        marginBottom: 15,
    },
    portfolioDetails: {
        // marginVertical: 15,
        flex: 1,
        width: '100%',
        height: '100%',
        // backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center'
    },
    smallHeading: {
        fontSize: 14,
        fontFamily: 'SourceSansPro_700Bold',
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
        // flexBasis: 100,
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
})