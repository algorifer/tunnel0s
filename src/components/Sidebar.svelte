<script>
  // Components
  import SidebarWrapper from "../elements/SidebarWrapper";
  import Title from "../elements/Title.svelte";
</script>

<style>
  p {
    margin: 10px 0;
    padding-left: 20px;
    text-align: right;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    text-align: right;
  }

  li {
    margin-bottom: 8px;
  }

  .sep {
    margin: auto 0;
  }
</style>

<SidebarWrapper>
  <p>Decentralized chat</p>
  <p>Powered by</p>
  <ul>
    <li>
      <a href="https://svelte.dev/" target="_blank">Svelte</a>
    </li>
    <li>
      <a href="https://chr15m.github.io/bugout/" target="_blank">bugout</a>
    </li>
  </ul>
  <div class="sep" />
  <Title text="v01" />
  <p>
    Create by
    <a href="https://twitter.com/person0b" target="_blank">person0b</a>
  </p>
  <p>OpenSource</p>
  <ul>
    <li>
      <a href="#https://github.com/person0b/tunnel0s" target="_blank">GITHUB</a>
    </li>
  </ul>
</SidebarWrapper>
