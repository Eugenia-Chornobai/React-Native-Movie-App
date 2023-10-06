import { StyleSheet, View } from 'react-native';
import { Input, Button, Icon } from '@rneui/themed';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react'

const Form = (props) => {
  const { onInputChange } = props;


  // const onInputChange = (value) => {
  //   console.log(value);
  //   setQuery(value);
  // }

  return (
    <View style={styles.formContainer}>
        <Input
          required
          label='Search Movie / TV Show Name'
          placeholder="e.g. James Bond, CSI"
          onChangeText={value => onInputChange(value)}
          leftIcon={
            <AntDesign name="search1" size={24} color="gray" />
          }
        />
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    marginTop: 20,
  },
  formItems: {
    display: 'inline-flex'
  },
  input: {
    width: '65%'
  }
});

export default Form;