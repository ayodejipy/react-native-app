import React, { useRef } from 'react'
import { Spinner } from "./Spinner.styles";
import { Animated, Easing } from 'react-native';

const Spin = ({ spindot, background, width, height }) => {
   const SpinValue = useRef(new Animated.Value(0)).current;
   
   Animated.loop(
      Animated.timing(SpinValue, {
         toValue: 1,
         duration: 1200,
         easing: Easing.linear, // Easing is an additional import from react-native
         useNativeDriver: true  // To make use of native driver for performance
      })
   ).start()
   
   // use interpolation to change begining and end value
   const animatedSpin = SpinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
   })
   
   return (
      <Animated.View style={{ transform: [{rotate: animatedSpin }]}}> 
         <Spinner background={background} spindot={spindot} width={width} height={height} />
      </Animated.View>
   )
}

export default Spin;
