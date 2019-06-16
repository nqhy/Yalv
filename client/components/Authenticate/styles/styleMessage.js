import { color } from '../../../styles/theme';

export const styleMessage = {
  container: {
    width: 'auto',
    height: 22,
    marginBottom: 10,
  },
  textError: {
    color: color.unmellowYellow,
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: 'normal',
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
