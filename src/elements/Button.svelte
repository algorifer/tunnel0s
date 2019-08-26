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
    min-height: 30px;
    padding: 10px;
    margin: 10px 0;
    margin-left: auto;
    font-family: inherit;
    font-weight: normal;
    font-size: 14px;
    font-style: italic;
    line-height: 1;
    text-transform: uppercase;
    background: none;
    color: var(--text-color);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
    white-space: nowrap;
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
    border-radius: 5px;
    transform-origin: 100% 0;
    transform: scaleX(0.6);
    transition: 0.3s;
  }

  button::after {
    z-index: -1;
    background-image: linear-gradient(
      to bottom,
      transparent 0px,
      var(--main-bg-color) 1px,
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
  transition:fly={{ delay: 0, duration: 300, x: 40, y: 0, opacity: 0 }}>
  {text}
</button>
