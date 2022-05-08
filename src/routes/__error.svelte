<script context="module" lang="ts">
    export function load({error, status}) {
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

<svelte:head>
    <title>Not Found | davischan.io</title>
</svelte:head>

{#if status === 404}
    <NotFoundScreen/>
{:else}
    <ErrorScreen {message} {status}/>
{/if}
