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
  boxTextError: {
    color: color.illusion,
    padding: '2%',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  viewError: {
    width: 'auto',
    height: 34,
    backgroundColor: color.charade,
    bottom: '-10%',
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
