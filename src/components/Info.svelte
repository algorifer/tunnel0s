<script>
  // Svelte
  import { fade } from "svelte/transition";

  // Stores
  import { tunnelSeens } from "../stores/tunnels";

  // Components
  import InfoWrapper from "../elements/InfoWrapper.svelte";
  import Title from "../elements/Title.svelte";
</script>

<style>
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    margin-bottom: 20px;
  }
</style>

<InfoWrapper>
  <Title text="Were here" />
  <ul>
    {#each $tunnelSeens as seen, i (seen.id)}
      <li transition:fade|local>{i + 1}: {seen.name}</li>
    {/each}
  </ul>
</InfoWrapper>
