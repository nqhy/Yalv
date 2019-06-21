import { color } from '../../../styles/theme';

export const commonStyle = ({
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
  containerLogo: {
    width: '85%',
    backgroundColor: color.white,
    padding: '5%',
  },
  title: {
    color: color.black,
    width: '100%',
    fontSize: 75,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  line: {
    width: '75%',
    height: 5,
    backgroundColor: color.frenchRose,
  },
  subTitle: {
    color: color.black,
    fontSize: 25,
    left: '7%',
    fontWeight: 'bold',
  },
});
