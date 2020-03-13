import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, KeyboardAvoidingView, SafeAreaView} from 'react-native';
import { Header, Input } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import ToDoComponent from "./components/ToDoComponent";

export default function App() {
  return (
    <View style={styles.container}>
      <Header backgroundColor={'#AD42EA'} centerComponent={{text:'TODO list', style:{color: '#fff', textTransform: 'uppercase', fontWeight: 'bold', fontSize: 22}}} containerStyle={styles.header}/>
      <LinearGradient colors={['#000E04', '#150810']} start={[0.2, 0.3]}>
        <SafeAreaView>
          <ScrollView contentContainerStyle={styles.mainBlock}>
            <ToDoComponent />

          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
}

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    width: width,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  header : {
    height: 80,
  },
  mainBlock : {
    width: width,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  }
});
