/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Mybanner = (props) => {
  return (
    <View style={[styles.container, {backgroundColor: props.color}]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flex: 1}}>
          <Text style={styles.text}>{props.title}</Text>
          <Text>{props.desc}</Text>
        </View>
        {props.isActive ? null : <Text>Aktif Degil</Text>}
      </View>
    </View>
  );
};

export default Mybanner;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eceff1',
    margin: 10,
    borderRadius: 5,
    padding: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
