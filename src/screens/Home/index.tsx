import { Text, View } from "react-native";
import { styles } from "./styles";

export function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.containerBlue}>
                <Text style={styles.title}> Lista de Tarefas </Text>
            </View>
        </View>
    )
}