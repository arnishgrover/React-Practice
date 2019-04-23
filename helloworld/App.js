import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  TextInput, 
  View,
  Text,
  Button
} from 'react-native';

export default class App extends Component {
  constructor(props) {
      super();
      this.state = {
        color: 'red'
      }
      this.clickHandler = this.clickHandler.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style = {styles.text}> Enter Username </Text>
          <TextInput style={styles.textInputStyle} />

          <Text style = {styles.text}> Enter Password </Text>
          <TextInput style={styles.textInputStyle}/>
          
          <Button onPress={this.clickHandler} title="Submit" color={this.state.color}/>

       
        </View>
        
      </View>
    );
  }
  clickHandler = () => {
    if(this.state.color == 'blue') {
      this.setState({color: 'red'});
    }
    else {
      this.setState({color: 'blue'});
    }
  }
 
}

const styles = StyleSheet.create({
  textInputStyle: {
    
    backgroundColor: 'black',
    color: 'white'
    
  },
  container: {
    flex: 1,
    
    backgroundColor: '#F5FCFF',
  },
  form: {
    flex: 1,
    padding: 25,
    
    justifyContent: 'center', 
    backgroundColor: 'white'
  },
  text : {
    fontSize: 15,
    color: 'black'
  }
});
