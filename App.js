import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

const button = () => {
  alert('button Pressed')
}


const App = () => {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <Button onPress={button} title="Wow"/>

      <Text>Caden's React Native Project</Text>
      <TextInput 

      keyboardType='email-address'
      style={{height: 40, padding: 10}} 
      placeholder="Type Here"
      onChangeText={text => setText(text)}
      defaultValue={text}

      />

      <Text style={{padding: 10, fontSize: 42}}> 
      
        {1+1}

      </Text>

      <StatusBar style="dark" />
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
