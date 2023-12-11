// screens/SignUpScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { screenHeight, screenWidth, padding, borderRadius, fontSize, buttonTextSize } from '../../components/constatnts/constants';

const SignUpScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Perform signup logic here
    // Replace this with your actual signup logic
    // After successful signup, you can navigate to the home screen or login screen
    navigation.navigate('Home');
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={(text) => setFullName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('loginScreen')}>
        <Text style={styles.loginText}>Already have an account? Login</Text>
      </TouchableOpacity>
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
  title: {
    fontSize: screenWidth * fontSize,
    fontWeight: 'bold',
    marginBottom: screenHeight * 0.02,
  },
  input: {
    height: screenHeight * 0.05,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: screenWidth * borderRadius,
    width: '100%',
    marginBottom: screenHeight * 0.02,
    paddingLeft: screenWidth * padding,
    fontSize: screenWidth * fontSize,
  },
  button: {
    backgroundColor: '#2ecc71', // Green color
    height: screenHeight * 0.05,
    justifyContent:'center',
    // padding: screenWidth * padding,
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
  loginText: {
    marginTop: screenHeight * 0.02,
    color: '#3498db', // Blue color
    fontSize: screenWidth * fontSize,
  },
});

export default SignUpScreen;
