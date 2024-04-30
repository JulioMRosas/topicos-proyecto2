import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native";
import SignIn from "./components/SignIn";
import { Entypo, Ionicons, AntDesign, SimpleLineIcons } from "@expo/vector-icons";

export default function App() {
  const [user, setUser] = useState(false);

  const signOut = () => {
    setUser(false);
  }

  return (
    <>
      {user ? (
        <SafeAreaView style={styles.container}>
          <View style={styles.logo}>
            <Image
              style={styles.tinyLogo}
              source={require("./assets/LogoRemembership.png")}
            />
            <Text>Remembership</Text>
          </View>
          <View style={styles.rectangulo}>
            <View style={styles.Boton}>
              <Entypo name="dots-three-horizontal" size={24} color="black" />
            </View>
          </View>
          <View style={styles.rectangulo}>
            <View style={styles.Boton}>
              <Entypo name="dots-three-horizontal" size={24} color="black" />
            </View>
          </View>
          <View style={styles.rectangulo}>
            <View style={styles.Boton}>
              <Entypo name="dots-three-horizontal" size={24} color="black" />
            </View>
          </View>
          <View style={styles.footer}>
            <View style={styles.Botonchat}>
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={35}
                color="black"
              />
            </View>
            <TouchableOpacity>
              <View>
                <SimpleLineIcons name="logout" size={24} color="black" onPress={signOut}/>
              </View>
            </TouchableOpacity>
            <View style={styles.Botonagregar}>
              <AntDesign name="pluscircleo" size={35} color="black" />
            </View>
          </View>
        </SafeAreaView>
      ) : (
        <SignIn user={user} setUser={setUser}/>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flex: 1, // Set the container to flex 1 to occupy the full screen
    backgroundColor: "#fa7070",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },

  logo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },

  rectangulo: {
    width: "90%",
    height: "20%",
    marginBottom: 8,
    borderRadius: 25,
    backgroundColor: "#fefded",

    alignItems: "flex-end",
    justifyContent: "center",
    display: "flex",
  },

  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },

  Boton: {
    marginRight: 15,
    backgroundColor: "#A1C398",
    borderRadius: 100,
    minHeight: 50,
    minWidth: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  footer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 139,
    backgroundColor: "#c6ebc5",
    //minHeight: 200,
    height: "10%",
    width: "100%",
  },

  Botonagregar: {
    marginRight: 10,
  },

  Botonchat: {
    marginLeft: 10,
  },
  
});
