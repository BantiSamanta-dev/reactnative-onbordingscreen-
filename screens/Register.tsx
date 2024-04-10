import React, { useState, createRef } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const RegisterScreen = (props) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userfullName, setUserAddress] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [isRegistrationSuccess, setIsRegistrationSuccess] = useState(false);

  const emailInputRef = createRef();
  const ageInputRef = createRef();
  const addressInputRef = createRef();
  const passwordInputRef = createRef();

  const handleSubmitButton = () => {
    setErrortext('');
    if (!userName || !userEmail || !userAge || !userfullName || !userPassword) {
      alert('Please fill all the fields');
      return;
    }
    setLoading(true);
    fetch('http://192.168.72.1:8010/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: userName,
        email: userEmail,
        password: userPassword,
        fullName: userName, // Assuming full name is the same as username
        bio: '', // You can modify this based on your requirements
        age: userAge,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setLoading(false);
        console.log(responseJson);
        if (responseJson.message === 'User registered successfully') {
          setIsRegistrationSuccess(true);
          console.log('Registration Successful. Please Login to proceed');
        } else {
          setErrortext(responseJson.error || 'Registration failed');
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        setErrortext('Error registering user');
      });
  };

  if (isRegistrationSuccess) {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/hero1.png')}
          style={styles.logo}
        />
        <Text style={styles.successText}>
          Registration Successful
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('LoginScreen')}>
          <Text style={styles.buttonText}>Login Now</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <Image
          source={require('../assets/hero1.png')}
          style={styles.logo}
        />
        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={setUserName}
          value={userName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setUserEmail}
          value={userEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Age"
          onChangeText={setUserAge}
          value={userAge}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Address"
          onChangeText={setUserAddress}
          value={userfullName}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={setUserPassword}
          value={userPassword}
          secureTextEntry
        />
        {errortext ? <Text style={styles.errorText}>{errortext}</Text> : null}
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmitButton}
          disabled={loading}>
          <Text style={styles.buttonText}>{loading ? 'Loading...' : 'REGISTER'}</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#307ecc',
    padding: 20,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#307ecc',
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#7DE24E',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  successText: {
    color: 'white',
    fontSize: 18,
    marginBottom: 20,
  },
});

export default RegisterScreen;
