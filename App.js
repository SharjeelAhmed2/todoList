import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react/cjs/react.production.min';
import Header from './components/header';
import TodoItems from './components/items';
import AddTodo from './components/addTodo';

export default function App() {

   const [todos, setTodo]= useState(
    [
    {text: "Doing dishes", key: '1'},
    {text: "blowing hubby", key: '2'},
    {text: "Pet a cat", key :'3'}
    ]
   )

   // function to remove todos 

   const removeTodos = (key) => 
   {
    setTodo = ((prevTodo) => {
       return prevTodo.filter(todos => todos.key != key);
    })
   }

   const addTodos = (text) => 
   {
    if(text.length > 3 && text != '')
    {
      setTodo = ((prevTodo) => {
        return [
          
          {text: text , key : Math.random().toString()},
          // this below lines renders the old history is setTodo state
          ...prevTodo
        ]
      })
    }
    else 
    {
      Alert.alert('Task should be atleast 3 letters long');
    }
   }
  return (
    <View style={styles.container}>
      <Header />
     <View style ={styles.content}>
       <AddTodo addTodos={addTodos}/>
      <View style = {styles.list}
      >
        <FlatList
         data={todos}
          /* Render item renders data in the list, it's essentially a loop */
          renderItem={({item}) => 
          <TodoItems item={item} presshandler = {removeTodos} />
        }
        />
      </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  // custom styling be like
  content : {

  },
  list : {
      
  }
});
