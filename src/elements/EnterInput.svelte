<script>
  // Svelte
  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";

  // State
  export let placeholder;
  export let value;
  let input;

  // Events
  onMount(() => input.focus());

  const dispatch = createEventDispatcher();
  function onInput(evt) {
    if (evt.keyCode === 13) {
      dispatch("enter", {});
    }
  }
</script>

<style>
  input {
    display: block;
    width: 100%;
    min-height: 40px;
    margin-top: auto;
    padding: 10px;
    font-family: inherit;
    font-weight: normal;
    text-align: center;
    border: none;
    background: var(--text-color);
    color: var(--bg-color);
    transition: 0.3s;
    outline: none;
    word-wrap: break-word;
  }
</style>

<input
  type="text"
  bind:this={input}
  bind:value
  {placeholder}
  on:keydown={onInput} />
