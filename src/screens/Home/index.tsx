import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";

export function Home() {

    const [tasks, setTasks] = useState<string[]>([]);
    const [taskName, setTaskName] = useState('');

    function handleTaskAdd() {
        if (tasks.includes(taskName)) {
            return Alert.alert("Tarefa já cadastrado!", "Já existe uma tarefa na lista com este nome.");
        }

        setTasks((prevState) => [...prevState, taskName]);
        setTaskName('');
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
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor={"#404040"}
                ></TextInput>
                <TouchableOpacity style={styles.button}>
                    <AntDesign name="pluscircleo" size={18} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    )
}