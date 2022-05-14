<script lang="ts">
    import theme$ from "$lib/stores/theme";
    import {Theme} from "$lib/types/theme.enum";
    import NextIcon from "$lib/components/_common/next-icon.svelte";
    import {t} from "$lib/translations";
    import wavingHandGreen from '/static/images/waving-hand-green.png';
    import wavingHandRed from '/static/images/waving-hand-red.png';
    import html5Icon from '/static/images/html5-icon.png';
    import cssIcon from '/static/images/css-icon.png';
    import jsIcon from '/static/images/js-icon.png';
    import pythonIcon from '/static/images/python-icon.png';
    import angularIcon from '/static/images/angular-icon.png';
    import reactIcon from '/static/images/react-icon.png';
    import svelteIcon from '/static/images/svelte-icon.png';
    import ionicIcon from '/static/images/ionic-icon.png';
    import figmaIcon from '/static/images/figma-icon.png';
    import githubWhite from '/static/images/github-white.png';
    import githubBlack from '/static/images/github-black.png';

    let aboutShownIndex = 0;

    const showNextAbout = () => {
        if (aboutShownIndex === 0) aboutShownIndex++;
        else aboutShownIndex = 0;
    }
</script>

<style lang="scss">
  @keyframes fade-in {
    0% {
      opacity: 0.2;
    }
    100% {
      opacity: 1;
    }
  }

  .intro {
    margin-left: 3.2rem;

    img {
      width: 6.4rem;
      height: 6.4rem;
      transition: all 0.3s ease-in-out;
      &:hover {
        transform: rotateZ(15deg);
      }
    }

    &__text {
      h1 {
        @include h3;
        margin-top: 3rem;
        color: var(--app-primary);
      }

      h2 {
        @include p2;
        width: 30rem;
        margin-top: 3rem;
      }
    }

  }

  .section-heading {
    @include h3;
  }

  .skills {
    margin-top: 5.4rem;

    h1 {
      margin-left: 3.2rem;
    }

    .list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(3.6rem, 1fr));
      column-gap: 3.2rem;
      row-gap: 6.4rem;
      margin-top: 1.4rem;
      padding: 4.2rem 4rem;
      background: var(--app-skills-bg);
      box-shadow: var(--app-skills-shadow);

      img {
        width: 3.6rem;
        height: auto;
      }
    }
  }

  .about {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    padding-left: 3.2rem;
    padding-right: 3.2rem;
    h2 {
      @include p3;
      margin-top: 1.2rem;
      color: var(--app-primary);
    }

    &__details {
      margin-top: 1.8rem;
    }

    &__detail {
      @include p5;
      display: none;
      max-width: 45ch;
      animation: fade-in 0.3s ease-in;

      p:not(:first-child) {
        margin-top: 1.2rem;
      }

      &.shownOnMobile {
        display: block;
      }
    }

    &__next-btn {
      align-self: end;
      margin-top: 1.2rem;
      border: none;
      background: transparent;
      cursor: pointer;
    }

    &__github {
      @include p5;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 19rem;
      height: 4rem;
      margin-top: 2.8rem;
      border-radius: 1rem;
      font-style: italic;
      background: var(--app-card-bg);
      color: var(--app-text);
      box-shadow: var(--app-github-shadow);
      text-decoration: none;
      img {
        margin-left: 1.2rem;
        width: 1.7rem;
        height: 1.7rem;
      }
    }
  }

  @media screen and (min-width: 744px) {
    .intro {
      display: flex;
      margin-left: 8rem;
      img {
        width: 8.3rem;
        height: 8.3rem;
      }
      &__text {
        margin-left: 3.2rem;
        h1 {
          margin-top: 0;
        }
        h2 {
          margin-top: 0;
          width: unset;
          br {
            display: none;
          }
        }
      }
    }

    .skills {
      margin-top: 6.4rem;
      h1 {
        margin-left: 8rem;
      }
      .list {
        padding: 4.2rem 8rem;
      }
    }

    .about {
      margin-top: 4.8rem;
      padding-left: 8rem;

      &__details {
        display: flex;
        margin-top: 3.2rem;
      }
      &__detail {
        display: block;
        max-width: 30ch;
        &:not(:first-child) {
          margin-left: 2rem;
        }
      }
      &__next-btn {
        display: none;
      }
      &__github {
        margin-top: 4rem;
      }
    }
  }

  @media screen and (min-width: 1200px) {
    .intro {
      align-items: center;
      img {
        width: 11.4rem;
        height: 11.4rem;
      }
      &__text {
        width: 100%;
        margin-left: 4.2rem;
        h1 {
            @include h0;
        }
        h2 {
            @include p0;
        }
      }
    }

    .section-heading {
      @include h1;
    }

    .skills {
      margin-top: 8rem;
      .list {
        max-width: 100rem;
        margin-left: 4.8rem;
        border-radius: 5rem;
        img {
          transition: all 0.3s ease-in-out;
        }
        img:hover {
          position: relative;
          transform: scale(1.35) translateY(-0.3rem) translateZ(10rem) perspective(10rem);
          transform-origin: center center;
        }
        img:active {
          transform: scale(1.35) translateY(-0.3rem) translateZ(10rem) perspective(10rem) rotateZ(360deg);
        }
      }
    }

    .about {
      margin-top: 5rem;
      h2 {
        @include p0;
      }
      &__detail {
        @include p1;
      }
      &__github {
        @include p0;
        width: 34rem;
        height: 7rem;
        img {
          width: 3rem;
          height: 3rem;
        }
      }
    }
  }
