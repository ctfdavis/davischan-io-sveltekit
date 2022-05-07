<script lang="ts">
    import Logo from '$lib/components/_common/logo.svelte';
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
        header a {
          @include p3;
          color: var(--app-text);
          text-decoration: none;
          span {
            display: inline-block;
            margin-top: 1.6rem;
          }
        }
      }
    }
</style>

<aside>
    <header>
        <a href="/">
            <Logo />
            <span>davischan.io</span>
        </a>
    </header>
</aside>