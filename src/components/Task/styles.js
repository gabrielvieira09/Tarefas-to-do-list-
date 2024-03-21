import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // checkboxContainer: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   width: "100%",
  //   marginBottom: 5,
  // },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    marginTop: 12,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 6,
    width: "100%",
  },
  checkbox: {
    width: 20,
    height: 20,
    backgroundColor: "#fff",
    borderColor: "#000",
    borderRadius: 50,
    borderWidth: 1,
    marginRight: 10,
  },
  checked: {
    backgroundColor: "#000",
  },
  label: {
    fontSize: 16,
  },
  labelCompleted: {
    fontSize: 16,
    textDecorationLine: "line-through",
    color: "#d3d3d3",
  },
});

export default styles;
