import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  StyleSheet,
} from 'react-native';
import CustomHeader from '../../components/CustomHeader';

const {width, height} = Dimensions.get('window');

const SignUpForm = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#f4effa" />
      <CustomHeader
        title="E-LOT PARK"
        titleStyle={{
          flexShrink: 1,
          fontSize: height * 0.05,
          paddingTop: height * 0.2,
        }}
      />
      <View style={styles.formContainer}>
        <TextInput
          placeholder="Enter your name"
          style={styles.text}
          placeholderTextColor="#FFF"
        />
        <TextInput
          placeholder="Enter Your Email"
          style={styles.text}
          placeholderTextColor="#FFF"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Password"
            style={styles.passwordInput}
            placeholderTextColor="#FFF"
            secureTextEntry={true}
          />
        </View>
        <TextInput
          placeholder="Contact No"
          style={styles.text}
          placeholderTextColor="#FFF"
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.createContainer}>
          <Text style={[styles.createText, {color: '#532b88'}]}>
            Already have an account?{' '}
          </Text>
          <TouchableOpacity>
            <Text style={[styles.createText, {color: '#9c89b8'}]}>
              Log In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f4effa',
  },
  formContainer: {
    paddingTop: height * 0.04,
    justifyContent: 'center',
    width: '90%',
  },
  text: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    marginVertical: height * 0.01,
    width: '90%',
    paddingLeft: 18,
    backgroundColor: '#c8b1e4',
    borderRadius: width * 0.04,
    height: height * 0.06,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    backgroundColor: '#c8b1e4',
    borderRadius: width * 0.04,
    height: height * 0.06,
    marginVertical: height * 0.01,
    paddingHorizontal: 18,
    alignSelf: 'center',
  },
  passwordInput: {
    flex: 1,
    color: '#fff',
    height: '100%',
    textAlign: 'left',
  },
  button: {
    width: width * 0.3,
    justifyContent: 'center',
    padding: 12,
    margin: height * 0.01,
    backgroundColor: '#532b88',
    borderRadius: width * 0.1,
    height: height * 0.09,
    alignSelf: 'center',
    marginTop: height * 0.06,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: height * 0.023,
    lineHeight: height * 0.05,
  },
  createContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  createText: {
    fontWeight: '900',
    fontSize: width * 0.037,
  },
});

export default SignUpForm;
