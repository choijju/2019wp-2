import React from 'react';
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Searchbar } from 'react-native-paper';

class mainScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image
         style={{height:'50%',width:'80%',resizeMode:'contain'}}
         source = {require('./image/home.png')}
        ></Image>
        <TouchableOpacity
          style={styles.trueButton}
          onPress={() => this.props.navigation.navigate('signIn')}>
            <Text style={styles.trueButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.falseButton}
          onPress={() => this.props.navigation.navigate('signUp')}>
            <Text style={styles.falseButtonText}>Join Us</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class signUpScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign Up'}
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput
        style={styles.input}
        placeholder = "  id"></TextInput>
        <TextInput
        style={styles.input}
        placeholder = "  password"></TextInput>
        <TextInput
        style={styles.input}
        placeholder = "  Confirm Password"></TextInput>
        <TextInput
        style={styles.input}
        placeholder = "  nickname"></TextInput>
        <TouchableOpacity
        style={styles.trueButton}
        onPress={() => this.props.navigation.navigate('signIn')}>
          <Text style={styles.trueButtonText}>Thanks for Join Us!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class signInScreen extends React.Component {
  static navigationOptions = {
    title: 'Login'}
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput
        style={styles.input}
        placeholder = "  id"></TextInput>
        <TextInput
        style={styles.input}
        placeholder = "  password"></TextInput>
        <TouchableOpacity
         style={styles.trueButton}
         onPress={() => this.props.navigation.navigate('Home')}>
           <Text style={styles.trueButtonText}>Get Started!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Home'
    }
    render() {
      return (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.props.navigation.navigate('Home')}>
           <Text style={styles.falseButtonText}>     Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.props.navigation.navigate('users')}>
           <Text style={styles.falseButtonText}>     Users</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.props.navigation.navigate('Home')}>
           <Text style={styles.falseButtonText}>     Likes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.props.navigation.navigate('profile')}>
           <Text style={styles.falseButtonText}>     Profile</Text>
          </TouchableOpacity>
        </View>
      );
    }
  };

  class profileScreen extends React.Component {
    static navigationOptions = {
      title: 'Profile Setting'}
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <TextInput
          style={styles.input}
          placeholder = "  nickname"></TextInput>
          <TextInput
          style={styles.input}
          placeholder = "  password confirm"></TextInput>
          <TextInput
          style={styles.input}
          placeholder = "  gender"></TextInput>
          <TextInput
          style={styles.input}
          placeholder = "  birthday"></TextInput>
          <TextInput
          style={styles.input}
          placeholder = "  city"></TextInput>
          <TextInput
          style={styles.input}
          placeholder = "  hobby"></TextInput>
          <TouchableOpacity
          style={styles.trueButton}
          onPress={() => this.props.navigation.navigate('Home')}>
            <Text style={styles.trueButtonText}>SUMBIT</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }

  class usersScreen extends React.Component {
    static navigationOptions = {
      title: 'Users'
    }
    render() {
      return (
        <View style={{flex: 1, alignItems: 'flex-start'}}>
          <Searchbar
           placeholder="Search"
          />
          </View>
      );
    }
  };

const styles = StyleSheet.create({
  trueButton: {
    backgroundColor: "#FFCC00",
    padding: 10,
    margin: 5,
  },
  trueButtonText: {
    color: "white",
  },
  falseButton: {
    backgroundColor: "white",
    padding: 10,
    margin: 5,
    borderColor:"#FFCC00",
    borderWidth: 1
  },
  falseButtonText: {
    color: "#FFCC00",
  },
  input: {
    margin: 5,
    height: 40,
    borderColor: "#CCCCCC",
    width: '95%',
    borderWidth: 1
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 30,
    justifyContent:'center'
  },
  buttonContainer: {
    flex: 1
  },
});

const RootStack = createStackNavigator(
  {
    Main: mainScreen,
    Home: HomeScreen,
    signIn: signInScreen,
    signUp: signUpScreen,
    profile: profileScreen,
    users:usersScreen
  },
  {
    initialRouteName: 'Main',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
};



