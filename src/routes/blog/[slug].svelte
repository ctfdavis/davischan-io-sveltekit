<script lang="ts">
    import type {BlogRes} from "../../lib/types/blog.type";
    export let vm: BlogRes;
</script>

<style lang="scss">
  article {
    padding: 0 3.2rem 6.4rem;
    h1 {
      @include h3;
      margin-top: 5rem;
      font-size: 1.8rem;
      text-align: center;
    }
    .tags {
      display: flex;
      margin-top: 4rem;
      .tag {
        padding: 0.4rem 0.8rem;
        border-radius: 0.5rem;
        font-size: 1.5rem;
        border: 0.2rem solid var(--app-primary);
        text-decoration: none;
        &:not(:first-child) {
          margin-left: 1.2rem;
        }
      }
    }
    .date {
      margin-top: 2.4rem;
      font-size: 1.5rem;
      text-decoration: underline;
    }
    main {
      margin-top: 2.4rem;
      & :global {
        font-size: 1.5rem;
        line-height: 2;
      }
      & :global(*:not(:first-child)) {
        margin-top: 1.6rem;
      }
      & :global(h1) {
        margin-top: 1.6rem;
        font-size: 2.2rem;
      }
      & :global(h2) {
        margin-top: 1.4rem;
        font-size: 2rem;
        text-shadow: 6px 6px 8px rgba(165, 136, 67, 0.35);
      }
      & :global(blockquote) {
        padding: 2rem;
        background: var(--app-panel-bg);
        box-shadow: var(--app-panel-shadow);
      }
      & :global(a) {
        color: var(--app-primary);
        &:hover {
          color: var(--app-secondary);
        }
      }
    }
  }

  @media screen and (min-width: 744px) {
    article {
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
      h1 {
        font-size: 2.2rem;
      }
      main {
        & :global {
          font-size: 1.6rem;
        }
        & :global(h1) {
          font-size: 2.4rem;
        }
        & :global(h2) {
          font-size: 2.2rem;
        }
      }
    }
  }

  @media screen and (min-width: 1200px) {
    article {
      max-width: 750px;
      h1 {
        @include h2;
      }
      main {
        & :global {
          font-size: 1.9rem;
        }
        & :global(h1) {
          font-size: 2.8rem;
        }
        & :global(h2) {
          font-size: 2.4rem;
        }
        & :global(code) {
          font-size: 1.4rem;
        }
      }
    }
  }
</style>

<svelte:head>
    <title>{vm.metadata.title} | davischan.io</title>
    <meta name="description" content={vm.metadata.desc} />
</svelte:head>

<article>
    <h1>{vm.metadata.title}</h1>
    {#if vm.metadata.tags.length > 0}
        <div class="tags">
            {#each vm.metadata.tags as tag}
                <p class="tag">{tag}</p>
            {/each}
        </div>
    {/if}
    <p class="date">{vm.metadata.date}</p>
    <main>
        {@html vm.content}
    </main>
</article>
