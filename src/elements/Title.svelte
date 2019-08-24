<script>
  export let name = `0s`;
</script>

<style>
  .title {
    display: flex;
    align-items: baseline;
    margin: 0 auto 40px;
    font-weight: 100;
    font-size: 28px;
    font-style: italic;
    line-height: 1;
    text-shadow: none;
  }

  .subtitle {
    position: relative;
    z-index: 10;
    display: inline-block;
    margin-left: 30px;
  }

  .subtitle span {
    display: inline-block;
    padding: 10px;
    font-weight: normal;
    font-style: normal;
    border: 1px solid #ffffff;
    border-radius: 10px;
    text-shadow: 0 0 5px #cccccc;
    box-shadow: 0 0 5px #cccccc;
    background: #222222;
  }

  .subtitle::before,
  .subtitle::after {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    border: 1px solid #989898;
    border-radius: 10px;
    box-shadow: 0 0 5px #787878, inset 0 0 5px #787878;
  }

  .subtitle::before {
    top: -10%;
    right: 10%;
    z-index: -2;
    transform: scale(0.95);
  }

  .subtitle::after {
    top: -20%;
    right: 20%;
    z-index: -4;
    transform: scale(0.9);
  }
</style>

<h1 class="title">
  tunnel
  <span class="subtitle">
    <span>{name}</span>
  </span>
</h1>
