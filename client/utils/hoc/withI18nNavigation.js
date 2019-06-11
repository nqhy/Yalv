import i18n from 'i18next';

export const withi18nNavigation = (func, key) => () => {
  const t = (name) => i18n.t(`${key}:${name}`);
  return func({ t });
};
