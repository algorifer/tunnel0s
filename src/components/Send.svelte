<script>
  import { tunnel } from "../stores/tunnels";
  import { username } from "../stores/user";
  import InputText from "../elements/InputText.svelte";
  import Button from "../elements/Button.svelte";

  let newMsg = ``;

  const sendMsg = () => {
    console.log(`send`);
    try {
      $tunnel.broadcast(
        Buffer.from(
          JSON.stringify({ type: `user`, name: $username, text: newMsg })
        )
      );
      newMsg = "";
    } catch (err) {
      console.error("Failed to publish message", err);
    }
  };
</script>

<style>
  .send {
    position: fixed;
    bottom: 20px;
    left: 0;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 20px;
    padding: 0 40px;
  }

  .input {
    flex-grow: 2;
  }

  .btn {
    margin-left: 20px;
    margin-top: 20px;
  }
</style>

<div class="send">
  <div class="input">
    <InputText
      bind:value={newMsg}
      placeholder="Your new message!"
      on:enter={sendMsg} />
  </div>
  {#if newMsg.length !== 0}
    <div class="btn">
      <Button on:click={sendMsg} text="Send" />
    </div>
  {/if}
</div>
