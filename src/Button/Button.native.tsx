import { ButtonProps, styles } from '.';
import React, { FC } from 'react';
// @ts-ignore
import { TouchableOpacity, View, Text } from 'react-native';

const Button: FC<ButtonProps> = ({ title }) => {
  return (
    <TouchableOpacity style={styles.wrapper}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
