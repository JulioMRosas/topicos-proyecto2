import { useState } from "react";
import {
  SafeAreaView,
  SafeAreaViewComponent,
  StyleSheet,
  Text,
  View,
} from "react-native";
import SignIn from "./components/SignIn";

export default function App() {
  const [user, setUser] = useState(true);

  return (
    <View style={styles.container}>
      {user ? <SafeAreaView></SafeAreaView> : <SignIn />}
      <View style={styles.rectangulo}></View>
      <View style={styles.rectangulo}></View>
      <View style={styles.rectangulo}></View>
      <View style={styles.footer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Set the container to flex 1 to occupy the full screen
    backgroundColor: "#fa7070",
  },
  rectangulo: {
    width: "90%",
    height: "20%",
    margin: 20,
    borderRadius: 25,
    backgroundColor: "#fefded",
  },
  footer: {
    flex: 1,
    marginTop: 90,
    backgroundColor: "#c6ebc5",
    minHeight: 200,
  }
})