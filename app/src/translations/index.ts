import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import { ptBR, enUS } from 'date-fns/locale';

import en from './en.json';
import pt from './pt.json';

const translations = { en, pt };

const { languageTag } = RNLocalize.findBestAvailableLanguage(
  Object.keys(translations),
) || { languageTag: 'pt' };

i18n.locale = languageTag;
i18n.fallbacks = true;
i18n.translations = translations;

export default i18n;

export const dateLocalize = () => {
  const { languageTag: locale } = RNLocalize.findBestAvailableLanguage([
    'en',
    'pt',
  ]) || { languageTag: 'pt' };

  return locale === 'en' ? enUS : ptBR;
};
