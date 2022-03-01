import { defaultLanguage } from '~~/plugins/i18n';

// , () => localStorage.getItem('Language') || ''
export const useLanguage = () => useState('Language', () => defaultLanguage);
