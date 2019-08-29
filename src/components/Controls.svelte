<script>
  // Utils
  import createBuffer from "../utils/createBuffer";

  // Svelte
  import { fly } from "svelte/transition";

  // Stores
  import { tunnel } from "../stores/tunnels";
  import { userName } from "../stores/user";

  // Components
  import InputMessage from "../elements/InputMessage.svelte";
  import Button from "../elements/Button.svelte";

  // State
  let input = ``;

  // Events
  const sendMessage = () => {
    $tunnel.send(input);
    input = ``;
  };
</script>

<style>
  .controls {
    position: sticky;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 10px;
    background: var(--bg-color);
    border-top: 10px solid var(--alt-bg-color);
  }

  .send {
    display: flex;
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
  }

  .input {
    flex-grow: 2;
  }

  .btn {
    margin-left: 20px;
  }
</style>

<div class="controls" in:fly={{ y: 200 }} out:fly={{ y: -200 }}>
  <div class="send">
    <div class="input">
      <InputMessage
        bind:value={input}
        placeholder="Your new message!"
        on:enter={sendMessage} />
    </div>
    {#if input.length !== 0}
      <div class="btn">
        <Button on:click={sendMessage} text="Send" />
      </div>
    {/if}
  </div>
</div>
