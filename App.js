import React, { useState } from "react";
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
  Modal,
} from "react-native";
import SignIn from "./components/SignIn";
import {
  Entypo,
  Ionicons,
  AntDesign,
  SimpleLineIcons,
} from "@expo/vector-icons";

export default function App() {
  const [user, setUser] = useState(true);
  // Membresías...
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState({
    title: "",
    monto: "",
    creacionFecha: "",
    expiracionFecha: "",
  });
  const [editedTask, setEditedTask] = useState({
    title: "",
    monto: "",
    creacionFecha: "",
    expiracionFecha: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  /* Confirmar si se borrara una membresia */
  const [deleteMembership, setDeleteMembership] = useState(false);

  /* Estados del chat */
  const [chat, setChat] = useState(false);
  const [chatText, setChatText] = useState("Escribe aquí lo que necesitas");
  const signOut = () => {
    setUser(false);
  };

  // Actualizar la lista existente de membresías con una nueva
  const addTask = (newTask) => {
    setTask([...task, newTask]);
  };
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  // Editar
  const editTask = (index) => {
    setEditedTask(task[index]);
    setIsEditing(true); // Asegurar que isEditing se establezca en true al editar una tarea existente
    setEditIndex(index);
    setIsModalVisible(true); // Abre el modal al editar una membresía existente
  };

  // Eliminar
  const deleteTask = (index) => {
    const updatedTask = [...task];
    updatedTask.splice(index, 1);
    setTask(updatedTask);
    setDeleteMembership(false);
  };

  // Función de agregar la nueva membresía a la lista
  const handleAddTask = () => {
    if (newTask.title.trim() !== "" && !isNaN(parseFloat(newTask.monto))) {
      const currentDateTime = new Date().toLocaleString();
      const updatedNewTask = { ...newTask, creacionFecha: currentDateTime };
      addTask(updatedNewTask);
      setNewTask({
        title: "",
        monto: "",
        creacionFecha: "",
        expiracionFecha: "",
      });
      setIsModalVisible(false); // Cierra el modal después de agregar nueva membresía exitosamente
    }
  };

  // Guardar nuevos datos después de editar membresía existente
  const saveEditedTask = () => {
    if (
      editedTask.title.trim() !== "" &&
      !isNaN(parseFloat(editedTask.monto))
    ) {
      const updatedTask = [...task];
      updatedTask[editIndex] = editedTask;
      setTask(updatedTask);
      setIsEditing(false);
      setEditedTask({
        title: "",
        monto: "",
        creacionFecha: "",
        expiracionFecha: "",
      });
      setEditIndex(null);
      if (!isEditing) {
        setShowSuccessMessage(true); // Mostrar el mensaje de éxito en el modal
      }
    }
  };

  const useChat = () => {
    setChat(true);
  };

  const closeChat = () => {
    setChat(false);
  };

  const confirmDelete = () => {
    setDeleteMembership(true);
  };

  const cancelDelete = () => {
    setDeleteMembership(false);
  };

  return (
    <>
      {user && chat ? (
        /* Chat de ayuda */
        <SafeAreaView style={styles.chatContainer}>
          <View style={styles.chatHeader}>
            <Text>Chat de ayuda</Text>
            <TouchableOpacity style={styles.chatRegresar} onPress={closeChat}>
              <AntDesign name="back" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.chatMainArea}>
            <Text>Conversación</Text>
          </View>
          <View style={styles.chatTypingArea}>
            <TextInput
              style={styles.chatInput}
              value={chatText}
              onChangeText={(text) => setChatText(text)}
            />
            <TouchableOpacity style={styles.chatSendMessage}>
              <Ionicons name="send-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      ) : user ? (
        /* Membresías */
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

            <Modal visible={isModalVisible} animationType="slide">
              <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}>
                  {isEditing ? "Editar membresía" : "Crea una nueva membresía"}
                </Text>
                <TextInput
                  style={styles.modalInputTitulo}
                  placeholder="Presiona para poner un titulo"
                  value={isEditing ? editedTask.title : newTask.title}
                  onChangeText={(text) =>
                    isEditing
                      ? setEditedTask({ ...editedTask, title: text })
                      : setNewTask({ ...newTask, title: text })
                  }
                />
                <TextInput
                  style={styles.modalInputPrecio}
                  placeholder="Presiona para poner el precio"
                  value={isEditing ? editedTask.monto : newTask.monto}
                  keyboardType="numeric"
                  onChangeText={(text) =>
                    isEditing
                      ? setEditedTask({ ...editedTask, monto: text })
                      : setNewTask({ ...newTask, monto: text })
                  }
                />
                <TextInput
                  style={styles.modalInputFecha}
                  placeholder="Vencimiento (DD/MM/YYYY)"
                  value={
                    isEditing
                      ? editedTask.expiracionFecha
                      : newTask.expiracionFecha
                  }
                  keyboardType="numeric"
                  onChangeText={(text) =>
                    isEditing
                      ? setEditedTask({ ...editedTask, expiracionFecha: text })
                      : setNewTask({ ...newTask, expiracionFecha: text })
                  }
                />
                <TouchableOpacity
                  style={styles.modalAgregarBoton}
                  onPress={isEditing ? saveEditedTask : handleAddTask}
                >
                  <Text style={styles.modalRegisterButtonText}>
                    {isEditing ? "Guardar cambios" : "Agregar"}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.modalCerrarBoton}
                  onPress={toggleModal}
                >
                  <Text style={styles.modalTextoCerrar}>Cerrar</Text>
                </TouchableOpacity>
                {showSuccessMessage && (
                  <Text style={styles.menugeneral}>Guardado Con Éxito</Text>
                )}
              </View>
            </Modal>

            {/* Termina el modal */}
            <ScrollView style={styles.scrollView}>
              <View style={styles.menugeneral}>
                <View style={styles.menugeneral}>
                  {task.map((task, index) => (
                    <TouchableOpacity
                      style={styles.contenedorMembresia}
                      key={index}
                      onPress={() => {
                        editTask(index);
                      }}
                    >
                      <View style={styles.estructuraMembresia}>
                        <Text>Membresia: {task.title}</Text>
                        <Text>Monto: {task.monto}</Text>
                        <Text>Fecha de creación: {task.creacionFecha}</Text>
                        <Text>
                          Fecha de vencimiento: {task.expiracionFecha}
                        </Text>
                      </View>
                      <View style={styles.estructuraMembresiaX}>
                        <TouchableOpacity
                          style={styles.botonX}
                          onPress={confirmDelete}
                        >
                          <Entypo name="cross" size={24} color="black" />
                        </TouchableOpacity>
                      </View>
                      {deleteMembership && (
                        <View style={styles.contenedorBotonesBC}>

                          <TouchableOpacity
                            style={styles.confirmDeleteCancelar}
                            onPress={cancelDelete}
                          >
                            <Text style={styles.cancelarText}>Cancelar</Text>
                          </TouchableOpacity>
 
                          <TouchableOpacity
                            style={styles.confirmDeleteBorrar}
                            onPress={() => deleteTask(index)}
                          >
                            <Text style={styles.borrarText}>Borrar</Text>
                          </TouchableOpacity>
                        </View>
                      )}
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </ScrollView>
          </ImageBackground>

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
            <TouchableOpacity onPress={toggleModal}>
              <View style={styles.Botonagregar}>
                <AntDesign name="pluscircleo" size={35} color="black" />
              </View>
            </TouchableOpacity>
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
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },

  scrollView: {
    marginTop: 9,
    height: "80%",
    width: "100%", // Asegúrate de que el ScrollView use el espacio disponible
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
    color: "#FFFFFF", // Puedes usar cualquier código de color hexadecimal aquí
    fontWeight: "bold",
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
    backgroundColor: "red",
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
    alignItems: "center",
  },

  chatTypingArea: {
    height: "10%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },

  chatInput: {
    height: "100%",
    width: "90%",
  },

  chatSendMessage: {
    height: "100%",
    width: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  // modal //
  modalContainer: {
    backgroundColor: "#d83c3c",
    borderWidth: 7,
    borderColor: "#bc2626",
    borderStyle: "solid",
    height: "100%",
    width: "100%",
    alignItems: "center",
  },

  modalTitle: {
    fontSize: 24, // Cambia este valor para ajustar el tamaño del texto
    color: "#FFFFFF", // Puedes usar cualquier código de color hexadecimal aquí
    fontWeight: "bold",
    marginBottom: 20,
  },

  modalInputTitulo: {
    color: "#000000",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    backgroundColor: "white",
    borderRadius: 7,
    marginBottom: 9,
    width: "80%",
  },

  modalInputPrecio: {
    color: "#000000",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    backgroundColor: "white",
    borderRadius: 7,
    marginBottom: 9,
    width: "80%",
  },

  modalAgregarBoton: {
    width: "50%",
    backgroundColor: "#a1c398",
    borderRadius: 12,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },

  modalCerrarBoton: {
    width: "50%",
    backgroundColor: "#a1c398",
    borderRadius: 12,
    padding: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },

  modalTextoCerrar: {
    color: "#000000",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },

  modalRegisterButtonText: {
    color: "#000000",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  modalInputFecha:{
    color: "#000000",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    backgroundColor: "white",
    borderRadius: 7,
    marginBottom: 9,
    width: "80%",
  },
  borrarText:{
    color: "red",
    fontSize: 16,
    fontWeight: "bold",
  },

  cancelarText:{
    fontSize: 16,
    fontWeight: "bold",
  },

  contenedorBotonesBC:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  // modal termina //
  // contenedor de membresía //
  contenedorMembresia: {
    width: "90%",
    height: 145,
    marginBottom: 8,
    borderRadius: 25,
    backgroundColor: "#fefded",
    justifyContent: "center",
    display: "flex",
    padding: 20,
  },
  estructuraMembresiaX: {
    display: "flex",
    alignItems: "flex-end",
  },
  botonX: {
    backgroundColor: "#8dd68c",
    borderRadius: 100,
  },
});
