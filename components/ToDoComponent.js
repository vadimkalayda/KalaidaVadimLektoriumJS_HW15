import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, ScrollView, FlatList, Button, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function ToDoComponent () {
  const [ todoItemText, setToDoItemText ] = useState('');
  const [ counter, setCounter ] = useState(0);
  const [ id, setId ] = useState(0);
  const [ todoItems, setToDoItems ] = useState([]);

  const addToDoItem = () => {
    setId(id + 1);
    todoItems.push({
      id: id,
      text : todoItemText,
      checked : false,
      deleted: false
    });
    setToDoItemText('');
  };

  const deleteToDoItem = (index, event) => {

  };

  const checkedToDoItem = (index) => {
    todoItems[index].text = 'true';
  };

  return(
    <SafeAreaView >
      <ScrollView>
        <View style={styles.toDoContainer}>
          <View style={styles.toDoTopForm}>
            <TextInput placeholder={'ToDo Item'} onChangeText={(itemText) => {setToDoItemText(itemText)}}
             value={todoItemText} placeholderTextColor={'#F3349C'} style={styles.toDoTextInput} autoCorrect={true}/>
            <Button onPress={addToDoItem} color={'#F3349C'} title={'Add Item'}>Add Item</Button>
          </View>
          <View style={styles.toDoBottomItems}>
            <FlatList data={todoItems} renderItem={({item, index}) => {
              if(item.deleted === false) {
                return(
                  <LinearGradient style={styles.toDoItem} colors={['#9227CF', '#F3349C', '#9227CF']} start={[0.1, 0.1]} end={[0.85, 0.8]}>
                    <View style={{width: 35, alignItems: 'center'}}>
                      <Text onPress={() => {
                        item.checked = !item.checked;
                        setCounter(counter + 1);
                      }} style={{color: '#1ED760', fontWeight: 'bold'}}>
                        ✓
                      </Text>
                    </View>
                    <View style={styles.toDoItemCenter}>
                      <Text style={ item.checked === true ? styles.toDoItemTextLineThrough : styles.toDoItemText }>{item.text}</Text>
                    </View>
                    <View style={{width: 35, alignItems: 'center'}}>
                      <Text onPress={() => {
                        item.deleted = true;
                        setCounter(counter + 1);
                      }} style={{color: '#F3349C', fontWeight: 'bold'}}>
                        ✗
                      </Text>
                    </View>
                  </LinearGradient>
                );
              }
            }} />
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
let toDoItemCenterWidth = width - 145;

const styles = StyleSheet.create({
  toDoContainer : {
    marginTop: 25,
    marginBottom: 25
  },
  toDoTopForm : {
    width: width,
    height: 50,
    alignItems: 'center',
    marginBottom: 75
  },
  toDoTextInput: {
    width: width - 75,
    height: 50,
    color: '#F3349C',
    borderBottomColor: '#F3349C',
    borderBottomWidth: 1
  },
  toDoBottomItems : {
    alignItems: 'center'
  },
  toDoItem : {
    width: width - 75,
    minHeight: 40,
    borderRadius: 10,
    marginBottom: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  toDoItemCenter : {
    width: toDoItemCenterWidth
  },
  toDoItemText: {
    color: '#fff',
    paddingTop: 10,
    paddingBottom: 10
  },
  toDoItemTextLineThrough: {
    color: '#fff',
    paddingTop: 10,
    paddingBottom: 10,
    textDecorationLine: 'line-through'
  }
});
