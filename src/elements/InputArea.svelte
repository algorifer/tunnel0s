<script>
  // Svelte
  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";

  // State
  export let placeholder;
  export let value;
  let textarea;

  $: if (textarea && value.length === 0) {
    textarea.style.height = `40px`;
  } else if (textarea) {
    textarea.style.height = `${textarea.scrollHeight}px`;
  }

  // Events
  onMount(() => textarea.focus());
  const dispatch = createEventDispatcher();
  function onInput(evt) {
    if (evt.keyCode === 13) {
      evt.preventDefault();
      if (value.length > 0) {
        dispatch("enter", {});
      }
    }
  }
</script>

<style>
  textarea {
    position: relative;
    z-index: 10;
    display: block;
    width: 100%;
    min-height: 20px;
    margin: 10px auto 15px;
    padding: 10px;
    font-family: inherit;
    font-weight: 100;
    font-size: 14px;
    border: none;
    background: var(--main-bg-color);
    border: 1px solid var(--dark-bg-color);
    color: #ffffff;
    transition: 0.3s;
    outline: none;
    border-radius: 5px;
    word-wrap: break-word;
    resize: none;
  }

  textarea:focus {
    border: 1px solid var(--med-bg-color);
  }
</style>

<textarea
  bind:this={textarea}
  type="text"
  bind:value
  row="0"
  on:keydown={onInput}
  {placeholder} />
