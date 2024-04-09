import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, Dimensions } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';

const { width } = Dimensions.get('window');

export default class OnboardingScreen extends Component {
  handleDone = () => {
    this.props.navigation.navigate('Register');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headingText}>Simply English</Text>
        <Onboarding
          onDone={this.handleDone}
          onSkip={this.handleDone}
          containerStyles={{ paddingHorizontal: 15 }}
          pages={[
            {
             
              backgroundColor: '#fff',
              image: (
                <View style={styles.lottieContainer}>
                  <LottieView
                    source={require('../animation/a1.json')}
                    autoPlay
                    loop
                    style={styles.lottie}
                  />
                </View>
              ),
              title: (
                <Text style={styles.headline}>
                  Welcome to the English Learning App
                </Text>
              ),
              subtitle: 'Done with React Native Onboarding Swiper',
            },
            {
              backgroundColor: '#D862BC',
              image: (
                <View style={styles.lottieContainer}>
                <LottieView
                  source={require('../animation/a2.json')}
                  autoPlay
                  loop
                  style={styles.lottie}
                />
              </View>
              ),
              title: (
                <Text style={styles.headline}>
                  Learn English By Making Friends!
                </Text>
              ),
              subtitle: 'Done with React Native Onboarding Swiper',
            },
            {
              backgroundColor: '#D862BC',
              image: (
                <Image
                  style={styles.photos}
                  source={require('../assets/hero1.png')}
                />
              ),
              title: (
                <Text style={styles.headline}>
                  Learn English By Making Friends!
                </Text>
              ),
              subtitle: 'Hru',
            },
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headingText:{
  
  },
  photos: {
    width: 300,
    height: 300,
    padding: 8,
    position: 'relative',
    transform: [{ translateY: -100 }],
  },
  headline: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    padding: 10,
    alignItems: 'center',
  },
  footertext: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
  },
  lottieContainer: {
    width: width,
    height: width, // Make it square
    alignItems: 'center',
    justifyContent: 'center',
  },
  lottie: {
    width: '100%',
    height: '100%',
  },
});
