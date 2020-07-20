import React, { FC } from 'react';
// @ts-ignore
import { TouchableOpacity, View, Text } from '../utils/components';

const Button: FC<Axis.Button> = ({ title }) => {
  return (
    <TouchableOpacity>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
