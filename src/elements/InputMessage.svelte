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
  div {
    display: flex;
    width: 100%;
    padding: 10px;
    background: var(--alt-bg-color);
    color: var(--alt-text-color);
    border-radius: 5px;
  }

  div::before {
    content: ">";
    margin-right: 5px;
  }

  textarea {
    display: block;
    width: 100%;
    font-family: inherit;
    font-weight: 100;
    border: none;
    background: var(--alt-bg-color);
    color: var(--text-color);
    transition: 0.3s;
    outline: none;
    word-wrap: break-word;
    resize: none;
  }
</style>

<div>
  <textarea
    bind:this={textarea}
    type="text"
    bind:value
    row="0"
    on:keydown={onInput}
    {placeholder} />
</div>
