<script>
  import { fly } from "svelte/transition";
  import { tunnelMsgs, tunnelSubscribe } from "../stores/tunnels";
  import { ipfsId } from "../stores/user";

  import SysMsg from "./SysMsg.svelte";
  import UserMsg from "./UserMsg.svelte";
  import Send from "./Send.svelte";
</script>

<style>
  .tunnel {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    height: 100%;
  }

  .msg_list {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    max-height: 100%;
    margin: 0 0 100px;
    padding: 0;
    list-style: none;
  }
</style>

<section class="tunnel">
  <ul class="msg_list">
    {#each $tunnelMsgs as msg (msg.id)}
      {#if msg.type === `sys`}
        <SysMsg text={msg.text} />
      {:else if msg.type === `user` && msg.from === $ipfsId}
        <UserMsg username={msg.name} text={msg.text} self="true" />
      {:else if msg.type === `user`}
        <UserMsg username={msg.name} text={msg.text} />
      {/if}
    {/each}
  </ul>
  {#if $tunnelSubscribe}
    <Send />
  {/if}
</section>
