import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import useTranslation from '@/hooks/useTranslation';

interface LanguageOption {
  code: 'en' | 'es';
  label: string;
}

const LanguageSwitcher: React.FC = () => {
  const { changeLanguage, currentLanguage } = useTranslation();

  const languages: LanguageOption[] = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Language / Idioma</Text>
      <View style={styles.options}>
        {languages.map((lang) => (
          <TouchableOpacity
            key={lang.code}
            style={[
              styles.option,
              currentLanguage === lang.code && styles.selectedOption,
            ]}
            onPress={() => changeLanguage(lang.code)}
          >
            <Text
              style={[
                styles.optionText,
                currentLanguage === lang.code && styles.selectedOptionText,
              ]}
            >
              {lang.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 12,
    fontFamily: 'Inter-Bold',
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  option: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    backgroundColor: '#f1f5f9',
    flex: 1,
    margin: 4,
    alignItems: 'center',
  },
  selectedOption: {
    backgroundColor: '#3b82f6',
  },
  optionText: {
    color: '#1e293b',
    fontSize: 14,
    fontFamily: 'Inter-Regular',
  },
  selectedOptionText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontFamily: 'Inter-Bold',
  },
});

const LanguageSwitcherExport = LanguageSwitcher;
export default LanguageSwitcherExport;
