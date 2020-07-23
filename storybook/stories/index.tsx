import React from 'react';
import { StyleSheet, View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Button from '../../src/Button';
import Snackbar from '../../src/Snackbar';
import Welcome from './Welcome';

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});

storiesOf('Welcome', module).add('to Storybook', () => <Welcome />);

storiesOf('Button', module).add('default', () => (
  <View style={styles.wrapper}>
    <Button title="something cool" />
  </View>
));

storiesOf('Snackbar', module).add('default', () => (
  <View style={styles.wrapper}>
    <Snackbar message="Some sort of message" />
  </View>
));
