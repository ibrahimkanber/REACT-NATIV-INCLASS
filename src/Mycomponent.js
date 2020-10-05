/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

const Mycomponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Selamlar</Text>
      <Text style={styles.text}>CLARUSWAY App'e hoşgeldiniz</Text>
      <View>
        <Text style={styles.text}>Fullsatck developer olmaya hazır olun!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  text: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
});

export default Mycomponent;
