/**
 * Internationalization constants
 * Available languages and display labels
 */

export type SupportedLanguage = 'en' | 'fr' | 'zh_CN';

export const AVAILABLE_LANGUAGES = [
  { value: 'en' as const, label: 'English', nativeLabel: 'English' },
  { value: 'fr' as const, label: 'French', nativeLabel: 'Français' },
  { value: 'zh_CN' as const, label: '简体中文', nativeLabel: '简体中文' }
] as const;

export const DEFAULT_LANGUAGE: SupportedLanguage = 'en';
