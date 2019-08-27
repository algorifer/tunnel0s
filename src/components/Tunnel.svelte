<script>
  // Svelte
  import { fly } from "svelte/transition";

  // Stores
  import { tunnelMessages, tunnelSeens } from "../stores/tunnels";
  import { userID, isServer } from "../stores/user";

  // Components
  import Title from "../elements/Title.svelte";
  import SysMsg from "../elements/SysMsg.svelte";
  import UserMsg from "../elements/UserMsg.svelte";
  import Send from "./Send.svelte";

  // State
  let feed;

  $: if ($tunnelMessages && feed) {
    feed.scrollTo({
      top: feed.clientHeight * 2,
      left: 0
    });
  }
</script>

<style>
  section {
    grid-area: tunnel;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    padding: 0 40px;
    overflow-y: scroll;
    overflow-x: hidden;
    border: 1px solid var(--dark-bg-color);
    border-radius: 10px;
    box-shadow: 0 1px 0 var(--main-bg-color), 0 2px 0 var(--accent-color),
      0 3px 0 var(--main-bg-color), 0 4px 0 var(--accent-color);
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  @media (max-width: 800px) {
    section {
      padding: 0 20px;
      border: none;
      border-radius: 0;
      box-shadow: none;
    }
  }
</style>

<section bind:this={feed} in:fly={{ y: 200 }} out:fly={{ y: -200 }}>
  {#if $isServer}
    <Title text="You're created a tunnel" />
  {:else}
    <Title text="You're joined in tunnel" />
  {/if}
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
  <Send />
{/if}
