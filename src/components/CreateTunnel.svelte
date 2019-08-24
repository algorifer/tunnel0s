<script>
  import queryString from "query-string";

  import getRandomId from "../utils/getRandomId";

  import { tunnelId, tunnelName } from "../stores/tunnels";
  import { userRoot } from "../stores/user";
  import { createEventDispatcher } from "svelte";

  import InputText from "../elements/InputText.svelte";
  import Button from "../elements/Button.svelte";
  import Separator from "../elements/Separator.svelte";

  const dispatch = createEventDispatcher();

  const onCreateId = () => {
    dispatch("createId", {});
  };

  let inputName = ``;
  let inputId = ``;
  let queryId = queryString.parse(location.hash).tunnel;

  $: if (queryId) inputId = queryId;

  const onCreateTunnel = () => {
    tunnelName.set(inputName);
    userRoot.set(true);
    const newTunnelId = getRandomId(54);
    window.location.hash = `#tunnel=${newTunnelId}`;
    tunnelId.set(newTunnelId);
    onCreateId();
  };

  const onConnectTunnel = () => {
    tunnelId.set(inputId);
    onCreateId();
  };
</script>

<style>
  .create_tunnel {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    max-width: 680px;
    height: 100%;
    margin: 40px auto auto;
  }
</style>

<section class="create_tunnel">
  <Separator text="Create" />
  <InputText
    bind:value={inputName}
    placeholder="Enter tunnel's name"
    on:enter={onCreateTunnel} />
  {#if inputName.length !== 0}
    <Button text="Create tunnel" on:click={onCreateTunnel} />
  {/if}
  <Separator text="or Connect" />
  <InputText
    bind:value={inputId}
    placeholder="Enter tunnel's Id to connect"
    on:enter={onConnectTunnel} />
  {#if inputId.length !== 0}
    <Button text="Connect to tunnel" on:click={onConnectTunnel} />
  {/if}
</section>
