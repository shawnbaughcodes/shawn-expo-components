import registerRootComponent from 'expo/build/launch/registerRootComponent';
import React from 'react';
import StorybookRootUI from './storybook';

registerRootComponent(function App() {
  return <StorybookRootUI />;
});

export { default as Button } from './src/Button';
export { default as Snackbar } from './src/Snackbar';
