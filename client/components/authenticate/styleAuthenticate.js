import { color } from '../../styles/theme';

export const styleAuthenticate = {
  backgroundImg: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  styleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 0,
    borderBottomWidth: 2,
    borderRadius: 0,
    backgroundColor: 'transparent',
    borderColor: color.regentGray,
    color: color.white,
    fontSize: 25,
    marginBottom: '5%',
    textAlign: 'center',
  },
  firstInput: {
    marginTop: '7%',
  },
  lastInput: {
    marginBottom: '12%',
  },
  buttonSignIn: {
    width: '50%',
    backgroundColor: color.roseBud,
    borderWidth: 0,
    marginBottom: 10,
    padding: 7,
  },
  buttonSignUp: {
    width: '50%',
    backgroundColor: color.blueViolet,
    borderWidth: 0,
    padding: 7,
  },
  buttonText: {
    fontSize: 20,
    color: color.white,
  },
  placeholderTextColor: color.white,
  selectionColor: color.nepal,
};
