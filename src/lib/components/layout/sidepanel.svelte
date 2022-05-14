<script lang="ts">
    import theme$ from "$lib/stores/theme";
    import activeLink$ from '$lib/stores/active-link';
    import Logo from '$lib/components/_common/logo.svelte';
    import HomeIcon from '$lib/components/_common/home-icon.svelte';
    import PortfolioIcon from '$lib/components/_common/portfolio-icon.svelte';
    import BlogIcon from '$lib/components/_common/blog-icon.svelte';
    import SwitchIcon from '$lib/components/_common/switch-icon.svelte';
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
    aside {
      display: none;
    }
    @media screen and (min-width: 1200px) {
      aside {
        position: fixed;
        top: 3.2rem;
        left: 6.7rem;
        display: block;
        height: 100%;
        width: 11rem;
        overflow-y: auto;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
        &::-webkit-scrollbar {
          display: none;
        }
        header a {
          @include p3;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: var(--app-text);
          text-decoration: none;
          span {
            display: inline-block;
            margin-top: 1.6rem;
          }
        }
        nav {
          position: absolute;
          top: 17rem;
          left: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 10.6rem;
          height: 52.4rem;
          padding: 4rem 0;
          border-radius: 2rem;
          background: var(--app-panel-bg);
          box-shadow: var(--app-panel-shadow);
          ul {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-left: 0;
            list-style: none;
            li {
              display: flex;
              flex-direction: column;
              align-items: center;
              a {
                @include p5;
                color: var(--app-text);
                text-align: center;
                text-decoration: none;
                &.active {
                  color: var(--app-primary);
                }

                &:hover {
                  color: var(--app-secondary) !important;
                }
              }
            }
            li:not(:first-child) {
              margin-top: 7.4rem;
            }
          }
          .theme-switch {
            margin-top: 8.2rem;
            background: transparent;
            border: none;
          }
        }
        .spacer {
          position: absolute;
          top: 72rem;
          left: 0;
          width: 1px;
          height: 3.2rem;
        }
      }
    }
</style>

<aside>
    <header>
        <a href="/{$locale}">
            <Logo />
            <span>davischan.io</span>
        </a>
    </header>
    <nav>
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
        <button on:click={toggleTheme} class="theme-switch">
            <SwitchIcon/>
        </button>
    </nav>
    <div class="spacer"></div>
</aside>
