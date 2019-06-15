import { color } from '../../../styles/theme';

export const commonStyle = ({
  backgroundImg: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: color.black,
  },
  styleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: color.white,
    fontSize: 70,
    top: '10%',
    left: '5%',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  line: {
    width: '75%',
    height: 5,
    top: '11%',
    left: '7%',
    backgroundColor: color.lightGreenishBlue,
  },
  subTitle: {
    color: color.white,
    fontSize: 27,
    top: '12%',
    left: '17%',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});
