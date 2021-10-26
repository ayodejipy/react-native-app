import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import AppIntroSlider from 'react-native-app-intro-slider';
import Welcome from './Welcome';

const slides = [
    {
      key: 'one',
      title: 'Title 1',
      text: 'Description.\nSay something cool',
    //   image: require('./assets/1.jpg'),
      backgroundColor: '#59b2ab',
    },
    {
      key: 'two',
      title: 'Title 2',
      text: 'Other cool stuff',
    //   image: require('./assets/2.jpg'),
      backgroundColor: '#febe29',
    },
    {
      key: 'three',
      title: 'Rocket guy',
      text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    //   image: require('./assets/3.jpg'),
      backgroundColor: '#22bcb5',
    }
];

export default class onScreenIntroduction extends React.Component {
    state = {
        loading: true,       
    }
    
    _renderItem = ({ item }) => {
        return (
            <View style={[
                styles.slide,
                {
                  backgroundColor: item.backgroundColor,
                },
              ]}
            >
                <Text style={styles.title}>{item.title}</Text>
                {/* <Image source={item.image} /> */}
                <Text style={styles.text}>{item.text}</Text>
            </View>
        )
    }
    
    _renderNextButton = () => {
        return (
          <View style={styles.buttonCircle}>
            <Ionicons
              name="md-arrow-forward"
              color="rgba(255, 255, 255, .9)"
              size={24}
            />
          </View>
        );
    };
    
    _renderDoneButton = () => {
        return (
          <View style={styles.buttonCircle}>
            <Ionicons
              name="md-checkmark"
              color="rgba(255, 255, 255, .9)"
              size={24}
            />
          </View>
        );
    };
    
    _onDone = () => {
        this.setState({ loading: false })
        // setLoading(false)
    }
    
    render() {
        // if(this.state.loading) {
        //     return <AppIntroSlider 
        //         renderItem={this._renderItem} 
        //         data={slides} 
        //         onDone={this._onDone} 
        //         renderNextButton={this._renderNextButton} 
        //         renderDoneButton={this._renderDoneButton}
        //     />
        // }
        return <Welcome />
    }
}

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
    },
    title: {
        textAlign: 'center',
    },
    text: {
        textAlign: 'center',
    },    
    buttonCircle: {
      width: 40,
      height: 40,
      backgroundColor: 'rgba(0, 0, 0, .2)',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
});
