import {} from 'react';
import { compose } from 'react-apollo';

import { withTranslation } from 'react-i18next';
import { TravelDetail } from '../../components/Travel';

export default compose(
  withTranslation('travel screen'),
)(TravelDetail);
