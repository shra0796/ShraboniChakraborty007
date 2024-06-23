import React, {Component} from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';
import {Input, FormControl} from 'native-base';
import {calcH, calcW} from '../../utils/Common';
import {Font} from '../../utils/font';
import {colorSet, mainColor} from '../../utils/Color';

const AppTextInput = ({
  label,
  placeholder,
  keyboardType,
  onChangeText,
  value,
  InputRightElement,
  InputLeftElement,
  onBlur,
  secureTextEntry,
  isRequired,
  ...otherProps
}) => {
  return (
    <>
      <FormControl isRequired={isRequired}>
        <FormControl.Label _text={styles.placeholderTitle}>
          {label}
        </FormControl.Label>
        <Input
          onBlur={onBlur}
          style={{padding: calcW(0.05)}}
          secureTextEntry={secureTextEntry}
          InputLeftElement={InputLeftElement}
          InputRightElement={InputRightElement}
          keyboardType={keyboardType}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          color={"#000"}
          {...otherProps}
        />
      </FormControl>
    </>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  placeholderTitle: {
    fontFamily: Font.Regular,
    fontSize: calcW(0.05),
    color: '#000',
  },
});
