import { Dimensions, Platform, StyleSheet } from 'react-native';
import WebSnackbar from './Snackbar';
import NativeSnackbar from './Snackbar.native';

export type SnackbarProps = {
  message: string;
  icon?: string;
};

const Snackbar = Platform.select({
  ios: NativeSnackbar,
  android: NativeSnackbar,
  default: WebSnackbar,
});
export default Snackbar;

export const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    backgroundColor: '#212121',
    borderRadius: 4,
    display: 'flex',
    flexDirection: 'row',
    height: 56,
    paddingHorizontal: 16,
    width: Dimensions.get('screen').width - 75,
  },
  icon: {
    color: '#FFFFFF',
    fontSize: 13,
  },
  iconWrapper: {
    alignItems: 'center',
    display: 'flex',
    height: 25,
    marginRight: 9,
    justifyContent: 'center',
    width: 25,
  },
  message: {
    color: '#FFFFFF',
    lineHeight: 15,
    fontSize: 13,
    fontWeight: '500',
  },
});
