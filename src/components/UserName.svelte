<script>
  // Svelte
  import { createEventDispatcher } from "svelte";

  // Stores
  import { currentScreen } from "../stores/app";
  import { userName } from "../stores/user";

  // Components
  import LoginWrapper from "../elements/LoginWrapper.svelte";
  import InputText from "../elements/InputText.svelte";
  import Button from "../elements/Button.svelte";
  import Title from "../elements/Title.svelte";

  // State
  let input = ``;

  // Events
  const dispatch = createEventDispatcher();
  const setUserName = () => {
    userName.set(input);
    currentScreen.set(`tunnel`);
    dispatch("login");
  };
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
