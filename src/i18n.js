/* i18n.js */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend) // Carrega traduções via http (se necessário)
  .use(LanguageDetector) // Detecta o idioma do usuário
  .use(initReactI18next) // Passa o i18n para o react-i18next
  .init({
    fallbackLng: 'en', // Idioma padrão
    debug: true, // Ativa o modo de depuração em desenvolvimento
    interpolation: {
      escapeValue: false, // Não é necessário para React
    },
    // Opções específicas do backend e detector de idiomas
  });

export default i18n;
