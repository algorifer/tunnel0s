<script>
  // State
  export let text;
</script>

<style>
  h2 {
    position: relative;
    z-index: 10;
    width: 100%;
    margin: 20px auto;
    padding-right: 20px;
    font-weight: bold;
    font-size: 20px;
    font-style: italic;
    text-transform: uppercase;
    text-align: right;
    white-space: nowrap;
  }

  h2::before {
    content: "";
    position: absolute;
    top: 50%;
    display: block;
    width: 100%;
    /* height: 6px; */
    height: 60%;
    z-index: -1;
    /* margin-top: -4.5px; */
    background-image: linear-gradient(
      to bottom,
      var(--main-bg-color) 0px,
      var(--dark-bg-color) 1px,
      var(--main-bg-color) 2px
    );
    background-size: 2px 2px;
    background-repeat: repeat;
    /* border-radius: 5px; */
  }
</style>

<h2>{text}</h2>
