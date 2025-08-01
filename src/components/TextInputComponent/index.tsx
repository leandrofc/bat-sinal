import React, { useState, forwardRef } from 'react';
import { TextInput, View, Text } from 'react-native';
import { styles } from './index.styles';
import type { TextInputComponentProps } from './index.types';

export const TextInputComponent = forwardRef<TextInput, TextInputComponentProps>(
  (
    {
      label,
      onChangeText,
      placeholder,
      value,
      onSubmitEditing,
      returnKeyType,
      isTextArea = false,
      blurOnSubmit,
      keyboardType,
      onFocus,
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <View style={styles.container}>
        <Text
          style={[
            styles.label,
            isFocused && styles.labelForInputFocus,
          ]}
        >
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
            onChangeText={onChangeText}
            placeholderTextColor="#676767"
            multiline={isTextArea}
            onFocus={(e) => {
              setIsFocused(true);
              onFocus?.(e);
            }}
            onBlur={() => setIsFocused(false)}
            onSubmitEditing={onSubmitEditing}
            returnKeyType={returnKeyType}
            ref={ref}
            blurOnSubmit={blurOnSubmit}
            keyboardType={keyboardType}
          />
        </View>
      </View>
    );
  }
);
