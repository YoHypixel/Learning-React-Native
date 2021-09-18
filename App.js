import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

const button = () => {
  alert('button Pressed')
}


const App = () => {

  
  const button = () => {
    alert('button Pressed')
  }
  const [num2, SetNum2] = useState(0)
  const [num1, SetNum1] = useState(0);
  const [text, setText] = useState('');
  const [total, SetTotal] = useState(num1 + num2);


    const test = () => {
    const total1 = num1 + num2;
    SetTotal(total1) 
  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Button onPress={button} title="Wow"/>

      <Text>Caden's React Native Project</Text>
      <TextInput 

      keyboardType='number-pad'
      style={{height: 40, padding: 10}} 
      placeholder="Type Here"
      onChangeText={text1 => setText(text1)}
      defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 12}}> 
        {text}
      </Text>

      <Text>Test number 1</Text>
      <TextInput keyboardType='number-pad' placeholder = "test"
      placeholder = "test1" 
      onChange={num1 => SetNum1(parceInt(num1))}
      defaultValue={num1}/>      
      
      <Text>Test number 2</Text>
      <TextInput keyboardType='number-pad' placeholder = "test2" 
      onChange={num2 => SetNum2(parceInt(num2))}
      defaultValue={num2}
      />

      <Button onPress={test} title="WOWZA"/>

      <Text>{total}</Text>

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
