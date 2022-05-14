import {readable} from 'svelte/store';
import {page} from "$app/stores";
import {Links} from "../types/links.enum";
import {locale} from "../translations";

const activeLink$ = readable<Links | undefined>(undefined, (set) => {
    let currentLocale: string;
    locale.subscribe(l => currentLocale = l);
    page.subscribe((o) => {
        if (o.url.pathname === `/${currentLocale}`) set(Links.home);
        else if (o.url.pathname === `/${currentLocale}/portfolio`) set(Links.portfolio);
        else if (o.url.pathname === `/${currentLocale}/blog`) set(Links.blog);
        else set(undefined);
    })
});

export default activeLink$;
