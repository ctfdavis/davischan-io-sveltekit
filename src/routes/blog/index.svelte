<script lang="ts">
    import type {BlogListingRes} from "$lib/types/blog.type";
    import BlogCard from "$lib/components/blog/card.svelte";

    export let vm: BlogListingRes[];
</script>

<style lang="scss">
  section {
    padding-bottom: 6.4rem;
  }

  .blog-listing {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 6.4rem;
  }

  @media screen and (min-width: 744px) {
    .blog-listing {
      display: grid;
      place-items: center;
      grid-template-columns: repeat(2, 1fr);
      row-gap: 3.2rem;
    }
  }

  @media screen and (min-width: 1200px) {
    .blog-listing {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>

<svelte:head>
    <title>Blog | davischan.io</title>
</svelte:head>

<section>
    <div class="blog-listing">
        {#each vm as blog}
            <BlogCard {blog}/>
        {/each}
    </div>
</section>

