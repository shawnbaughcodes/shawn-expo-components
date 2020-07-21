import React, { FC } from 'react';
// @ts-ignore
import { TouchableOpacity, View, Text } from '../utils/components';
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
