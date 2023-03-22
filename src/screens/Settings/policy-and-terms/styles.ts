import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { handleSwitchTheme } from "../../../../provider/themeSlice";
import colors from "../../../config/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  ["doc-text"]: {
    fontSize: 12,
    lineHeight: 20,
  },
  ["terms-container"]: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  ol: {
    borderRadius: 100 / 2,
    height: 3,
    width: 3,
    backgroundColor: "white",
    marginTop: 8,
    marginRight: 5,
    marginLeft: 15,
  },
  btn: {
    backgroundColor: colors.primary,
    paddingVertical: 20,
    marginVertical: 20,
    borderRadius: 8,
  },
  btnText: { textAlign: "center", color: "white" },
  ["number-container"]: { flexDirection: "row", alignItems: "flex-start" },
  ["unorder-container"]: { flexDirection: "row" },
  number: { marginRight: 5, color: "white", fontSize: 12, margin: 1 },
  heading: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    marginBottom: 8,
  },
});
