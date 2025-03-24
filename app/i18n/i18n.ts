import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Platform, NativeModules } from 'react-native';

// Import translations
import en from './locales/en.json';
import es from './locales/es.json';

// Get device language
const getDeviceLanguage = (): string => {
  try {
    // For iOS devices
    if (Platform.OS === 'ios') {
      const iosSettings = NativeModules.SettingsManager?.settings;
      if (iosSettings) {
        return (
          iosSettings.AppleLocale ||
          (iosSettings.AppleLanguages && iosSettings.AppleLanguages[0]) ||
          'en'
        );
      }
    } else if (NativeModules.I18nManager?.localeIdentifier) {
      // For Android devices
      return NativeModules.I18nManager.localeIdentifier;
    }
  } catch (error) {
    console.log('Error getting device language:', error);
  }

  // Default fallback
  return 'en';
};

// Check if the language is supported, otherwise default to English
const getSupportedLanguage = (language: string): string => {
  const supportedLanguages = ['en', 'es'];
  return supportedLanguages.includes(language.substring(0, 2))
    ? language.substring(0, 2)
    : 'en';
};

// Get the device language and check if it's supported
const deviceLanguage = getDeviceLanguage();
const language = getSupportedLanguage(deviceLanguage);

// Configure i18next
i18n.use(initReactI18next).init({
  compatibilityJSON: 'v4',
  resources: {
    en: {
      translation: en,
    },
    es: {
      translation: es,
    },
  },
  lng: language,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
