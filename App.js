import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Keyboard, TouchableWithoutFeedback} from 'react-native';





const App = () => {

const [number, SetNumber] = useState("");
const [number2, SetNumber2] = useState("");
const [test, SetTest] = useState("")

const Alert = () => {
  alert(parseInt(number) + parseInt(number2))
  Keyboard.dismiss()
}

const DismissKeyboard = ({ children }) => (

  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.container}>

      <StatusBar style="dark" />
     
        <Text>test</Text>
        <Button 

        onPress={Alert}
        title="test"
        />
        <Text>Number 1</Text>
        <TextInput 

        defaultValue="0" 
        keyboardType='number-pad' 
        onChangeText={text => SetNumber(text)}
        clearTextOnFocus={true}
        onEndEditing={Keyboard.dismiss()}

        />        
        
        <Text>Number 2</Text>
        <TextInput 
        
        defaultValue="0" 
        keyboardType='number-pad' 
        onChangeText={text => SetNumber2(text)}
        clearTextOnFocus={true}
        onEndEditing={Keyboard.dismiss()}

        />

    </View>
</TouchableWithoutFeedback>
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
