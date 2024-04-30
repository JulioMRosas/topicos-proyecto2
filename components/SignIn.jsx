import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { app } from '../utils/firebase';
import { getAuth,signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

export default function Home(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { user, setUser } = props;

  const signInWithEmail = async () => {
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      // Aquí puedes navegar a otra pantalla o realizar alguna acción adicional
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
    } catch (error) {
      setError(error.message);
    }
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Bienvenido</Text>
      <View style={styles.container2}>
        <Text style={styles.remembership}>Recuerda asociar tu membresía</Text>
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
          {error && <Text style={styles.errorText}>{error}</Text>}
          <TouchableOpacity style={styles.signInButton} onPress={signInWithEmail}>
            <Text style={styles.signInButtonText}>Iniciar sesión</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.registerButton} onPress={toggleModal}>
            <Text style={styles.registerButtonText}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal visible={isModalVisible} animationType="slide">
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
          {error && <Text style={styles.errorText}>{error}</Text>}
          <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
            <Text style={styles.registerButtonText}>Registrarse</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
            <Text style={styles.closeButtonText}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
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
    height: "50%",
    alignItems: "center",
    borderWidth: 5, 
    borderColor: "#c6ebc5", 
  },
  welcome: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 5,
    padding: 20,
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
    color: 'red',
    marginBottom: 10,
  },
});
