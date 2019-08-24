<script>
  import { fly } from "svelte/transition";
  export let text;
  let scrollY;
</script>

<style>
  .sys {
    position: relative;
    width: 100%;
    text-align: center;
    margin: 10px auto;
  }

  p {
    margin: 0;
    color: #989898;
    font-size: 12px;
  }
</style>

<svelte:window bind:scrollY />

<li
  class="sys"
  transition:fly={{ y: 200, duration: 500 }}
  on:introstart={() => window.scrollTo({
      top: scrollY + 1000,
      left: 0,
      behavior: 'smooth'
    })}>
  <p>{text}</p>
</li>
