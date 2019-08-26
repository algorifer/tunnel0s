<script>
  // Svelte
  import { fly } from "svelte/transition";
</script>

<style>
  section {
    grid-area: tunnel;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    width: 100%;
    margin: 0 auto auto;
    padding: 40px;
    border: 1px solid var(--dark-bg-color);
    border-radius: 10px;
    box-shadow: 0 1px 0 var(--main-bg-color), 0 2px 0 var(--accent-color),
      0 3px 0 var(--main-bg-color), 0 4px 0 var(--accent-color);
  }

  @media (max-width: 800px) {
    section {
      padding: 0 20px;
      border: none;
      box-shadow: none;
      border-radius: 0;
    }
  }
</style>

<section in:fly={{ y: 200 }} out:fly={{ y: -200 }}>
  <slot />
</section>
