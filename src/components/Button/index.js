import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

export default function Button({ onPress, title, selected }) {
  return (
    <TouchableOpacity style={[styles.container, selected && styles.selected]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
