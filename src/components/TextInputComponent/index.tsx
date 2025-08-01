import React from 'react';
import {TextInput, View, Text } from 'react-native';
import { styles } from './index.styles';
import { TextInputComponentProps } from './index.types';

  
export function TextInputComponent({
  label,
  onChange,
  placeholder,
  value,
  isTextArea = false,
} : TextInputComponentProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {label}
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, isTextArea && { height: 134 }]}
          placeholder={placeholder}
          value={value}
          onChangeText={onChange}
          placeholderTextColor="#676767"
          multiline={true}
        />
      </View>
    </View>
  );
}