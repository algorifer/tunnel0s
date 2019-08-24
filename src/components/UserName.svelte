<script>
  import { username } from "../stores/user";
  import InputText from "../elements/InputText.svelte";
  import Button from "../elements/Button.svelte";
  import Separator from "../elements/Separator.svelte";

  let inputName = ``;

  const setUserName = () => {
    username.set(inputName);
  };
</script>

<style>
  .username {
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

<section class="username">
  <Separator text="Pick a UserName" />
  <InputText
    bind:value={inputName}
    placeholder="UserName"
    on:enter={setUserName} />
  {#if inputName.length !== 0}
    <Button text={`Enter as ${inputName}`} on:click={setUserName} />
  {/if}
</section>
