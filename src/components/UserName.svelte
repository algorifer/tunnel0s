<script>
  // Svelte
  import { createEventDispatcher } from "svelte";
  import { fly } from "svelte/transition";

  // Stores
  import { currentScreen } from "../stores/app";
  import { userName } from "../stores/user";

  // Components
  import EnterWrapper from "../elements/EnterWrapper.svelte";
  import EnterCard from "../elements/EnterCard.svelte";
  import EnterTitle from "../elements/EnterTitle.svelte";
  import EnterInput from "../elements/EnterInput.svelte";
  import EnterButton from "../elements/EnterButton.svelte";

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

<style>
  p {
    margin: 0 auto;
    padding: 20px;
    font-size: 20px;
    line-height: 1;
  }
</style>

<EnterWrapper>
  <EnterCard>
    <EnterTitle text="UserName" />
    {#if input.length !== 0}
      <EnterButton text={`Join as ${input}`} on:click={setUserName} />
    {:else}
      <p in:fly={{ x: 40, duration: 300 }} out:fly={{ duration: 0 }}>
        Enter you name for start your chat
      </p>
    {/if}
    <EnterInput
      bind:value={input}
      placeholder="Enter your username"
      on:enter={setUserName} />
  </EnterCard>
</EnterWrapper>
