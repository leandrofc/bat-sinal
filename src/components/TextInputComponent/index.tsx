import React, { useState } from 'react';
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
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.label,
          isFocused && styles.labelForInputFocus
        ]}>
        {label}
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={[
            styles.input,
            isTextArea && styles.inputTextArea,
            isFocused && styles.inputFocus,
          ]}
          placeholder={placeholder}
          value={value}
          onChangeText={onChange}
          placeholderTextColor="#676767"
          multiline={isTextArea}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>
    </View>
  );
}