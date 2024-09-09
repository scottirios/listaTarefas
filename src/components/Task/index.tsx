import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import FontAwesome from '@expo/vector-icons/FontAwesome';

type Props = {
  name: string;
  quantity: number;
  onRemove: () => void;
};

export function Task({ name, quantity, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {name} / Quantidade: {quantity}
      </Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
      <FontAwesome name="trash-o" size={20} color="#FFF" />        
      </TouchableOpacity>
    </View>
  );
}
