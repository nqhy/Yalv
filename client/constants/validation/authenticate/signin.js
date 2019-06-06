import * as yup from 'yup';

export const signInSchema = ({ t }) => yup.object().shape({
  username: yup
    .string(t('string', { name: t('user name') }))
    .required(t('required', { name: t('user name') })),
  password: yup
    .string(t('string', { name: t('password') }))
    .required(t('required', { name: t('password') }))
  ,
});
