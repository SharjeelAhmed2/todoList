import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// passing props
export default function TodoItem ({item, presshandler})
    {
        <TouchableOpacity onPress={() => presshandler(item.key)}>
            <Text style={styles.item}>
                {item.text}
            </Text>
        </TouchableOpacity>

    }


styles = StyleSheet.create({

    item : {
      padding: 16,
      marginTop: 16,
      borderColor: "#bbb",
      borderWidth: 1,
      borderStyle: 'dashed',
    
    },
})