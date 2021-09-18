import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';



const App = () => {

const [number, SetNumber] = useState("");
const [number2, SetNumber2] = useState("");
const [test, SetTest] = useState("")

const testlol = () => {
  alert(parseInt(number) + parseInt(number2))
}

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
     
        <Text>test</Text>
        <Button 

        onPress={testlol}
        title="test"
        />
        <Text>Number 1</Text>
        <TextInput defaultValue="0" keyboardType='number-pad' onChangeText={text => SetNumber(text)}/>        
        
        <Text>Number 2</Text>
        <TextInput defaultValue="0" keyboardType='number-pad' onChangeText={text => SetNumber2(text)}/>

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
