import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import SignIn from "./components/SignIn";
import {
  Entypo,
  Ionicons,
  AntDesign,
  SimpleLineIcons,
} from "@expo/vector-icons";

export default function App() {
  const [user, setUser] = useState(false);

  const signOut = () => {
    setUser(false);
  };

  return (
    <>
      {user ? (
        <SafeAreaView style={styles.container}>
          <ImageBackground 
            source={require("./assets/Sandiafondo.png")}
            style={styles.tinyFondo}
          >
          </ImageBackground >
          <View style={styles.logo}>
            <Image
              style={styles.tinyLogo}
              source={require("./assets/LogoRemembership.png")}
            />
            <Text style={styles.titulo}>Remembership</Text>
            <Image
              style={styles.tinyLogo}
              source={require("./assets/LogoRemembership.png")}
            />
          </View>
          <ScrollView style={styles.scrollView}>
          <View style={styles.menugeneral}>
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
          </View>
          </ScrollView>
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
                <SimpleLineIcons
                  name="logout"
                  size={24}
                  color="black"
                  onPress={signOut}
                />
              </View>
            </TouchableOpacity>
            <View style={styles.Botonagregar}>
              <AntDesign name="pluscircleo" size={35} color="black" />
            </View>
          </View>
        </SafeAreaView>
      ) : (
        <SignIn user={user} setUser={setUser} />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    ImageBackground,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },

  scrollView: {
    marginTop: 9,
    height: "80%",
    width: "100%" // Asegúrate de que el ScrollView use el espacio disponible
  },

  menugeneral: {
    height: "80%",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  logo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "10%",
    width: "100%",
  },

  titulo: {
    fontSize: 24, // Cambia este valor para ajustar el tamaño del texto
    color: '#FFFFFF', // Puedes usar cualquier código de color hexadecimal aquí
    fontWeight: 'bold',
  },

  rectangulo: {
    width: "90%",
    height: 100,
    marginBottom: 8,
    borderRadius: 25,
    backgroundColor: "#fefded",
    alignItems: "flex-end",
    justifyContent: "center",
    display: "flex",
  },

  tinyLogo: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },

  tinyFondo: {
    flex: 1,
    width: '100%'
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
    backgroundColor: "#8dd68c",
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
