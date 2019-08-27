<script>
  // Svelte
  import { createEventDispatcher } from "svelte";

  // Stores
  import { currentScreen } from "../stores/app";
  import { tunnelName } from "../stores/tunnels";

  // Components
  import Sidebar from "./Sidebar.svelte";
  import Info from "./Info.svelte";
  import CreateTunnel from "./CreateTunnel.svelte";
  import ConnectTunnel from "./ConnectTunnel.svelte";
  import UserName from "./UserName.svelte";
  import Tunnel from "./Tunnel.svelte";
  import Send from "./Send.svelte";
  import Header from "../elements/Header.svelte";

  //Events
  const dispatch = createEventDispatcher();
  const onLogin = () => dispatch("initApp");
</script>

<style>
  main {
    display: grid;
    grid-template-columns: 1fr 4fr 2fr;
    grid-template-rows: auto 2fr auto;
    grid-template-areas:
      "sidebar header info"
      "sidebar tunnel info"
      "sidebar send info";
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
  {#if $currentScreen === `connect`}
    <ConnectTunnel />
  {:else if $currentScreen === `create`}
    <CreateTunnel />
  {:else if $currentScreen === `username`}
    <UserName on:login={onLogin} />
  {:else if $currentScreen === `tunnel`}
    <Tunnel />
    <Info />
  {/if}
</main>
