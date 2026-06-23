import { defineConfig } from 'vitepress';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/el-camino',
  vite: {
    plugins: [tailwindcss()],
  },
  lang: 'fr-FR',
  title: 'El Camino',
  description: 'Apprendre l\'espagnol depuis zéro, pas à pas.',

  themeConfig: {
    nav: [
      { text: 'Accueil', link: '/' },
    ],

    sidebar: [
      {
        text: 'Module 1 — Les fondations',
        link: '/module-1/',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/module-1/' },
          { text: 'Alphabet et prononciation', link: '/module-1/alphabet-pronunciation' },
          { text: 'Les chiffres et l\'heure', link: '/module-1/numbers-time' },
          { text: 'Le genre et les articles', link: '/module-1/gender-articles' },
          { text: 'Se présenter', link: '/module-1/introducing-yourself' },
        ],
      },
      {
        text: 'Module 2 — Construire une phrase',
        link: '/module-2/',
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/module-2/' },
          { text: 'Pronoms et ordre des mots', link: '/module-2/pronouns-word-order' },
          { text: 'Le présent de l\'indicatif', link: '/module-2/present-tense' },
          { text: 'Ser vs Estar', link: '/module-2/ser-vs-estar' },
          { text: 'La négation et les questions', link: '/module-2/negation-questions' },
        ],
      },
      {
        text: 'Module 3 — Le quotidien',
        link: '/module-3/',
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/module-3/' },
          { text: 'Verbes irréguliers courants', link: '/module-3/irregular-verbs' },
          { text: 'Les adjectifs', link: '/module-3/adjectives' },
          { text: 'Vocabulaire du quotidien', link: '/module-3/everyday-vocabulary' },
          { text: 'Demander et comprendre', link: '/module-3/asking-understanding' },
        ],
      },
      {
        text: 'Module 4 — Parler du temps',
        link: '/module-4/',
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/module-4/' },
          { text: 'Le pretérito indefinido', link: '/module-4/preterite' },
          { text: 'Le pretérito imperfecto', link: '/module-4/imperfect' },
          { text: 'Le futur', link: '/module-4/future' },
          { text: 'Expressions de temps', link: '/module-4/time-expressions' },
        ],
      },
      {
        text: 'Module 5 — Aller plus loin',
        link: '/module-5/',
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/module-5/' },
          { text: 'Le subjonctif', link: '/module-5/subjunctive' },
          { text: 'Les pronoms COD et COI', link: '/module-5/object-pronouns' },
          { text: 'Connecteurs et subordonnées', link: '/module-5/connectors-clauses' },
          { text: 'Le conditionnel', link: '/module-5/conditional' },
        ],
      },
    ],

    socialLinks: [],
  },
});