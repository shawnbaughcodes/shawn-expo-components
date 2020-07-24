import React, { FC } from 'react';
import { ButtonProps, styles } from '.';
import { TouchableOpacity, Text } from 'react-native';

const Button: FC<ButtonProps> = ({ title }) => {
  return (
    <TouchableOpacity style={styles.wrapper}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
