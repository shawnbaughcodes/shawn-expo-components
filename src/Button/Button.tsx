import React, { FC } from 'react';
import { ButtonProps, styles } from '.';
// @ts-ignore
import { TouchableOpacity, Text } from 'react-native-web';

const Button: FC<ButtonProps> = ({ title }) => {
  return (
    <TouchableOpacity style={styles.wrapper}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
