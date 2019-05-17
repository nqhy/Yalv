import { get } from 'lodash';
import { localesEn } from '../locales/en';

export const i18n = (name, language = 'en') =>get(i18nText, `${name}.{language}`, {});

const i18nText = {
  en: {
    ...localesEn,
  }
}