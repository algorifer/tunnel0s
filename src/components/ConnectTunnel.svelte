<script>
  // Svelte
  import { createEventDispatcher } from "svelte";

  // Stores
  import { tunnelID, tunnelName } from "../stores/tunnels";

  // Components
  import LoginWrapper from "../elements/LoginWrapper.svelte";
  import InputText from "../elements/InputText.svelte";
  import Button from "../elements/Button.svelte";
  import Title from "../elements/Title.svelte";

  const dispatch = createEventDispatcher();

  // State
  export let query;

  // Events
  const onCreateId = () => dispatch(`createId`, {});
  const toCreate = () => dispatch(`toCreate`, {});

  const onConnectTunnel = () => {
    tunnelID.set(query);
    onCreateId();
  };
</script>

<style>
  p {
    word-wrap: break-word;
  }
</style>

<LoginWrapper class="connet_tunnel">
  <Title text="Join in tunnel" />
  <p>
    You have followed by tunnel invitation link. Click at join button.
    <br />
    <br />
    > Tunnel's ID: {query}
  </p>
  <Button text="Join" on:click={onConnectTunnel} />
  <Title text="Or Create" />
  <p>You can create your own tunnel and invite people.</p>
  <Button text="Create" on:click={toCreate} />
</LoginWrapper>
