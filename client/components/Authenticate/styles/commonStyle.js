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
  title: {
    color: color.white,
    width: '100%',
    fontSize: 75,
    top: '-5%',
    left: '5%',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  line: {
    width: '75%',
    height: 5,
    top: '-4%',
    left: '-5%',
    backgroundColor: color.lightGreenishBlue,
  },
  subTitle: {
    color: color.charade,
    fontSize: 25,
    top: '-3%',
    left: '10%',
    fontWeight: 'bold',
  },
});
