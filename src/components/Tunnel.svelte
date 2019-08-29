<script>
  // Svelte
  import { fly, fade } from "svelte/transition";

  // Stores
  import { tunnelMessages, tunnelSeens } from "../stores/tunnels";
  import { userID, isServer } from "../stores/user";

  // Components
  import SysMsg from "../elements/SysMsg.svelte";
  import UserMsg from "../elements/UserMsg.svelte";
  import TunnelMeta from "./TunnelMeta.svelte";
  import Controls from "./Controls.svelte";

  // State
  let feed;
</script>

<style>
  section {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    max-width: 700px;
    height: 100%;
    margin: auto auto 0;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin: 0;
    padding: 10px 0;
    list-style: none;
    background: var(--bg-color);
  }
</style>

<section bind:this={feed}>
  <TunnelMeta />
  <ul>
    {#each $tunnelMessages as msg (msg.id)}
      {#if msg.type === `system`}
        <SysMsg text={msg.text} root={feed} />
      {:else if msg.type === `user` && msg.from === $userID}
        <UserMsg username={msg.name} text={msg.text} self="true" root={feed} />
      {:else if msg.type === `user`}
        <UserMsg username={msg.name} text={msg.text} root={feed} />
      {/if}
    {/each}
  </ul>
</section>
{#if $tunnelSeens.length > 1}
  <Controls />
{/if}
