import { color } from '../../../styles/theme';

const buttonSignIn = {
  width: '60%',
  backgroundColor: color.cinnabar,
  borderWidth: 0,
  marginBottom: 15,
  padding: 7,
  top: '4%',
};

export const styleButton = {
  buttonSignIn,
  buttonSignUp: {
    ...buttonSignIn,
    backgroundColor: color.dodgerBlue,
  },
  buttonSubmit: {
    ...buttonSignIn,
    backgroundColor: color.frenchRose,
  },
  buttonText: {
    fontSize: 20,
    color: color.white,
  },
};
