import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from "@expo/vector-icons/AntDesign";

export function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.containerBlue}>
                <Text style={styles.title}> Lista de Tarefas </Text>
                <FontAwesome5 name="tasks" size={24} color="#FFF" />
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