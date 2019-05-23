import { get } from 'lodash';
import { localesEn } from '../locales/en';

const i18nText = {
  en: {
    ...localesEn,
  },
};

export const i18n = (name, language = 'en') => get(i18nText, `${language}.${name}`, {});
