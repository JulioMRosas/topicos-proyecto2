import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
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
  const [chat, setChat] = useState(false);
  const [chatText, setChatText] = useState("Escribe aqui lo que necesitas");

  const signOut = () => {
    setUser(false);
  };

  const useChat = () => {
    setChat(true);
  }

  const closeChat = () => {
    setChat(false);
  }

  return (
    <>
      { user && chat ? (
        /* Chat de ayuda */
        <SafeAreaView style={styles.chatContainer}>
          <View style={styles.chatHeader}>
            <Text>Chat de ayuda</Text>
            <TouchableOpacity style={styles.chatRegresar}>
              <AntDesign name="back" size={24} color="black" onPress={closeChat}/>
            </TouchableOpacity>
          </View>
          <View style={styles.chatMainArea}>
            <Text>conversacion</Text>
          </View>
          <View style={styles.chatTypingArea}>
            <TextInput
              style={styles.chatInput}
              value={chatText} 
            />
            <TouchableOpacity style={styles.chatSendMessage}>
              <Ionicons name="send-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      ) : user ? (
        /* Membresias */
        <SafeAreaView style={styles.container}>
          <ImageBackground 
            source={require("./assets/Sandiafondo.png")}
            style={styles.tinyFondo}
          >
            {/* Header */}
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

              {/* Aqui trabaja tavo */}

            </View>
            </ScrollView>
          </ImageBackground >   

          {/* Footer */}
          <View style={styles.footer}>
            <View style={styles.Botonchat}>
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={35}
                color="black"
                onPress={useChat}
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
    width: "100%",
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

  chatContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red"
  },
  
  chatHeader: {
    height: "10%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "blue",
  },
  
  chatMainArea: {
    height: "80%",
    width: "100%",
    display: "flex",
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center"
  },

  chatTypingArea: {
    height: "10%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10
  },

  chatInput: {
    height: "100%",
    width: "90%"
  },

  chatSendMessage: {
    height: "100%",
    width: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});