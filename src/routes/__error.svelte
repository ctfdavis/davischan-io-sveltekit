<script context="module" lang="ts">
    import {loadTranslations} from '$lib/translations';
    import type {Load} from "@sveltejs/kit";

    export const load: Load = async ({stuff, status, error}) => {
        await loadTranslations(stuff['lang'], '/error');
        return {
            props: {
                message: error.message,
                status
            }
        };
    }
</script>

<script lang="ts">
    import NotFoundScreen
        from "../lib/components/error/not-found-screen.svelte";
    import ErrorScreen
        from "../lib/components/error/error-screen.svelte";

    export let message;
    export let status;
</script>

<style lang="scss">
  section {
    height: 100%;
  }
</style>

<svelte:head>
    <title>Oops | davischan.io</title>
</svelte:head>

<section>
    {#if status === 404}
        <NotFoundScreen/>
    {:else}
        <ErrorScreen {message} {status}/>
    {/if}
</section>
