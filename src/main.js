import 'normalize.css';

import App from './App.svelte';

localStorage.debug = 'bugout';

const app = new App({
  target: document.body,
  props: {
    name: 'world'
  }
});

export default app;
