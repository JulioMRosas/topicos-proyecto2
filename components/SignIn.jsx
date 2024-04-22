import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useState } from "react";

const SignIn = () => {
  const [message, setMessage] = useState(false)

  const signIn = () => {
    setMessage(true);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Remembership</Text>
      <TouchableOpacity style={styles.signInButton} onPress={signIn}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>
      { message && <Text>tas logeado</Text>}
    </SafeAreaView>
  )
}

export default SignIn;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: "#8e44ad",
    marginBottom: 20,
  },

  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  signInButton: {
    width: "50%",
    backgroundColor: "#8e44ad",
    borderRadius: 12,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },

  signInButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});