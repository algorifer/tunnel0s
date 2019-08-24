<script>
  import { fly } from "svelte/transition";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function onClick() {
    dispatch("click", {});
  }

  export let text = "Button";
  let show;
</script>

<style>
  .btn {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 40px;
    padding: 10px;
    margin: 0px auto 20px;
    font-family: inherit;
    font-weight: normal;
    font-size: 14px;
    line-height: 1;
    text-transform: uppercase;
    background: #222222;
    color: #ffffff;
    border: 1px solid #ffffff;
    border-radius: 5px;
    text-shadow: 0 0 5px #ccc;
    box-shadow: 0 0 2px #ccc;
    transition: 0.2s;
    cursor: pointer;
  }

  .btn::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -10;
    display: block;
    width: 100%;
    height: 100%;
    border: 1px solid #989898;
    background: #222222;
    border-radius: 5px;
    box-shadow: 0 0 2px #787878, inset 0 0 4px #787878;
    transition: 0.2s;
    transform: scale(1);
  }

  .show::before {
    top: 5px;
    transform: scale(0.98);
  }

  .btn:hover {
    box-shadow: 0 5px 5px -4px #ccc;
  }

  .btn:hover::before {
    opacity: 0;
  }
</style>

<button
  class="btn"
  class:show
  type="button"
  on:click={onClick}
  transition:fly={{ delay: 0, duration: 300, x: 0, y: 20, opacity: 0 }}
  on:introend={() => (show = true)}
  on:outrostart={() => (show = false)}>
  {text}
</button>
