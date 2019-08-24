<script>
  import { fly } from "svelte/transition";
  export let username;
  export let text;
  export let self = false;
  let show = false;
  let scrollY;
</script>

<style>
  .user,
  .self {
    position: relative;
    align-self: flex-start;
    margin: 10px 40px 0 0;
    padding: 6px 10px 12px;
    border: 1px solid #989898;
    border-radius: 5px;
    background: #222222;
    box-shadow: 0 0 3px #787878;
  }

  .self {
    margin: 10px 0 0 40px;
    align-self: flex-end;
    text-align: right;
  }

  .user::before,
  .self::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    display: block;
    width: 100%;
    height: 100%;
    border: 1px solid #989898;
    border-radius: 5px;
    box-shadow: 0 0 3px #787878, inset 0 0 3px #787878;
    transform-origin: 0% 100%;
    transform: scale(1);
    transition: 0.2s;
  }

  .self::before {
    transform-origin: 100% 100%;
  }

  .user.show::before {
    top: 5px;
    left: -5px;
    transform: scale(0.95);
  }

  .self.show::before {
    left: auto;
    right: -5px;
  }

  p {
    margin: 10px 16px 0;
    font-size: 14px;
    text-shadow: 0 0 3px #cccccc;
  }

  span {
    font-size: 12px;
    color: #989898;
  }

  span::before {
    content: "> ";
  }
</style>

<svelte:window bind:scrollY />

<li
  class="user"
  class:self
  class:show
  transition:fly={{ y: 200, duration: 500 }}
  on:introend={() => (show = true)}
  on:introstart={() => window.scrollTo({
      top: scrollY + 1000,
      left: 0,
      behavior: 'smooth'
    })}>
  <span class="username">{username}</span>
  <p>{text}</p>
</li>
