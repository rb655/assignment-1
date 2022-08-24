import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },

  text: {
    fontSize: 32,
    fontWeight: '800',
    textAlign: 'justify',
    color: 'yellow',
    margin: 1,
  },
});

export default App;
