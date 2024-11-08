import { useState } from "react";
import { ScrollView, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [tasks, setTasks] = useState([
    { id: 1, title: " Terminar o trabalho", done: false },
    { id: 2, title: " Ir pra Joinville", done: false },
    { id: 3, title: " Incomodar os amiguinhos", done: false },
  ]);

const updateTask = (id: number) => {
  const task = tasks.find(task => task.id == id)
  if (task) {
    task.done = !task.done
    setTasks([...tasks])
  }
}

  return (
    <View style={styles.container}>
      <View style={styles.tasks}>
        <Text style={styles.h1}>My tasks in React</Text>
        <ScrollView style={styles.tasksList}>
          {tasks.map(task => (
            <Text 
            style={styles.taskItem} 
            onPress={() => updateTask(task.id)}>
              {task.done ? "✅" : "❌"}
              {task.title}
              </Text>
          ))}
        </ScrollView>
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Alternar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },

  h1: {
    fontSize: 20,
    textAlign: "center",
  },

  button: {
    backgroundColor: "#9966FF",
    padding: 20,
    justifyContent: "center",
    marginBottom: 20,
    borderRadius: 20,
    width: 200,
  },

  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },

  tasks: {
    flex: 1,
    width: "100%",
  },

  tasksList: {
    flex: 1,
    padding: 20,
  },

  taskItem: {
    padding: 10,
    backgroundColor: "#9C9C9C",
    marginBottom: 10,
    fontSize: 16,
    borderRadius: 5,
  },
});
