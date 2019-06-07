import * as Yup from 'yup';

import { nameRegExp, passRegExp, emailRegExp } from '../../regex';

export const signUpSchema = ({ t }) => Yup.object().shape({
  username: Yup
    .string(t('validation:string', { name: t('username') }))
    .required(t('validation:required', { name: t('username') }))
    .min(6, t('validation:min required', { name: t('username'), min: 6 }))
    .matches(nameRegExp, t('validation:name regexp', { name: t('username') })),
  password: Yup
    .string(t('validation:string', { name: t('password') }))
    .required(t('validation:required', { name: t('password') }))
    .matches(passRegExp, t('validation:pass regexp', { name: t('password') })),
  confirmation: Yup
    .string(t('validation:string', { name: t('confirmation') }))
    .oneOf([Yup.ref('validation:password'), null], t('password match', { name: t('password') })),
  email: Yup
    .string(t('validation:string', { name: t('email') }))
    .required(t('validation:required', { name: t('email') }))
    .matches(emailRegExp, t('validation:email regexp', { name: t('email') }))
  ,
});
