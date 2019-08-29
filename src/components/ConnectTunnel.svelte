<script>
  // Utils
  import queryString from "query-string";

  // Svelte
  import { onMount } from "svelte";

  // Stores
  import { currentScreen } from "../stores/app";
  import { tunnelID } from "../stores/tunnels";

  // Components
  import EnterWrapper from "../elements/EnterWrapper.svelte";
  import EnterCard from "../elements/EnterCard.svelte";
  import EnterTitle from "../elements/EnterTitle.svelte";
  import EnterButton from "../elements/EnterButton.svelte";
  import EnterSwitch from "../elements/EnterSwitch.svelte";

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

  const onKeydown = evt =>
    evt.keyCode === 40
      ? onCreateClick()
      : evt.keyCode === 13
      ? onJoinClick()
      : null;
</script>

<style>
  p {
    margin: 0 auto;
    padding: 20px;
    font-size: 20px;
    line-height: 1;
    /* text-transform: uppercase; */
    word-wrap: break-word;
  }
</style>

<svelte:window on:keydown={onKeydown} />

<EnterWrapper class="connet_tunnel">
  <EnterCard>
    <EnterTitle text="Join in tunnel" />
    <p>You have followed by tunnel invitation link. Click at join button.</p>
    <EnterButton text="Join" on:click={onJoinClick} />
  </EnterCard>
  <EnterSwitch text="Create Tunnel" on:click={onCreateClick} />
</EnterWrapper>
