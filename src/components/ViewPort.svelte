<script>
  // Utils
  import queryString from "query-string";

  // Svelte
  import { onMount } from "svelte";

  // Stores
  import { tunnelName, tunnelID, tunnelMessages } from "../stores/tunnels";
  import { userName } from "../stores/user";

  // Components
  import Sidebar from "./Sidebar.svelte";
  import CreateTunnel from "./CreateTunnel.svelte";
  import ConnectTunnel from "./ConnectTunnel.svelte";
  import UserName from "./UserName.svelte";
  import Tunnel from "./Tunnel.svelte";
  import Send from "./Send.svelte";
  import Header from "../elements/Header.svelte";

  // State
  let query = false;

  // Events
  onMount(
    () =>
      (query = queryString.parse(location.hash).tunnel
        ? queryString.parse(location.hash).tunnel
        : false)
  );

  const onToCreate = () => {
    query = false;
    window.location.hash = ``;
  };
</script>

<style>
  main {
    display: grid;
    grid-template-columns: 1fr 4fr 2fr;
    grid-template-rows: auto 2fr auto;
    grid-template-areas:
      "sidebar header extra"
      "sidebar tunnel extra"
      "sidebar send extra";
    grid-gap: 20px 40px;
    justify-items: stretch;
    align-items: stretch;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  @media (max-width: 800px) {
    main {
      grid-template-columns: 100%;
      grid-template-areas:
        "header"
        "tunnel"
        "send";
      grid-gap: 10px 40px;
    }
  }
</style>

<main>
  <Header name={$tunnelName} />
  <Sidebar />
  {#if query && !$tunnelID}
    <ConnectTunnel {query} on:toCreate={onToCreate} on:createId />
  {:else if !$tunnelID}
    <CreateTunnel on:createId />
  {:else if !$userName}
    <UserName />
  {:else}
    <Tunnel />
  {/if}
</main>
