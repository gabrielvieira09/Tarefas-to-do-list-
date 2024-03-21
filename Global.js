import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 48,
    marginHorizontal: 16,
  },
  input: {
    height: 60,
    width: "100%",
    borderColor: "gray",
    fontSize: 16,
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 12,
    borderRadius: 6,
  },
  listContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 24,
  },
});

export default styles;
