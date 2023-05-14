const NextI18Next = require('next-i18next').default

module.exports = new NextI18Next({
    defaultLanguage: 'en-CA',
    otherLanguages: ['fr-CA'],
    defaultNS: 'common',
    localeSubpaths: {
        'fr-CA': 'fr'
    },
  //for static translation
  localePath: 'public/static/locales',
})
