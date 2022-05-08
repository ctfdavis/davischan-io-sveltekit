<script lang="ts">
    import theme$ from "$lib/stores/theme";
    import {Theme} from "$lib/types/theme.enum";
    import githubGreen from '/static/images/github-green.png';
    import githubRed from '/static/images/github-red.png';
    import linkGreen from '/static/images/link-icon-green.png';
    import linkRed from '/static/images/link-icon-red.png';
    import ng4ebCover from '/static/images/ng4eb-cover.jpg';

    let theme = Theme.LIGHT;

    theme$.subscribe((_theme) => theme = _theme);
</script>

<style lang="scss">
  .portfolio {
    padding-top: 3.2rem;

    &__leaf {
      position: relative;
      display: grid;
      place-items: center;
      width: 43.6rem;
      max-width: 100%;
      margin: 0 auto;
      height: 16.5rem;

      h1 {
        @include h4;
        transform: rotateZ(13deg);
      }

      &::before {
        content: '';
        position: absolute;
        width: 85%;
        height: 16.5rem;
        border-top-left-radius: 136px;
        border-bottom-right-radius: 136px;
        background: var(--app-card-bg);
        box-shadow: var(--app-leaf-shadow);
        z-index: -1;
        transform: rotate(15deg);
      }

      &::after {
        content: '';
        position: absolute;
        width: 85%;
        height: 16.5rem;
        border-top-left-radius: 136px;
        border-bottom-right-radius: 136px;
        background: var(--app-primary);
        transform: translate(1rem, 1rem) rotate(15deg);
        z-index: -3;
      }
    }

    &__card {
      max-width: 40rem;
      margin: 7.2rem auto 0;
      padding: 2.4rem 0;
      background: var(--app-card-bg);
      box-shadow: var(--app-skills-shadow);
      &__header {
        display: flex;
        align-items: center;
        margin-left: 3.2rem;
        &__title {
          @include h5;
        }
        a {
          margin-left: 1.2rem;
        }
      }
      &__body {
        margin-top: 2rem;
        &__cover {
          overflow: hidden;
          img {
            transform: scale(1.01);
          }
        }
        &__detail {
          @include p5;
          margin-top: 2rem;
          padding: 0 2.4rem;
          p:not(:first-child) {
            margin-top: 1.2rem;
          }
        }
      }
    }
  }

  @media screen and (min-width: 744px) {
    .portfolio {
      &__leaf {
        h1 {
          @include h3;
        }
      }
      &__card {
        position: relative;
        &::after {
          content: '';
          position: absolute;
          top: 0.5rem;
          left: 0.5rem;
          width: 100%;
          height: 100%;
          background: var(--app-primary);
          z-index: -1;
        }
        &__body__detail {
          @include p4;
        }
      }
    }
  }

  @media screen and (min-width: 1200px) {
    .portfolio {
      display: flex;
      align-items: center;
      justify-content: start;
      padding-top: 0;
      margin-left: 6.4rem;
      &__leaf {
        width: 48rem;
        margin: 0;
        h1 {
          @include h2;
        }
        &::before, &::after {
          transition: all 0.3s ease-in-out;
        }
        &:hover {
          &::before {
            transform: rotateZ(18.5deg);
          }
          &::after {
            transform: rotateZ(10deg);
          }
        }
      }
      &__card {
        margin: 0 0 0 6.4rem;
        max-width: 45rem;
        &__header__title {
          @include h3;
        }
        &__header__link {
          @include hover-button-up;
        }
        &__body__detail {
          @include p3;
        }
      }
    }
  }
</style>

<svelte:head>
    <title>Portfolio | davischan.io</title>
</svelte:head>

<section class="portfolio">
    <div class="portfolio__leaf">
        <h1>
            portfolio
        </h1>
    </div>
    <div class="portfolio__card">
        <div class="portfolio__card__header">
            <h1 class="portfolio__card__header__title">
                ng4eb
            </h1>
            <a href="https://ng4eb.com" target="_blank"
               rel="noopener noreferrer" class="portfolio__card__header__link">
                {#if theme === Theme.LIGHT}
                    <img src={linkRed} alt="portfolio link"/>
                {:else}
                    <img src={linkGreen} alt="portfolio link"/>
                {/if}
            </a>
            <a href="https://github.com/ng4eb/ng4eb" target="_blank"
               rel="noopener noreferrer" class="portfolio__card__header__link">
                {#if theme === Theme.LIGHT}
                    <img src={githubRed} alt="github"/>
                {:else}
                    <img src={githubGreen} alt="github"/>
                {/if}
            </a>
        </div>
        <div class="portfolio__card__body">
            <div class="portfolio__card__body__cover">
                <img src={ng4ebCover} alt="ng4eb.com"/>
            </div>
            <div class="portfolio__card__body__detail">
                <p>ng4eb is a free, online, succinct ebook on Angular.</p>
                <p>I wrote this book with an aim to explain Angular concepts in simple terms and with demo examples.</p>
                <p>To help readers read the book more efficiently and comfortably, I converted it to a PWA. created a
                    dark theme mode, and added a number of handful features such as global search.</p>
            </div>
        </div>
    </div>
</section>