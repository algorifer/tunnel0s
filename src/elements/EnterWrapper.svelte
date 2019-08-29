<script>
  // Svelte
  import { fly } from "svelte/transition";
</script>

<style>
  section {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
  }

  @media (max-width: 800px) {
    section {
      padding: 0 20px;
    }
  }
</style>

<section
  in:fly={{ y: 200, duration: 300 }}
  out:fly={{ y: -200, duration: 300 }}>
  <slot />
</section>
