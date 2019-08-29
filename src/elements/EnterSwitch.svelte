<script>
  // Svelte
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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    margin-top: 20px;
    font-weight: bold;
    font-size: 16px;
    color: var(--text-color);
    background: none;
    border: none;
    cursor: pointer;
    transition: transform 0.5s;
  }

  button::after {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    border-bottom: 2px solid var(--text-color);
    border-left: 2px solid var(--text-color);
    transform: rotate(-45deg);
    transition: transform 0.5s;
  }

  button:hover {
    transform: translateY(5px);
  }

  button:hover::after {
    transform: translateY(5px) rotate(-45deg);
  }
</style>

<button on:click={onClick}>{text}</button>
