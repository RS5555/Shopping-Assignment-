import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import {
  screenHeight,
  screenWidth,
  padding,
  borderRadius,
  fontSize,
  buttonTextSize,
} from '../../components/constatnts/constants';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('mor_2314');
  const [password, setPassword] = useState('83r5^_');

  const handleLogin = async () => {
    await fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      headers: {
        Accept: 'Application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username: username, password: password}),
    })
      .then(res => res.json())
      .then(resData => {
        navigation.navigate('homeDrawer');

        // setUsername('');
        // setPassword('');
      })
      .catch(error => console.log(error));
  };

  const handleSignUp = () => {
    // Navigate to the Signup screen
    navigation.navigate('signUpScreen');
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.title}>Welcome Back!</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={{flexDirection:'row'}}>
        <Text style={styles.signUpText}>Don't have an account?</Text>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: screenWidth * padding,
    width: screenWidth,
  },
  logo: {
    width: screenWidth * 0.6, // Adjust the logo size
    height: screenHeight * 0.2, // Adjust the logo size
    resizeMode: 'contain',
    marginBottom: screenHeight * 0.05,
  },
  title: {
    fontSize: screenWidth * fontSize,
    fontWeight: 'bold',
    marginBottom: screenHeight * 0.02,
  },
  input: {
    height: screenHeight * 0.05,
    borderColor: '#ddd', // Light gray border color
    borderWidth: 1,
    borderRadius: screenWidth * borderRadius,
    width: '100%',
    marginBottom: screenHeight * 0.02,
    paddingLeft: screenWidth * padding,
    fontSize: screenWidth * fontSize,
  },
  button: {
    backgroundColor: '#3498db', // Blue color
    height: screenHeight * 0.05,
    justifyContent: 'center',
    borderRadius: screenWidth * borderRadius,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: screenWidth * buttonTextSize,
    fontWeight: 'bold',
  },
  signUpText: {
    marginTop: screenHeight * 0.02,
    color: '#3498db', // Blue color
    fontSize: screenWidth * fontSize,
  },
  forgotPassword: {
    marginTop: screenHeight * 0.02,
    color: '#3498db', // Blue color
    fontSize: screenWidth * fontSize,
  },
});

export default LoginScreen;
