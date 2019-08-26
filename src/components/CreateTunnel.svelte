<script>
  // Utils
  import getRandomId from "../utils/getRandomId";

  // Svelte
  import { createEventDispatcher } from "svelte";

  // Stores
  import { tunnelID, tunnelName } from "../stores/tunnels";
  import { isUserRoot } from "../stores/user";

  // Components
  import LoginWrapper from "../elements/LoginWrapper.svelte";
  import InputText from "../elements/InputText.svelte";
  import Button from "../elements/Button.svelte";
  import Title from "../elements/Title.svelte";

  // State
  let input = ``;

  // Events
  const dispatch = createEventDispatcher();
  const onCreateId = () => dispatch("createId", {});

  const onCreateTunnel = () => {
    tunnelName.set(input);
    isUserRoot.set(true);
    const newTunnelID = getRandomId(54);
    window.location.hash = `#tunnel=${newTunnelID}`;
    tunnelID.set(newTunnelID);
    onCreateId();
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
