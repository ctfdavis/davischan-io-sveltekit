<script context="module" lang="ts">
    import type {Load} from "@sveltejs/kit";

    export const load: Load = async ({stuff}) => ({props: {url: stuff['route']}});
</script>

<script lang="ts">
    import Header from "$lib/components/layout/header.svelte";
    import Footer from "$lib/components/layout/footer.svelte";
    import Sidepanel from "$lib/components/layout/sidepanel.svelte";
    import PageTransition from "$lib/components/layout/page-transition.svelte";
    export let url;
</script>

<style lang="scss">
  main {
    min-height: 100%;
    margin-top: 3.2rem;
    padding-bottom: 8rem;
  }

  @media screen and (min-width: 744px) {
    main {
      margin-top: 9.2rem;
      padding-bottom: 4.8rem;
    }
  }

  @media screen and (min-width: 1200px) {
    main {
      margin-top: 2.8rem;
      padding-left: 30rem;
      padding-right: 3.2rem;
    }
  }
</style>

<Header/>
<Sidepanel/>
    <main>
        <PageTransition {url}>
            <slot/>
        </PageTransition>
    </main>
<Footer/>
