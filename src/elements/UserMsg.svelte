<script>
  // Svelte
  import { fly } from "svelte/transition";

  // State
  export let username;
  export let text;
  export let self = false;
  export let root;

  $: animConfig = self ? { x: 200, duration: 300 } : { x: -200, duration: 300 };
</script>

<style>
  li {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: flex-start;
    margin: 5px 0;
    margin-right: 40px;
    padding: 5px 0;
  }

  li.self {
    margin-right: 0;
    margin-left: 40px;
    align-items: flex-end;
    align-self: flex-end;
  }

  li::before {
    content: "";
    position: absolute;
    top: 0;
    left: -10px;
    z-index: -1;
    display: block;
    width: 90%;
    height: 60%;
    background-image: linear-gradient(
      to bottom,
      var(--main-bg-color) 0px,
      var(--med-bg-color) 1px,
      var(--main-bg-color) 2px
    );
    background-size: 2px 2px;
    background-repeat: repeat;
    border-radius: 5px;
  }

  li.self::before {
    left: auto;
    right: -10px;
  }

  p {
    padding: 2px 3px;
    margin-top: 5px;
    font-size: 12px;
    background: var(--main-bg-color);
  }

  span {
    font-size: 12px;
  }
</style>

<li
  class:self
  transition:fly={animConfig}
  on:introstart={() => root.scrollTo({
      top: root.scrollHeight,
      left: 0,
      behavior: 'smooth'
    })}>
  <span>{username}</span>
  <p>{text}</p>
</li>
