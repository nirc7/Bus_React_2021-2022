import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

export default function SecondPage(props) {

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      console.log('focus');
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        console.log('unfocus');
      };
    }, [])
  );

  return (
    <View style={styles.container}>
      <Text>Second Page</Text>
      <Text>user: {props.route.params != undefined ?
        props.route.params.user : '...'}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
