<script>
  // Utils
  import createBuffer from "../utils/createBuffer";

  // Stores
  import { tunnel } from "../stores/tunnels";
  import { userName } from "../stores/user";

  // Components
  import InputArea from "../elements/InputArea.svelte";
  import Button from "../elements/Button.svelte";

  // State
  let input = ``;

  // Events
  const sendMessage = () => {
    $tunnel.broadcast(
      createBuffer({ type: `user`, name: $userName, text: input })
    );
    input = ``;
  };
</script>

<style>
  .send {
    grid-area: send;
    align-self: end;
    display: flex;
    padding: 0 30px;
    margin-bottom: 20px;
    border-radius: 5px;
    border: 1px solid var(--dark-bg-color);
    box-shadow: 0 1px 0 var(--main-bg-color), 0 2px 0 var(--accent-color),
      0 3px 0 var(--main-bg-color), 0 4px 0 var(--accent-color);
  }

  .input {
    flex-grow: 2;
  }

  .btn {
    margin-left: 20px;
  }

  @media (max-width: 800px) {
    .send {
      margin-bottom: 6px;
      padding: -10px 20px;
      border-radius: 0;
      border: none;
    }
  }
</style>

<div class="send">
  <div class="input">
    <InputArea
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
