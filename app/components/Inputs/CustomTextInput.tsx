import { StyleSheet, TextInput, TextInputProps } from "react-native";

const CustomTextInput = (props: TextInputProps) => {
  return <TextInput style={styles.input} {...props} />;
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
});

export default CustomTextInput;
