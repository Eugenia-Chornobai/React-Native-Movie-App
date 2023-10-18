import { StyleSheet, View } from "react-native";
import { Input } from "@rneui/themed";
import { AntDesign } from "@expo/vector-icons";

const Form = (props) => {
  const { onInputChange } = props;

  return (
    <View style={styles.formContainer}>
      <Input
        required
        label="Search Movie / TV Show Name"
        placeholder="e.g. James Bond, CSI"
        onChangeText={(value) => onInputChange(value)}
        leftIcon={<AntDesign name="search1" size={24} color="gray" />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    marginTop: 20,
  },
  formItems: {
    display: "inline-flex",
  },
  input: {
    width: "65%",
  },
});

export default Form;
