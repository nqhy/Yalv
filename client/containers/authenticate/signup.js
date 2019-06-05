import { graphql, compose } from 'react-apollo';
import { withTranslation } from 'react-i18next';
import { withChangeLanguage } from '../../utils/hoc';

import { SignUpComponent } from '../../components/authenticate';
import { UserMutation } from '../../graphql/mutations/user';

export const SignUpScreen = compose(
  withTranslation('authenticate'),
  graphql(UserMutation.createUser),
  withChangeLanguage,
)(SignUpComponent);
