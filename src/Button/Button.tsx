import React, { FC } from 'react';
// @ts-ignore
import { TouchableOpacity, View, Text } from 'react-native-web';
type ButtonProps = {
  title: string;
};
const Button: FC<ButtonProps> = ({ title }) => {
  return (
    <TouchableOpacity>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
