import { compose } from 'react-apollo';
import { withTranslation } from 'react-i18next';
import { HomeScreenComponent } from '../../components/Home';
import { withGraphQlHome } from './withGraphQlHome';
import { withParseCategoryData } from './withParseCategoryData';

export default compose(
  withTranslation('home screen'),
  withGraphQlHome,
  withParseCategoryData,
)(HomeScreenComponent);
