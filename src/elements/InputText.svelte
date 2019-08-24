<script>
  import { createEventDispatcher } from "svelte";

  export let placeholder;
  export let value;

  const dispatch = createEventDispatcher();

  function onInput(evt) {
    if (evt.keyCode === 13) {
      dispatch("enter", {});
    }
  }
</script>

<style>
  .input {
    position: relative;
    z-index: 100;
    width: 100%;
    min-height: 40px;
    margin: 20px auto;
    padding: 10px;
    font-family: inherit;
    font-weight: 100;
    font-size: 14px;
    border: none;
    background: #282828;
    color: #ffffff;
    border-radius: 5px;
    transition: 0.3s;
    outline: none;
  }

  .input:focus {
    background: #383838;
    box-shadow: 0 5px 5px -4px #787878;
  }
</style>

<input
  class="input"
  type="text"
  bind:value
  {placeholder}
  on:keydown={onInput} />
