import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Button from '../../src/Button';
import Welcome from './Welcome';
import { View } from '../../src/utils/components';

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});

storiesOf('Welcome', module).add('to Storybook', () => (
  <View style={styles.wrapper}>
    <Welcome showApp={linkTo('Button')} />
  </View>
));

storiesOf('Button', module).add('default', () => (
  <View style={styles.wrapper}>
    <Button title="something cool" />
  </View>
));