</style>

<svelte:head>
    <title>Davis Chan | davischan.io</title>
</svelte:head>

<section class="intro">
    {#if $theme$ === Theme.LIGHT}
        <img src={wavingHandRed} alt="waving hand"/>
    {:else}
        <img src={wavingHandGreen} alt="waving hand"/>
    {/if}
    <div class="intro__text">
        <h1>{$t('home.intro.hi')}</h1>
        <h2>{$t('home.intro.myself.name')}
            <br/>
            {$t('home.intro.myself.job')}</h2>
    </div>
</section>
<section class="skills">
    <h1 class="section-heading">{$t('home.skills.heading')}</h1>
    <div class="list">
        <img src={html5Icon} alt="html5" title="HTML5"/>
        <img src={cssIcon} alt="css" title="CSS3"/>
        <img src={jsIcon} alt="javascript" title="JavaScript"/>
        <img src={pythonIcon} alt="python" title="Python"/>
        <img src={angularIcon} alt="angular" title="Angular"/>
        <img src={reactIcon} alt="react" title="React"/>
        <img src={svelteIcon} alt="svelte" title="Svelte"/>
        <img src={ionicIcon} alt="ionic" title="Ionic"/>
        <img src={figmaIcon} alt="figma" title="Figma"/>
    </div>
</section>
<section class="about">
    <h1 class="section-heading">{$t('home.about.heading')}</h1>
    <h2>{$t('home.about.statement')}</h2>
    <div class="about__details">
        <div class="about__detail" class:shownOnMobile={aboutShownIndex === 0}>
            <p>{$t('home.about.paragraph.1')}</p>
            <p>{$t('home.about.paragraph.2')}</p>
        </div>
        <div class="about__detail" class:shownOnMobile={aboutShownIndex === 1}>
            <p>{$t('home.about.paragraph.3')}</p>
            <p>{$t('home.about.paragraph.4')}</p>
        </div>
    </div>
    <button class="about__next-btn" on:click={showNextAbout}>
        <NextIcon />
    </button>
    <a class="about__github" href="https://github.com/ctfdavis" target="_blank" rel="noopener noreferrer">
        <span>{$t('home.find_me_on_github')}</span>
        {#if $theme$ === Theme.LIGHT}
            <img src={githubBlack} alt="github"/>
        {:else}
            <img src={githubWhite} alt="github"/>
        {/if}
    </a>
</section>
