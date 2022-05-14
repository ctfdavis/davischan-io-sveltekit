<script context="module" lang="ts">
    import {loadTranslations} from '$lib/translations';
    import type {Load} from "@sveltejs/kit";

    export const load: Load = async ({url}) => {
        const {pathname} = url;

        const lang = `${pathname.match(/[^/]+?(?=\/|$)/) || ''}`;

        const route = pathname.replace(new RegExp(`^/${lang}`), '');

        await loadTranslations(lang, route);

        return {stuff: {route, lang}, props: {route}};
    }
</script>

<script lang="ts">
    import {locale} from "$lib/translations";
    export let route;
</script>

<style lang="scss">
  .lang {
    @include p9;
    position: absolute;
    top: 1.78rem;
    right: 25%;

    a {
      color: var(--app-text);
      text-decoration: none;

      &.active {
        color: var(--app-primary);
      }

      &:hover {
        color: var(--app-secondary);
      }
    }
  }

  @media screen and (min-width: 744px) {
    .lang {
      top: 6.4rem;
      right: 10%;
    }
  }

  @media screen and (min-width: 916px) {
    .lang {
      top: 1.4rem;
      right: 2.6rem;
    }
  }
</style>

<div class="lang">
    <a href="/zh{route}" class:active={$locale === 'zh'}>中</a>
    |
    <a href="/en{route}" class:active={$locale === 'en'}>ENG</a>
</div>
<slot/>
