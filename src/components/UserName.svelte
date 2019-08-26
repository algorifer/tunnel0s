<script>
  // Stores
  import { userName } from "../stores/user";

  // Components
  import LoginWrapper from "../elements/LoginWrapper.svelte";
  import InputText from "../elements/InputText.svelte";
  import Button from "../elements/Button.svelte";
  import Title from "../elements/Title.svelte";

  // State
  let input = ``;

  // Events
  const setUserName = () => userName.set(input);
</script>

<LoginWrapper>
  <Title text="UserName" />
  <p>Enter you name for start your chat</p>
  <InputText
    bind:value={input}
    placeholder="Enter your username"
    on:enter={setUserName} />
  {#if input.length !== 0}
    <Button text={`Join as ${input}`} on:click={setUserName} />
  {/if}
</LoginWrapper>
