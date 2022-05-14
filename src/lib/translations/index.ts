import i18n from 'sveltekit-i18n';
import type {Config} from 'sveltekit-i18n';
import lang from './lang.json';

const config: Config = {
    translations: {
        en: { lang },
        zh: { lang },
    },
    loaders: [
        {
            locale: 'en',
            key: 'nav',
            loader: async () => (await import('./en/nav.json')).default,
        },
        {
            locale: 'en',
            key: 'home',
            routes: ['', '/'],
            loader: async () => (await import('./en/home.json')).default,
        },
        {
            locale: 'en',
            key: 'portfolio',
            routes: ['/portfolio'],
            loader: async () => (await import('./en/portfolio.json')).default,
        },
        {
            locale: 'en',
            key: 'blog',
            routes: ['/blog'],
            loader: async () => (await import('./en/blog.json')).default,
        },
        {
            locale: 'en',
            key: 'error',
            routes: ['/error'],
            loader: async () => (await import('./en/error.json')).default,
        },
        {
            locale: 'zh',
            key: 'nav',
            loader: async () => (await import('./zh/nav.json')).default,
        },
        {
            locale: 'zh',
            key: 'home',
            routes: ['', '/'],
            loader: async () => (await import('./zh/home.json')).default,
        },
        {
            locale: 'zh',
            key: 'portfolio',
            routes: ['/portfolio'],
            loader: async () => (await import('./zh/portfolio.json')).default,
        },
        {
            locale: 'zh',
            key: 'blog',
            routes: ['/blog'],
            loader: async () => (await import('./zh/blog.json')).default,
        },
        {
            locale: 'zh',
            key: 'error',
            routes: ['/error'],
            loader: async () => (await import('./zh/error.json')).default,
        },
    ],
};

export const defaultLocale = 'en';

export const { t, locale, locales, loading, loadTranslations, translations } = new i18n(config);

// Translations logs
loading.subscribe(async ($loading) => {
    if ($loading) {
        await loading.toPromise();
    }
});
