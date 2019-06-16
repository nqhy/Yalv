import { color } from '../../../styles/theme';

export const styleMessage = {
  container: {
    width: 'auto',
    height: 15,
    marginBottom: 10,
  },
  textError: {
    color: color.redOrange,
    fontSize: 14,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  TextError: {
    color: color.illusion,
    padding: '2%',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  BoxError: {
    width: 'auto',
    height: 34,
    backgroundColor: color.black,
    bottom: '-10%',
  },
  BoxSuccess: {
    width: 'auto',
    height: 34,
    backgroundColor: color.black,
    bottom: '-10%',
  },
  TextSuccess: {
    color: color.lightGreenishBlue,
    padding: '2%',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  hiddenBox: {
    width: 'auto',
    height: 34,
    backgroundColor: 'transparent',
    bottom: '-10%',
  },
  viewSuccess: {
    backgroundColor: color.white,
  },
};
