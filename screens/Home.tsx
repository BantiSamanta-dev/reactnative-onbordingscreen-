import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/header';
import Toplive from './Toplive';
import Elevatedcards from '../components/Elevatedcards';

export default class Home extends Component {
  render() {
    return (
     <SafeAreaView>
     <Header/>
      <Toplive/>
      <Elevatedcards/>
  
     </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
  }
});