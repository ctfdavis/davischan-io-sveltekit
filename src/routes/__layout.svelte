<script lang="ts">
    import Header from "$lib/components/layout/header.svelte";
    import Footer from "$lib/components/layout/footer.svelte";
    import Sidepanel from "$lib/components/layout/sidepanel.svelte";
</script>

<Header/>
<Sidepanel/>
<slot/>
<Footer/>