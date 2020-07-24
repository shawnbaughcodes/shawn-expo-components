import { Platform, StyleSheet } from 'react-native';
import NativeButton from './Button.native';
import WebButton from './Button';
const Button = (Platform.OS === 'web' ? WebButton : NativeButton) as React.FC<
  ButtonProps
>;
export default Button;
export const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#353535',
    borderRadius: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 47,
  },
  text: {
    paddingHorizontal: 20,
    color: '#ffffff',
    lineHeight: 15,
    fontSize: 13,
    fontWeight: '500',
  },
});
export type ButtonProps = {
  title: string;
  type?: string;
};
