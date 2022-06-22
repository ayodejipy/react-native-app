import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Transaction = ({ transaction }) => {
    const icon = transaction.success ? "md-checkmark" : "md-close-outline"
    const color = transaction.success ? {backgroundColor: 'rgba(18, 223, 91, 0.15)', color: 'rgba(75, 241, 149, 0.7)',} : {backgroundColor: 'rgba(223, 18, 18, 0.22)', color: 'rgba(255, 10, 10, 0.67)',}
    const sign = transaction.sold ? "-" : "+"
    
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', }}>
                <View style={[styles.status, { backgroundColor: color.backgroundColor,}]}>
                    <Ionicons
                        name={icon}
                        color={color.color}
                        size={16}
                    />
                </View>
                <View style={{ maxWidth: '80%', flexWrap: 'wrap', justifyContent: 'flex-start', }}>
                    <Text style={styles.title}> { transaction.title } </Text>
                    <Text style={styles.date}>{ transaction.date } </Text>                
                </View>                
            </View>
            
            <Text style={styles.amount}>{sign} {transaction.price}</Text>
        </View>
    )
}

export default Transaction;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(78, 79, 80, 0.3)',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 8,
        marginVertical: 6,
    },
    status: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        color: '#ff0',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    title: {
        fontSize: 14,
        color: '#fff',
        fontFamily: 'SourceSansPro_400Regular',
    },
    date: {
        color: '#b2afbd',
        fontSize: 13,
        fontFamily: 'SourceSansPro_400Regular',
    },
    amount: {
        color: '#c3c3c3',
        fontWeight: "800",
        fontFamily: 'SourceSansPro_600SemiBold',
    }
})




