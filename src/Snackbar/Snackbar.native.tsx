import React from 'react';
import { Text, View } from 'react-native';
import { styles, SnackbarProps } from '.';

const Snackbar = ({ message, icon }: SnackbarProps) => {
  return (
    <View style={styles.wrapper}>
      {icon && (
        <View style={styles.iconWrapper}>
          <Text style={styles.icon}>•</Text>
        </View>
      )}
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

export default Snackbar;
