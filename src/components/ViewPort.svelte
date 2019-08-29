<script>
  // Svelte
  import { createEventDispatcher } from "svelte";

  // Stores
  import { currentScreen } from "../stores/app";
  import { tunnelName } from "../stores/tunnels";

  // Components
  import CreateTunnel from "./CreateTunnel.svelte";
  import ConnectTunnel from "./ConnectTunnel.svelte";
  import UserName from "./UserName.svelte";
  import Tunnel from "./Tunnel.svelte";
  import EnterHeader from "../elements/EnterHeader.svelte";

  //Events
  const dispatch = createEventDispatcher();
  const onLogin = () => dispatch("initApp");
</script>

<style>
  main {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100%;
    min-height: 100vh;
  }
</style>

<main>
  {#if $currentScreen !== `tunnel`}
    <EnterHeader />
  {/if}
  {#if $currentScreen === `connect`}
    <ConnectTunnel />
  {:else if $currentScreen === `create`}
    <CreateTunnel />
  {:else if $currentScreen === `username`}
    <UserName on:login={onLogin} />
  {:else if $currentScreen === `tunnel`}
    <Tunnel />
  {/if}
</main>
