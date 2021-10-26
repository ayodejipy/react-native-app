import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Transaction = () => {
    return (
        <View style={styles.container}>
            <View style={styles.status}>
                <Ionicons
                    name="md-arrow-forward"
                    color="rgba(255, 255, 255, .9)"
                    size={24}
                />
            </View>
            <View>
                <Text style={styles.title}>Modi-bit Purchase</Text>
                <Text style={styles.date}>Oct 23, 2021</Text>                
            </View>
            <Text style={styles.amount}>+$1,000</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'green',
        borderRadius: 8,
        paddingHorizontal: 5,
    },
    status: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        color: '#ff0',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: '#fff',
    },
    date: {
        color: '#fff',
    },
})


export default Transaction;

