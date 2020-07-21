import { Platform } from 'react-native';
import NativeButton from './Button.native';
import WebButton from './Button';

export default Platform.OS === 'web' ? WebButton : NativeButton;
