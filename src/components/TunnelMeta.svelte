<script>
  // Stores
  import { tunnelName, tunnelSeens, tunnelID } from "../stores/tunnels";

  // State
  let copyInput;
  let copyText = `copy link`;

  // Events
  const onCopyClick = () => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(`${window.location.origin}/#tunnel=${$tunnelID}`)
        .then(() => {
          copyText = `COPIED!`;
          const copyTime = setTimeout(() => {
            copyText = `copy link`;
            clearTimeout(copyTime);
          }, 2000);
        });
    } else {
      copyInput.current.select();
      document.execCommand("copy");
      copyInput.blur();
      copyText = `COPIED!`;
      const copyTime = setTimeout(() => {
        copyText = `copy link`;
        clearTimeout(copyTime);
      }, 2000);
    }
  };
</script>

<style>
  .meta {
    position: sticky;
    top: 0;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 20px 0 10px;
    background: var(--alt-bg-color);
  }

  h1 {
    margin: 0;
    margin-right: 10px;
    font-size: 14px;
    text-transform: uppercase;
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
  }

  button {
    margin: 0;
    padding: 0;
    font-family: inherit;
    font-weight: bold;
    font-size: 14px;
    color: var(--alt-text-color);
    background: none;
    border: none;
    transition: color 0.2s;
    white-space: nowrap;
    cursor: pointer;
  }

  button:hover {
    color: var(--accent-color);
  }

  .seens {
    margin-left: auto;
    color: var(--alt-text-color);
  }

  .sep {
    margin: 0 10px;
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

  @media (max-width: 720px) {
    .meta {
      padding: 10px 20px;
    }
  }
</style>

<div class="meta">
  <h1>
    {#if $tunnelName}{$tunnelName}{:else}tunnel_0s{/if}
  </h1>
  <input type="text" bind:this={copyInput} />
  <button class="seens">seens {$tunnelSeens.length}</button>
  <span class="sep">/</span>
  <button class="copy" on:click={onCopyClick}>{copyText}</button>
</div>
