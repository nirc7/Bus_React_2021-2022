import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View, TouchableOpacity } from 'react-native';

export default function HomePage({ navigation }) {
  const [counter, setCounter] = useState(0);

  const btnAdd = () => {
    debugger;
    let num = 7;
    num++;
    console.log(num);
    setCounter(prevC => prevC + 1)
  }

  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
      <Button title='add one' onPress={btnAdd} />
      <Text style={{ fontSize: 30 }}>counter={counter}</Text>

      <View>
        <TouchableOpacity onPress={() => { navigation.navigate('SecondPage', { user: 'Lucy ' + new Date().getSeconds() }); }}>
          <Text style={{
            fontSize: 20, borderWidth: 2,
            borderRadius: 15, padding: 10, backgroundColor: 'yellow',
            color: 'purple', margin: 20
          }} >
            Goto Second Page!</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={() => { navigation.navigate('BottomTabNavigator'); }}>
          <Text style={{
            fontSize: 20, borderWidth: 2,
            borderRadius: 15, padding: 10, backgroundColor: 'grey',
            color: 'white', margin: 20
          }} >
            Goto Tab Page!</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
