<script lang="ts">
    import type {BlogListingRes} from "../../types/blog.type";

    export let blog: BlogListingRes;
</script>

<style lang="scss">
  .blog-card {
    position: relative;
    width: 32.3rem;
    min-height: 26.7rem;
    padding: 2rem 1.2rem;
    z-index: var(--z-100);

    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      border-top-left-radius: 2.5rem;
      border-bottom-right-radius: 2.5rem;
      transition: all 0.3s ease-in-out;
    }

    &::before {
      top: 1rem;
      left: 1rem;
      background: var(--app-primary);
      z-index: -1;
    }

    &::after {
      top: 0;
      left: 0;
      border: 0.1rem solid var(--app-primary);
      background: var(--app-card-bg);
      z-index: -1;
    }

    &:not(:first-child) {
      margin-top: 2.8rem;
    }

    h3 {
      @include h6;
      text-align: center;
    }

    .readmore {
      @include p8;
      position: relative;
      display: grid;
      place-items: center;
      width: 10rem;
      height: 3.2rem;
      margin: 1.2rem auto 0;
      border-radius: 0.5rem;
      background: var(--app-primary);
      color: var(--app-text-contrast);
      text-decoration: none;
      z-index: var(--z-100);
      transition: all 0.5s ease-in-out;
      &::before, &::after {
        content: '';
        position: absolute;
        width: 7rem;
        height: 1rem;
        border-radius: 100vh;
        background: var(--app-primary);
        transition: all 0.1s ease-in-out;
        pointer-events: none;
      }
      &::before {
        left: -8.6rem;
      }
      &::after {
        right: -8.6rem;
      }
      &:hover {
        border-left: 3.6rem solid var(--app-primary);
        border-right: 10.4rem solid var(--app-primary);
        background: var(--app-primary);
        &::before, &::after {
          width: 0;
          height: 0;
        }
        span {
          white-space: nowrap;
        }
      }
    }

    p {
      @include p6;
      margin-top: 1rem;
    }

    .tags {
      display: flex;
      flex-flow: row wrap;
      margin-top: 1.8rem;
    }

    .tag {
      @include p9;
      display: inline-block;
      padding: 0.8rem 1rem;
      border-radius: 0.5rem;
      border: 0.2rem solid var(--app-primary);
      text-decoration: none;
      color: var(--app-primary);
      &:not(:first-child) {
        margin-left: 1.2rem;
      }

      &:hover {
        @include p8;
        background: var(--app-primary);
        color: var(--app-card-bg);
      }
    }

    .date {
      @include p8;
      font-size: 0.8em;
      color: var(--app-primary);
      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media screen and (min-width: 744px) {
    .blog-card {
      margin-top: 0 !important;
    }
  }

  @media screen and (min-width: 1200px) {
    .blog-card {
      width: 28rem;
      min-height: 44rem;
      h3 {
        font-size: 2.2rem;
      }
      .readmore {
        margin-top: 1.6rem;
        font-size: 1.6rem;
        &:hover {
          border-left: 3.3rem solid var(--app-primary);
          border-right: 10.7rem solid var(--app-primary);
        }
      }
      p {
        margin-top: 1.6rem;
        font-size: 1.8rem;
      }
      .tags {
        margin-top: 2.4rem;
      }
      .tag {
        &, &:hover {
          @include p7;
        }
        &:not(:first-child) {
          margin-left: 1.8rem;
        }
      }
    }
  }

  @media screen and (min-width: 1300px) {
    .blog-card {
      width: 32rem;
      min-height: 42rem;
    }
  }
</style>

<div class="blog-card">
    <h3>{blog.title}</h3>
    <a class="readmore" href="/blog/{blog.slug}">
        <span>Read More</span>
    </a>
    <p>{blog.desc}</p>
    <p class="date">{blog.date}</p>
    <div class="tags">
        {#each blog.tags as tag}
            <p class="tag">{tag}</p>
        {/each}
    </div>
</div>
