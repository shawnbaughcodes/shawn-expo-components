import React, { FC } from 'react';
// @ts-ignore
import { Text, View } from 'react-native-web';
import { SnackbarProps, styles } from '.';

const Snackbar: FC<SnackbarProps> = ({ message, icon }) => {
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
