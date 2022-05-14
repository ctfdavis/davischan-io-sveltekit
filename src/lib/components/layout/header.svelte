<script lang="ts">
    import theme$ from "$lib/stores/theme";
    import activeLink$ from '$lib/stores/active-link';
    import Logo from '$lib/components/_common/logo.svelte';
    import SwitchIcon from '$lib/components/_common/switch-icon.svelte';
    import HomeIcon from '$lib/components/_common/home-icon.svelte';
    import PortfolioIcon from '$lib/components/_common/portfolio-icon.svelte';
    import BlogIcon from '$lib/components/_common/blog-icon.svelte';
    import {Theme} from "$lib/types/theme.enum";
    import {Links} from "$lib/types/links.enum";
    import { t, locale } from '$lib/translations';

    let hoverHome = false;
    let hoverPortfolio = false;
    let hoverBlog = false;

    const toggleTheme = () => {
        theme$.update(theme => theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
    }

</script>

<style lang="scss">
  header {
    @include desktop-hide;
    display: flex;
    max-width: 68rem;
    padding: 1.6rem 4rem;
    margin: 0 auto;
    border-bottom-left-radius: 10rem;
    border-bottom-right-radius: 10rem;
    background: var(--app-panel-bg);
    box-shadow: var(--app-header-shadow);

    a {
      display: flex;
      text-decoration: none;
      color: var(--app-text);
    }

    .site-title {
      @include p7;
      margin-left: 0.9rem;
    }

    .links {
      display: none;
    }

    .theme-switch {
      margin-left: auto;
      border: none;
      background: none;
    }
  }

  @media screen and (min-width: 744px) {
    header {
      position: fixed;
      top: 0;
      left: 50%;
      width: 100%;
      transform: translateX(-50%);
      z-index: 10;
      .site-title {
        @include p5;
      }

      .links {
        display: block;
        margin-left: 11.8rem;

        ul {
          display: flex;
          list-style: none;

          li:not(:first-child) {
            margin-left: 2.1rem;
          }

          li a {
            display: flex;
            align-items: center;

            &.active {
              color: var(--app-primary);
            }

            &:hover {
              color: var(--app-secondary) !important;
            }

            span {
              @include p9;
              margin-left: 0.6rem;
            }
          }
        }
      }
    }
  }
</style>

<header>
    <a href="/">
        <Logo/>
        <span class="site-title">davischan.io</span>
    </a>
    <nav class="links">
        <ul>
            <li>
                <a href="/{$locale}"
                   class:active={$activeLink$ === Links.home}
                   on:mouseover={() => hoverHome = true}
                   on:focus={() => false}
                   on:mouseout={() => hoverHome = false}
                   on:blur={() => false}
                >
                    <HomeIcon active={$activeLink$ === Links.home} hover={hoverHome}/>
                    <span>{$t('nav.home')}</span>
                </a>
            </li>
            <li>
                <a href="/{$locale}/portfolio"
                   class:active={$activeLink$ === Links.portfolio}
                   on:mouseover={() => hoverPortfolio = true}
                   on:focus={() => false}
                   on:mouseout={() => hoverPortfolio = false}
                   on:blur={() => false}
                >
                    <PortfolioIcon active={$activeLink$ === Links.portfolio} hover={hoverPortfolio}/>
                    <span>{$t('nav.portfolio')}</span>
                </a>
            </li>
            <li>
                <a href="/{$locale}/blog"
                   class:active={$activeLink$ === Links.blog}
                   on:mouseover={() => hoverBlog = true}
                   on:focus={() => false}
                   on:mouseout={() => hoverBlog = false}
                   on:blur={() => false}
                >
                    <BlogIcon active={$activeLink$ === Links.blog} hover={hoverBlog}/>
                    <span>{$t('nav.blog')}</span>
                </a>
            </li>
        </ul>
    </nav>
    <button on:click={toggleTheme} class="theme-switch">
        <SwitchIcon/>
    </button>
</header>
