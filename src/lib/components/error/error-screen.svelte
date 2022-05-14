<script lang="ts">
    import {t} from "$lib/translations";
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
    <h3>{$t('error.error.heading')}</h3>
    <p>
        {$t('error.error.detail')}<br />
        {$t('error.error.status_code')} {status}<br/>
        {$t('error.error.message')} {message}
    </p>
    <GoBackToHomePage />
</div>

