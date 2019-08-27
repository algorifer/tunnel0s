<script>
  // Utils
  import queryString from "query-string";

  // Svelte
  import { onMount } from "svelte";

  // Stores
  import { currentScreen } from "../stores/app";
  import { tunnelID } from "../stores/tunnels";

  // Components
  import LoginWrapper from "../elements/LoginWrapper.svelte";
  import InputText from "../elements/InputText.svelte";
  import Button from "../elements/Button.svelte";
  import Title from "../elements/Title.svelte";

  // Events
  onMount(() =>
    queryString.parse(location.hash).tunnel
      ? tunnelID.set(queryString.parse(location.hash).tunnel)
      : currentScreen.set(`create`)
  );

  const onJoinClick = () => currentScreen.set(`username`);

  const onCreateClick = () => {
    window.location.hash = ``;
    currentScreen.set(`create`);
  };
</script>

<style>
  p {
    word-wrap: break-word;
  }
</style>

<LoginWrapper class="connet_tunnel">
  <Title text="Join in tunnel" />
  <p>
    You have followed by tunnel invitation link. Click at join button.
    <br />
    <br />
    > Tunnel's ID: {$tunnelID}
  </p>
  <Button text="Join" on:click={onJoinClick} />
  <Title text="Or Create" />
  <p>You can create your own tunnel and invite people.</p>
  <Button text="Create" on:click={onCreateClick} />
</LoginWrapper>
