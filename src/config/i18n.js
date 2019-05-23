import { get } from 'lodash';
import { localesEn } from '../locales/en';

export const i18n = (name, language = 'en') => get(i18nText, `${language}.${name}`, {});

const i18nText = {
  en: {
    ...localesEn,
  }
}