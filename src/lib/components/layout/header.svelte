<script lang="ts">
    import {page} from "$app/stores";
    import theme$ from "../../stores/theme";
    import Logo from '$lib/components/_common/logo.svelte';
    import SwitchIcon from '$lib/components/_common/switch-icon.svelte';
    import HomeIcon from '$lib/components/_common/home-icon.svelte';
    import PortfolioIcon from '$lib/components/_common/portfolio-icon.svelte';
    import BlogIcon from '$lib/components/_common/blog-icon.svelte';
    import {Theme} from "../../types/theme.enum";

    let activeHome = $page.url.pathname === '/';
    let activePortfolio = $page.url.pathname === '/portfolio';
    let activeBlog = $page.url.pathname === '/blog';
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
      cursor: pointer;
    }
  }

  @media screen and (min-width: 744px) {
     header {
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
        <Logo />
        <span class="site-title">davischan.io</span>
    </a>
    <nav class="links">
        <ul>
            <li>
                <a href="/" class:active={activeHome} on:mouseover={() => hoverHome = true} on:mouseout={() => hoverHome = false}>
                    <HomeIcon active={activeHome} hover={hoverHome} />
                    <span>home</span>
                </a>
            </li>
            <li>
                <a href="/portfolio" class:active={activePortfolio} on:mouseover={() => hoverPortfolio = true} on:mouseout={() => hoverPortfolio = false}>
                    <PortfolioIcon active={activePortfolio} hover={hoverPortfolio} />
                    <span>portfolio</span>
                </a>
            </li>
            <li>
                <a href="/blog" class:active={activeBlog} on:mouseover={() => hoverBlog = true} on:mouseout={() => hoverBlog = false}>
                    <BlogIcon active={activeBlog} hover={hoverBlog} />
                    <span>blog</span>
                </a>
            </li>
        </ul>
    </nav>
    <button on:click={toggleTheme} class="theme-switch">
        <SwitchIcon />
    </button>
</header>