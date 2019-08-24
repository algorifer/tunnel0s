<script>
  export let text;
</script>

<style>
  .separator {
    display: flex;
    align-items: center;
    width: 80%;
    margin: 20px auto 0;
    text-align: center;
  }

  .separator span {
    display: inline-block;
    padding: 0 10px;
    font-weight: normal;
    font-size: 16px;
    font-style: italic;
    text-transform: uppercase;
    background: #222222;
    white-space: nowrap;
  }

  .separator::before,
  .separator::after {
    content: "";
    display: block;
    width: 100%;
    height: 4px;
    margin-top: -2px;
    border: 1px solid #989898;
    box-shadow: 0 0 2px #787878, inset 0 0 2px #787878;
    border-radius: 3px;
  }
</style>

<h2 class="separator">
  <span>{text}</span>
</h2>
