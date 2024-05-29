import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Image,
  ImageBackground,
} from "react-native";
import { app } from "../utils/firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { registerIndieID, unregisterIndieDevice } from "native-notify";
import axios from "axios";

export default function Home(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [errorregistro, setErrorregistro] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { user, setUser } = props;

  const signInWithEmail = async () => {
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      // Aquí puedes navegar a otra pantalla o realizar alguna acción adicional
      const user = auth.currentUser;
      await registerIndieID(`${user.uid}`, 21557, "78MYwmeZ0dWuMHfDobD7oM");
      setUser(true);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleRegister = async () => {
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
      setIsModalVisible(false); // Cierra el modal después de registrar al usuario exitosamente
      // Aquí puedes realizar alguna acción adicional después del registro
    } catch (errorregistro) {
      setErrorregistro(errorregistro.message);
    }
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/Sandiafondo.webp")}
        style={styles.tinyFondo}
      >
        <Text style={styles.welcome}>Bienvenido</Text>
        <View style={styles.container2}>
          <Text style={styles.remembership}>Remembership</Text>
          <Image
            style={styles.tinyLogo}
            source={require("../assets/LogoRemembership.png")}
          />
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Correo electrónico"
              onChangeText={setEmail}
              value={email}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              onChangeText={setPassword}
              value={password}
              secureTextEntry={true}
            />
            <TouchableOpacity
              style={styles.signInButton}
              onPress={signInWithEmail}
            >
              <Text style={styles.signInButtonText}>Iniciar sesión</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.registerButton}
              onPress={toggleModal}
            >
              <Text style={styles.registerButtonText}>Registrarse</Text>
            </TouchableOpacity>
            {error && (
              <Text style={styles.errorText}>
                Usuario y/ó contraseña invalido
              </Text>
            )}
          </View>
        </View>
        <Modal visible={isModalVisible} animationType="slide">
          <View style={styles.registerContainer}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Registrarse</Text>
              <TextInput
                style={styles.input}
                placeholder="Correo electrónico"
                onChangeText={setEmail}
                value={email}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <TextInput
                style={styles.input}
                placeholder="Contraseña"
                onChangeText={setPassword}
                value={password}
                secureTextEntry={true}
              />
              <TouchableOpacity
                style={styles.registerButton}
                onPress={handleRegister}
              >
                <Text style={styles.registerButtonText}>Registrarse</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={toggleModal}
              >
                <Text style={styles.closeButtonText}>Cerrar</Text>
              </TouchableOpacity>
              {errorregistro && (
                <Text style={styles.errorText}>
                  Introduzca un correo valido
                </Text>
              )}
            </View>
          </View>
        </Modal>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  remembership: {
    fontSize: 23,
    color: "#000000",
  },
  container2: {
    backgroundColor: "#fefded",
    padding: 25,
    borderRadius: 35,
    width: "75%",
    height: "70%",
    alignItems: "center",
    borderWidth: 5,
    borderColor: "#c6ebc5",
  },
  welcome: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 5,
    padding: 20,
    color: "#FFFFFF",
  },
  tinyLogo: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },
  tinyFondo: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    ImageBackground,
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
  registerContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d83c3c",
    borderWidth: 7,
    borderColor: "#bc2626",
    borderStyle: "solid",
  },
  registerButton: {
    width: "50%",
    backgroundColor: "#a1c398",
    borderRadius: 12,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  registerButtonText: {
    color: "#000000",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  closeButton: {
    width: "50%",
    backgroundColor: "#a1c398",
    borderRadius: 12,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  closeButtonText: {
    color: "#000000",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  modalTitle: {
    fontSize: 23,
    color: "#000000",
    marginBottom: 20,
  },
  modalContainer: {
    backgroundColor: "#fefded",
    padding: 25,
    borderRadius: 35,
    width: "75%",
    height: "70%",
    alignItems: "center",
    borderWidth: 5,
    borderColor: "#c6ebc5",
  },
  input: {
    backgroundColor: "#ffffff",
    width: "80%",
    marginBottom: 20,
    padding: 15,
    borderRadius: 12,
  },
  form: {
    width: "100%",
    alignItems: "center",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});
