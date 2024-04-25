import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";

const SignIn = () => {
  const [message, setMessage] = useState(false);

  const signIn = () => {
    setMessage(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.welcome}>Bienvenido a:</Text>
        <Text style={styles.remembership}>"Remembership"</Text>
        <TouchableOpacity style={styles.signInButton} onPress={signIn}>
          <Text style={styles.signInButtonText}>Iniciar sesión con Google</Text>
        </TouchableOpacity>
        {message && <Text>tas logeado</Text>}
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  remembership: {
    fontSize: 23,
    color: "#000000",
    marginBottom: 20,
  },
  container2: {
    backgroundColor: "#fefded",
    padding: 25,
    borderRadius: 35,
    width: "75%",
    height: "40%",
    alignItems: "center",
    borderWidth: 5, // Add border width
    borderColor: "#c6ebc5", // Set border color
  },

  welcome: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 5,
    padding: 20,
    fontFamily: "Quicksand-Regular",
  },

  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E06666",
  },

  signInButton: {
    width: "50%",
    backgroundColor: "#a1c398",
    borderRadius: 12,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },

  signInButtonText: {
    color: "#000000",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});