<script>
  // Svelte
  import { fly } from "svelte/transition";

  // State
  export let text;
  export let root;
</script>

<style>
  li {
    display: flex;
    justify-content: flex-start;
    position: relative;
    width: 100%;
    margin: 10px auto;
  }

  li::after {
    content: "";
    position: absolute;
    top: 50%;
    display: block;
    width: 100%;
    height: 1px;
    border-bottom: 1px solid var(--alt-bg-color);
  }

  p {
    z-index: 10;
    padding: 0 5px;
    margin: 0;
    margin-left: 10px;
    font-size: 12px;
    color: var(--alt-text-color);
    white-space: nowrap;
    background: var(--bg-color);
  }
</style>

<li
  transition:fly={{ y: 200, duration: 300 }}
  on:introstart={() => window.scrollTo({
      top: root.scrollHeight,
      left: 0,
      behavior: 'smooth'
    })}>
  <p>{text}</p>
</li>
