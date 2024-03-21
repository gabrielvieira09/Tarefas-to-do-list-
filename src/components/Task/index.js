import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default function Task({ isChecked, onPress, label }) {
  return (
    <TouchableOpacity style={styles.checkboxContainer} onPress={onPress}>
      <View style={[styles.checkbox, isChecked ? styles.checked : null]}></View>
      <Text style={[styles.label, isChecked ? styles.labelCompleted : null]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}
