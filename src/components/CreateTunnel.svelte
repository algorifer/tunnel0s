<script>
  // Svelte
  import { fly } from "svelte/transition";

  // Stores
  import { currentScreen } from "../stores/app";
  import { tunnelName } from "../stores/tunnels";
  import { isServer } from "../stores/user";

  // Components
  import EnterWrapper from "../elements/EnterWrapper.svelte";
  import EnterCard from "../elements/EnterCard.svelte";
  import EnterTitle from "../elements/EnterTitle.svelte";
  import EnterInput from "../elements/EnterInput.svelte";
  import EnterButton from "../elements/EnterButton.svelte";

  // State
  let input = ``;

  const onCreateTunnel = () => {
    tunnelName.set(input);
    isServer.set(true);
    currentScreen.set(`username`);
  };
</script>

<style>
  p {
    margin: 0 auto auto;
    padding: 20px;
    font-size: 20px;
    line-height: 1;
  }
</style>

<EnterWrapper>
  <EnterCard>
    <EnterTitle text="Create Tunnel" />
    {#if input.length !== 0}
      <EnterButton text="Create" on:click={onCreateTunnel} />
    {:else}
      <p in:fly={{ x: 40, duration: 300 }} out:fly={{ duration: 0 }}>
        Build your own tunnel for chat with other people.
      </p>
    {/if}
    <EnterInput
      bind:value={input}
      placeholder="Enter name for tunnel"
      on:enter={onCreateTunnel} />
  </EnterCard>
</EnterWrapper>
