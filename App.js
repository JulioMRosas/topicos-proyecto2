import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SignIn from './components/SignIn';

export default function App() {
const [user, setUser] = useState(false);

  return (
    <View style={styles.container}>
      {user ? (<Text style={styles.text}>Hola</Text>) : <SignIn/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: 'red'
  }
});
