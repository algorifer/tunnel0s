<script>
  // Stores
  import { currentScreen } from "../stores/app";
  import { tunnelName } from "../stores/tunnels";
  import { isServer } from "../stores/user";

  // Components
  import LoginWrapper from "../elements/LoginWrapper.svelte";
  import InputText from "../elements/InputText.svelte";
  import Button from "../elements/Button.svelte";
  import Title from "../elements/Title.svelte";

  // State
  let input = ``;

  const onCreateTunnel = () => {
    tunnelName.set(input);
    isServer.set(true);
    currentScreen.set(`username`);
  };
</script>

<LoginWrapper>
  <Title text="Create Tunnel" />
  <p>Build your own tunnel for chat with other people.</p>
  <InputText
    bind:value={input}
    placeholder="Enter name for tunnel"
    on:enter={onCreateTunnel} />
  {#if input.length !== 0}
    <Button text="Create" on:click={onCreateTunnel} />
  {/if}
</LoginWrapper>
