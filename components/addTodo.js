import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function AddItem ({addTodos}) {

    const [text, setText] = useState('');

    const changeEvents =(val) => {setText(val);    }

    return (
        <View> 
          <TextInput style={styles.input} placeholder='Add an Item' onChangeText={(val) => changeEvents(val)}>

          </TextInput>
          <Button title='Add Items' onPress={() => addTodos(text)} color='purple' />
        </View>
    )

}

styles = StyleSheet.create()
{
  input: {
    /* Implement CSS here  */
  }   
}