import React from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const Toplive = (props) => {
  const navigation = useNavigation(); // Get the navigation prop using useNavigation hook

  const handleNavigation = () => {
    if (props.navigation) {
      props.navigation.navigate('live'); // For class components
    } else if (navigation) {
      navigation.navigate('live'); // For functional components
    }
  };


    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.headingtext}>Toplive</Text>
        </View>
        <View style={styles.live}>
          <Image
            source={require('../assets/star.png')}
            style={styles.star}
          />
          <Text style={styles.liveText}>Let's Practice English With Us!</Text>
        </View>
        <TouchableOpacity
        style={styles.button}
        onPress={handleNavigation}>
        <Text style={styles.buttonText}>Join Live</Text>
      </TouchableOpacity>
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingtext: {
    padding: 8,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  live: {
    width: '95%',
    height: 180,
    backgroundColor: '#5DEBD7',
    borderRadius: 10,
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.5, // Shadow opacity
    shadowRadius: 4, // Shadow radius
    elevation: 5, // Android only - elevation for shadow effect
    flexDirection: 'row',
    alignItems: 'flex-start', // Align items vertically in the row
    paddingHorizontal: 10, // Add padding to the sides
  },
  liveText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    paddingVertical: 10, // Add vertical padding
  },
  star: {
    width: 40,
    height: 40,
    marginRight: 10,
    marginTop: 5,
  },
  button: {
    backgroundColor: '#90D26D',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
    marginTop: -50,
    marginLeft:250
     // Add some margin at the top
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
});
export default Toplive;
