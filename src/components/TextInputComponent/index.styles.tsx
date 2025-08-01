import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  label: {
    color: "white",
    fontSize: 20
  },
  labelForInputFocus: {
    color: "#FADD21",
  },
  inputContainer: {
    flexDirection: "row",
  },
  input:{
    width:'100%',
    borderWidth:1,
    borderRadius:24,
    borderColor: "#FFFFFF",
    padding:24,
    color: "white",
    fontSize: 16,
  },
  inputFocus: {
    borderColor: "#FADD21",
  },
  inputTextArea: {
    height: 134
  }
});