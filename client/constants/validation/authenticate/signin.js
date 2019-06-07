import * as yup from 'yup';

import { emailRegExp } from '../../regex';

export const signInSchema = ({ t }) => yup.object().shape({
  email: yup
    .string(t('validation:string', { name: t('email') }))
    .required(t('validation:required', { name: t('email') }))
    .matches(emailRegExp, t('validation:email regexp', { name: t('email') })),
  password: yup
    .string(t('validation:string', { name: t('password') }))
    .required(t('validation:required', { name: t('password') }))
  ,
});
