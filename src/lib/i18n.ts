import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import enTranslations from '../locale/en.json'
import ptTranslations from '../locale/pt.json'

const lang = navigator.language
const isPortuguese = lang === 'pt-BR' || lang === 'pt' || lang === 'pt-PT'

i18next.use(initReactI18next).init({
  resources: {
    en: {
      ...enTranslations,
    },
    pt: {
      ...ptTranslations,
    },
  },
  lng: isPortuguese ? 'pt' : 'en',
})

export default i18next
