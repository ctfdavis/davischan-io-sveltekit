<script lang="ts">
    export let vm;

    $: console.log({vm});
</script>

<div>
    <p>just a test to see if this file works</p>
    <p>{vm}</p>
</div>
