<script lang="ts">
import GoBackToHomePage from "./go-back-to-home-page.svelte";
import {t} from "$lib/translations";

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
</style>

<div class="container">
    <h3>{$t('error.not_found')}</h3>
    <GoBackToHomePage />
</div>
