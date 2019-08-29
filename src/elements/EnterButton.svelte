<script>
  // Svelte
  import { fly } from "svelte/transition";
  import { createEventDispatcher } from "svelte";

  // State
  export let text = "Button";

  // Events
  const dispatch = createEventDispatcher();
  function onClick() {
    dispatch("click", {});
  }
</script>

<style>
  button {
    position: relative;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin: auto;
    margin-left: auto;
    font-family: inherit;
    font-weight: bold;
    font-size: 20px;
    font-style: italic;
    line-height: 1;
    text-transform: uppercase;
    background: none;
    color: var(--text-color);
    border: none;
    cursor: pointer;
    transition: 0.3s;
  }

  button::before,
  button::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    z-index: -2;
    display: block;
    width: 100%;
    height: 100%;
    background: var(--accent-color);
    transform-origin: 100% 0;
    transform: scaleX(0.6);
    transition: 0.3s;
  }

  button::after {
    z-index: -1;
    background-image: linear-gradient(
      to bottom,
      transparent 0px,
      var(--bg-color) 1px,
      transparent 2px
    );
    background-size: 2px 2px;
    background-repeat: repeat;
    transition: 0.3s;
  }

  button:hover::before,
  button:hover::after {
    transform: scaleX(1);
  }
</style>

<button
  type="button"
  on:click={onClick}
  in:fly={{ x: 40, duration: 300 }}
  out:fly={{ duration: 0 }}>
  {text}
</button>
