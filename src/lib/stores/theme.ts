import {writable} from 'svelte/store';
import {browser} from "$app/env";
import {Theme} from "../types/theme.enum";

const currTheme = browser && localStorage.getItem('theme') === Theme.DARK ? Theme.DARK : Theme.LIGHT;

const theme$ = writable(currTheme);

theme$.subscribe((theme) => {
    if (theme === Theme.DARK) {
        browser && document.body.setAttribute('data-theme', 'dark');
        browser && localStorage.setItem('theme', Theme.DARK);
    } else {
        browser && document.body.setAttribute('data-theme', 'light');
        browser && localStorage.setItem('theme', Theme.LIGHT);
    }
})

export default theme$;