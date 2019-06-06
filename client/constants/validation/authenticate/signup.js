import * as Yup from 'yup';

import { nameRegExp, passRegExp, emailRegExp } from '../../regex';

export const signUpSchema = ({ t }) => Yup.object().shape({
  username: Yup
    .string(t('string', { name: t('user name') }))
    .required(t('required', { name: t('user name') }))
    .min(6, t('min required', { name: t('user name'), min: 6 }))
    .matches(nameRegExp, t('name regexp', { name: t('username') })),
  password: Yup
    .string(t('string', { name: t('password') }))
    .required(t('required', { name: t('password') }))
    .matches(passRegExp, t('pass regxp', { name: t('password') })),
  confirmation: Yup
    .string(t('string', { name: t('confirmation') }))
    .oneOf([Yup.ref('password'), null], t('password match', { name: t('password') })),
  email: Yup
    .string(t('string', { name: t('email') }))
    .required(t('required', { name: t('email') }))
    .matches(emailRegExp, t('email regxp', { name: t('email') }))
  ,
});
