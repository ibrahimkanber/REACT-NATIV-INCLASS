import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import Mycomponent from './Mycomponent';

/**
 * style="" HTML bu sekilde idi.
 * style={} react-native'de böyle olmak zorunda.
 */
const App = () => {
  const my_name = 'ibrahim';
  const isAdmin = false;
  function myFunction() {
    if (isAdmin) return <Text>Admin user</Text>;
    return <Text>Mitglied user</Text>;
  }
  // function myFunction() {
  //   return (
  //     <View>
  //       <Text>hello</Text>
  //       <Text>hello</Text>
  //     </View>
  //   );
  // }
  function myFunction() {
    const myArray = ['izmir', 'istanbul', 'manisa'];
    return myArray.map((city) => {
      return <Text>{city}</Text>;
    });
  }

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>CLARUSWAY!!!</Text>
      </View>
      <View>
        <Mycomponent />
      </View>
      {myFunction()}

      <Text>{my_name}</Text>
      {isAdmin ? <Text>Admin user</Text> : null}
      {isAdmin && <Text>Admin user</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
    padding: 10,
    margin: 20,
    borderRadius: 8,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
  },
});
export default App;
