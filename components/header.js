import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function Header()
{
    return (
        <View style={styles.heads}>
            
            <Text style={styles.text}>Todo List</Text>
        </View>
    )
}

const styles = StyleSheet.create({
 heads : {
    height:80,
    paddingTop:38,
    backgroundColor: 'grey'
 },

 text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
 }
})