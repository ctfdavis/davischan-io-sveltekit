<script lang="ts">
    import activeLink$ from '$lib/stores/active-link';
    import HomeIcon from '$lib/components/_common/home-icon.svelte';
    import PortfolioIcon from '$lib/components/_common/portfolio-icon.svelte';
    import BlogIcon from '$lib/components/_common/blog-icon.svelte';
    import {Links} from "$lib/types/links.enum";
    import { t, locale } from '$lib/translations';

</script>

<style lang="scss">
    footer {
      @include phone-only;
      position: fixed;
      left: 0;
      bottom: 0;
      height: 6.2rem;
      width: 100%;
      border-top-left-radius: 4.5rem;
      border-top-right-radius: 4.5rem;
      background: var(--app-panel-bg);
      box-shadow: var(--app-footer-shadow);
      z-index: 10;
      .links {
        ul {
          display: flex;
          list-style: none;
          margin-left: 0;
          padding-left: 0;
          padding-top: 0.8rem;
          justify-content: space-around;
          align-items: center;
          li a {
            display: inline-block;
            height: 4.2rem;
            width: 5.8rem;
            color: var(--app-text);
            text-align: center;
            text-decoration: none;
            &.active {
              color: var(--app-primary);
            }
          }
        }
      }
    }
</style>

<footer>
    <nav class="links">
        <ul>
            <li>
                <a href="/{$locale}" class:active={$activeLink$ === Links.home}>
                    <HomeIcon active={$activeLink$ === Links.home} />
                    <span>{$t('nav.home')}</span>
                </a>
            </li>
            <li>
                <a href="/{$locale}/portfolio" class:active={$activeLink$ === Links.portfolio}>
                    <PortfolioIcon active={$activeLink$ === Links.portfolio} />
                    <span>{$t('nav.portfolio')}</span>
                </a>
            </li>
            <li>
                <a href="/{$locale}/blog" class:active={$activeLink$ === Links.blog}>
                    <BlogIcon active={$activeLink$ === Links.blog} />
                    <span>{$t('nav.blog')}</span>
                </a>
            </li>
        </ul>
    </nav>
</footer>
