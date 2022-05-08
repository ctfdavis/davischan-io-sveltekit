<script lang="ts">
    import {page} from "$app/stores";
    import HomeIcon from '$lib/components/_common/home-icon.svelte';
    import PortfolioIcon from '$lib/components/_common/portfolio-icon.svelte';
    import BlogIcon from '$lib/components/_common/blog-icon.svelte';

    $: activeHome = $page.url.pathname === '/';
    $: activePortfolio = $page.url.pathname === '/portfolio';
    $: activeBlog = $page.url.pathname === '/blog';
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
                <a href="/" class:active={activeHome}>
                    <HomeIcon active={activeHome} />
                    <span>home</span>
                </a>
            </li>
            <li>
                <a href="/portfolio" class:active={activePortfolio}>
                    <PortfolioIcon active={activePortfolio} />
                    <span>portfolio</span>
                </a>
            </li>
            <li>
                <a href="/blog" class:active={activeBlog}>
                    <BlogIcon active={activeBlog} />
                    <span>blog</span>
                </a>
            </li>
        </ul>
    </nav>
</footer>