<script>
  // Svelte
  import { fly } from "svelte/transition";
</script>

<style>
  header {
    position: absolute;
    z-index: 11;
    padding: 20px;
    margin: 0;
    line-height: 1.4;
    color: var(--bg-color);
  }

  .title {
    position: relative;
    z-index: 10;
    display: inline-block;
    margin: 0 0 10px;
    padding: 10px 20px;
    padding-right: 0;
    font-weight: normal;
    font-style: italic;
    text-transform: uppercase;
  }

  .title::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
    display: block;
    width: 50%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      transparent 0px,
      var(--alt-text-color) 1px,
      transparent 2px
    );
    background-size: 2px 2px;
    background-repeat: repeat;
  }

  span {
    font-size: 40px;
  }

  p {
    margin: 10px 0;
    color: var(--alt-text-color);
  }

  ul {
    margin: 0;
    margin-top: -10px;
    padding: 0;
    list-style: none;
  }

  li {
    margin-bottom: 5px;
  }

  a {
    color: var(--alt-text-color);
    border-color: var(--bg-color);
  }

  @media (max-width: 800px) {
    header {
      z-index: 0;
    }
  }
</style>

<header>
  <span class="title">tunnel_</span>
  <span>0s</span>
  <p>Decentralized chat</p>
  <p>version 1.0.5</p>
  <p>Powered by</p>
  <ul>
    <li>
      <a href="https://svelte.dev/" target="_blank">Svelte</a>
    </li>
    <li>
      <a href="https://chr15m.github.io/bugout/" target="_blank">Bugout</a>
    </li>
  </ul>
  <p>
    Create by
    <a href="https://twitter.com/person0b" target="_blank">person0b</a>
  </p>
  <p>OpenSource</p>
  <ul>
    <li>
      <a href="#https://github.com/person0b/tunnel0s" target="_blank">GitHub</a>
    </li>
  </ul>
</header>
