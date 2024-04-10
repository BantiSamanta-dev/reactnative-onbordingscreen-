import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default class Header extends Component {
  render() {
    return (
     <SafeAreaView>
      <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.greeting}>Good Morning</Text>
        <Text style={styles.username}>Banti Samanta</Text>
      </View>
      <View style={styles.rightContainer}>
        {/* Profile icon */}
        <Image
          source={require('../assets/profile.png')}
          style={styles.profileIcon}
        />
      </View>
    </View>
   <View></View>
      <View></View>
      <View></View>
     </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
    backgroundColor: '#ffffff', // Background color for the header
  },
  leftContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
    color:'#FF5BAE'
  },
  username: {
    fontSize: 24,
    color:"black"
  },
  profileIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});