<script>
  // Svelte
  import { fly } from "svelte/transition";

  // State
  export let username;
  export let text;
  export let self = false;
  export let root;
</script>

<style>
  li {
    position: relative;
    padding: 20px;
    transition: background-color 0.2s;
  }

  li:hover {
    background: var(--hover-bg-color);
  }

  .meta {
    padding: 10px 0 0;
    font-size: 12px;
    border-top: 1px solid var(--alt-bg-color);
  }

  .name {
    font-weight: bold;
  }

  p {
    margin: 0;
    margin-bottom: 10px;
  }

  .self .name {
    color: var(--alt-text-color);
  }
</style>

<li
  class:self
  transition:fly={{ y: 40, duration: 200 }}
  on:introstart={() => window.scrollTo({
      top: root.scrollHeight,
      left: 0,
      behavior: 'smooth'
    })}>
  <p>{text}</p>
  <div class="meta">
    <span class="name">@{username}</span>
  </div>
</li>
