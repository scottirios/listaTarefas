import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";
import { Task } from "../../components/Task";

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

    function handleTaskRemove(name: string) {
        Alert.alert("Remover", `Deseja remover a tarefa ${name}?`, [
            {
                text: 'Sim',
                onPress: () => setTasks(prevState => prevState.filter(task => task != name))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
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
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor={"#404040"}
                    keyboardType="default"
                    onChangeText={setTaskName}
                    value={taskName}
                ></TextInput>
                <TouchableOpacity style={styles.button}
                    onPress={handleTaskAdd}>
                    <AntDesign name="pluscircleo" size={18} color="#fff" />
                </TouchableOpacity>
            </View>

            <FlatList
                data={tasks}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Task name={item} onRemove={() => handleTaskRemove(item)}>
                    </Task>
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={tasks.length <= 0 && styles.list}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Adicione tarefas a sua lista de tarefas
                    </Text>
                )}
            />
        </View>
    )
}