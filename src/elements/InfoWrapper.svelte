<style>
  aside {
    grid-area: info;
    width: 100%;
    padding: 20px 0;
  }

  div {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-right: 20px;
  }

  @media (max-width: 800px) {
    aside {
      display: none;
    }
  }
</style>

<aside>
  <div>
    <slot />
  </div>
</aside>
