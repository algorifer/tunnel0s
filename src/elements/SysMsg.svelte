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
    margin-top: -2px;
    display: block;
    width: 100%;
    height: 1px;
    border-bottom: 3px double var(--dark-bg-color);
  }

  p {
    z-index: 10;
    padding: 0 5px;
    margin-left: 10px;
    color: var(--med-f-color);
    font-size: 12px;
    white-space: nowrap;
    background: var(--main-bg-color);
  }
</style>

<li
  transition:fly={{ y: 200, duration: 300 }}
  on:introstart={() => root.scrollTo({
      top: root.scrollHeight,
      left: 0,
      behavior: 'smooth'
    })}>
  <p>{text}</p>
</li>
