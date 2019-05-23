import { StyleSheet } from 'react-native';

export const buttonStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 20,
    padding: 15,
    width: 150,
    height: 'auto',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: 'pink',
    fontWeight: 'bold',
  },
});
