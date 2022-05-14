<script lang="ts">
    import {t} from "$lib/translations";
    import {Theme} from "$lib/types/theme.enum";
    import theme$ from "$lib/stores/theme";
    import goBackGreen from '/static/images/go-back-green.svg';
    import goBackRed from '/static/images/go-back-red.svg';

    let theme = Theme.LIGHT;

    theme$.subscribe((_theme) => theme = _theme);
</script>

<style lang="scss">
  a {
    display: flex;
    align-items: center;
    margin-top: 1.8rem;
    font-size: 1.8rem;
    font-weight: 500;
    color: var(--secondary-500);

    span {
      margin-left: 0.8rem;
    }
  }
</style>

<a href="/">
    {#if theme === Theme.LIGHT}
        <img src={goBackRed} alt=""/>
    {:else}
        <img src={goBackGreen} alt=""/>
    {/if}
    <span>{$t('error.go_back')}</span>
</a>
