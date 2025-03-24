import { useTranslation as useI18nTranslation } from 'react-i18next';
import i18n from '../app/i18n/i18n';

/**
 * Custom hook to use i18n translations throughout the app
 * @returns Translation utilities and current language
 */
export const useTranslation = () => {
  const { t } = useI18nTranslation();

  /**
   * Change the app language
   * @param lang - Language code ('en' or 'es')
   */
  const changeLanguage = (lang: 'en' | 'es') => {
    i18n.changeLanguage(lang);
  };

  /**
   * Get the current language
   * @returns Current language code
   */
  const getCurrentLanguage = (): string => {
    return i18n.language;
  };

  return {
    t,
    i18n,
    changeLanguage,
    currentLanguage: getCurrentLanguage(),
  };
};

export default useTranslation;
