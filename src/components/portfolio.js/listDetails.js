import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const listDetails = ({title, callback}) => {
    return (
        <TouchableOpacity onPress={callback}>
            <View style={styles.detailsContainer}>
                <Text style={styles.detailsHeading}>{title}</Text>
                <Ionicons name="md-chevron-forward" color="rgba(79, 80, 82, 1)" size={20} />
            </View>
        </TouchableOpacity>
    )
}

export default listDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
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
        fontFamily: 'SourceSansPro_400Regular',
    },
    detailsText: {
        color: 'rgba(79, 80, 82, 1)',
    },
})