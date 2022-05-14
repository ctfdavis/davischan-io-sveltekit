<script lang="ts">
    import Header from "$lib/components/layout/header.svelte";
    import Footer from "$lib/components/layout/footer.svelte";
    import Sidepanel from "$lib/components/layout/sidepanel.svelte";
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

<Header />
<Sidepanel />
<main>
    <slot/>
</main>
<Footer />
