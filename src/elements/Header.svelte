<script>
  // Svelte
  import { fly } from "svelte/transition";

  // Stores
  import { tunnelID } from "../stores/tunnels";
  import { userName } from "../stores/user";

  // Components
  import Button from "./Button.svelte";

  // State
  export let name = `0s`;
  let isLinkCoped = false;
  let copyInput;

  // Events
  const onCopyClick = () => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(`${window.location.origin}/#tunnel=${$tunnelID}`)
        .then(() => {
          isLinkCoped = true;
          const copyTime = setTimeout(() => {
            isLinkCoped = false;
            clearTimeout(copyTime);
          }, 2000);
        });
    } else {
      copyInput.current.select();
      document.execCommand("copy");
      copyInput.blur();
      isLinkCoped = true;
      const copyTime = setTimeout(() => {
        isLinkCoped = false;
        clearTimeout(copyTime);
      }, 2000);
    }
  };
</script>

<style>
  header {
    grid-area: header;
    display: flex;
    align-items: baseline;
    justify-content: flex-start;
    width: 100%;
    padding: 20px 0 0;
    margin: 0;
    font-weight: normal;
    font-size: 24px;
    line-height: 1;
  }

  h1 {
    position: relative;
    z-index: 10;
    margin: 0;
    padding: 10px;
    padding-right: 0;
    font-weight: normal;
    font-size: 20px;
    font-style: italic;
    text-transform: uppercase;
  }

  h1::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
    display: block;
    width: calc(100% + 10px);
    height: 100%;
    border-radius: 5px;
    background: var(--accent-color);
  }

  h1::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    display: block;
    width: calc(100% + 10px);
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      transparent 0px,
      var(--main-bg-color) 1px,
      transparent 2px
    );
    background-size: 2px 2px;
    background-repeat: repeat;
  }

  span {
    z-index: 10;
    font-size: 20px;
    position: relative;
    margin-right: auto;
    text-overflow: ellipsis;
    overflow-x: hidden;
    white-space: nowrap;
  }

  @media (max-width: 800px) {
    header {
      padding: 20px 20px 0;
    }

    h1,
    span {
      font-size: 14px;
    }
  }

  input {
    position: absolute;

    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;

    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  .alert {
    position: fixed;
    top: 100px;
    right: 40px;
    z-index: 1000;
    display: inline-block;
    padding: 10px;
    font-size: 16px;
    text-transform: uppercase;
    background: var(--main-bg-color);
    border: 1px solid var(--dark-bg-color);
    border-radius: 10px;
    box-shadow: 0 1px 0 var(--main-bg-color), 0 2px 0 var(--accent-color),
      0 3px 0 var(--main-bg-color), 0 4px 0 var(--accent-color);
  }
</style>

<header>
  <h1>tunnel_</h1>
  <span>{name}</span>
  <input type="text" bind:this={copyInput} />
  {#if $userName}
    <Button text="Copy link" on:click={onCopyClick} />
  {/if}
  {#if isLinkCoped}
    <span class="alert" in:fly={{ y: 200 }} out:fly={{ y: -200 }}>
      Link copied
    </span>
  {/if}
</header>
