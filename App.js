import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Keyboard, TouchableWithoutFeedback, SafeAreaView} from 'react-native';





const App = () => {

  const [number0, SetNumber0] = useState("")
  const [number1, SetNumber1] = useState("")

  return (
    <View style={styles.container}>
      
      <Text style={{padding:10}}>Number 1</Text>
      
      <TextInput 

        onChange = {text => SetNumber0(text)}
        defaultValue='Number 1 Input'
        style={{padding:10}}
        keyboardType='number-pad'
        returnKeyLabel='Fuck'
        returnKeyType='done'
        clearTextOnFocus={true}

      />
      <Text style={{padding:10}}>Number 2</Text>
      
      <TextInput 

        onChange = {text => SetNumber2(text)}
        defaultValue='Number 1 Input'
        style={{padding:10}}
        keyboardType='number-pad'
        returnKeyLabel='Fuck'
        returnKeyType='done'
        clearTextOnFocus={true}

      />

    </View>
  );
}
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
