<script lang="ts">
    import GoBackToHomePage from "./go-back-to-home-page.svelte";

    export let message: string;
	export let status: number;
</script>

<style lang="scss">
  .container {
    margin-top: 9.7rem;
    margin-left: 7.8rem;
  }
  h3 {
    font-size: 2.4rem;
    color: var(--secondary-900);
  }
  p {
    font-size: 1.5rem;
    color: var(--accent-900);
  }
</style>

<div class="container">
    <h3>Error!</h3>
    <p>
        Here's the error detail:<br />
        Status code: {status}<br/>
        Message: {message}
    </p>
    <GoBackToHomePage />
</div>

