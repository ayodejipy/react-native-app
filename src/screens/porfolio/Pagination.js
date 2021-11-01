import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Text, View, StyleSheet, TouchableOpacity, useWindowDimensions} from 'react-native';

const Pagination = () => {
    const navigation = useNavigation();
    const { width } = useWindowDimensions();
    
    return (
            <View style={styles.container}>
                <Text style={styles.smallHeading}>Pagination</Text>
            </View>
    )
}

export default Pagination;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})