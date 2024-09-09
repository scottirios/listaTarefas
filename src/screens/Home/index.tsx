import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from "react";
import { Task } from "../../components/Task";

type TaskType = {
  name: string;
  quantity: number;
};

export function Home() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [taskName, setTaskName] = useState("");
  const [taskQuantity, setTaskQuantity] = useState("");

  function handleTaskAdd() {
    if (tasks.find((task) => task.name === taskName)) {
      return Alert.alert(
        "Tarefa já cadastrada!",
        "Já existe uma tarefa na lista com este nome."
      );
    }

    setTasks((prevState) => [
      ...prevState,
      { name: taskName, quantity: Number(taskQuantity) },
    ]);
    setTaskName("");
    setTaskQuantity("");
  }

  function handleTaskRemove(name: string) {
    Alert.alert("Remover", `Deseja remover a tarefa ${name}?`, [
      {
        text: "Sim",
        onPress: () =>
          setTasks((prevState) =>
            prevState.filter((task) => task.name !== name)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerBlue}>
        <Text style={styles.title}> Lista de Tarefas </Text>
        <FontAwesome5 name="tasks" size={20} color="#FFF" />
      </View>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma tarefa"
          placeholderTextColor={"#404040"}
          keyboardType="default"
          onChangeText={setTaskName}
          value={taskName}
        />
        <TextInput
          style={styles.inputQuantity}
          placeholder="Quantidade"
          placeholderTextColor={"#404040"}
          keyboardType="numeric"
          onChangeText={setTaskQuantity}
          value={taskQuantity}
        />
        <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
          <AntDesign name="pluscircleo" size={18} color="#fff" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Task
            name={item.name}
            quantity={item.quantity}
            onRemove={() => handleTaskRemove(item.name)}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={tasks.length <= 0 && styles.list}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <FontAwesome name="tasks" size={58} color="black" />
            <Text style={styles.listEmptyText}>
              Adicione tarefas a sua lista de tarefas
            </Text>
          </View>
        )}
      />
    </View>
  );
}
