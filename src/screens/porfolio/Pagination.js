import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Text, View, StyleSheet, Animated, useWindowDimensions} from 'react-native';

const Paginator = ({ data, scrollX }) => {
    const navigation = useNavigation();
    const { width } = useWindowDimensions();
    
    return (
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50, }}>
            {data.map((_item, index) => {
                const inputRange = [(index - 1) * width, index * width, (index + 1) * width ];
                
                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [10, 24, 10],
                    extrapolate: 'clamp'
                })
                
                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.5, 1, 0.5],
                    extrapolate: 'clamp'
                })
                
                return <Animated.View style={[styles.dot, { width: dotWidth, opacity }]} key={index.toString()} />
            })}
        </View>
    )
}

export default Paginator;

const styles = StyleSheet.create({
    dot: {
        height: 3,
        borderRadius: 2,
        backgroundColor: 'rgb(225, 225, 225)',
        marginHorizontal: 10,
        
    }
})