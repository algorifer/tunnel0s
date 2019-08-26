<script>
  // Libs
  import Room from "ipfs-pubsub-room";
  import IPFS from "ipfs";

  // Utils
  import ipfsConfig from "./utils/ipfsConfig";
  import createBuffer from "./utils/createBuffer";

  // Svelte
  import { onMount } from "svelte";

  // Stores
  import { userID, isUserRoot } from "./stores/user";
  import {
    ipfs,
    tunnel,
    tunnelName,
    tunnelMessages,
    tunnelID,
    tunnelSubscribe,
    tunnelPeers
  } from "./stores/tunnels";

  // Components
  import ViewPort from "./components/ViewPort.svelte";

  // Events
  const addMessage = msg =>
    tunnelMessages.update(messages => [
      ...messages,
      { ...msg, id: messages.length }
    ]);

  const initApp = () => {
    // Create IPFS
    ipfs.set(new IPFS(ipfsConfig));
    // Setup IPFS
    $ipfs.once(`ready`, () => {
      // Get userID
      $ipfs.id((err, info) => {
        if (err) throw err;

        userID.set(info.id);
      });

      // Create tunnel
      tunnel.set(Room($ipfs, $tunnelID));

      // Tunnel Events ~ Peer joined
      $tunnel.on(`peer joined`, peer => {
        addMessage({ from: peer, type: `system`, text: `Peer joined` });
      });

      // Tunnel Events ~ Send Welcome Message
      $tunnel.on(`peer joined`, peer =>
        $tunnel.sendTo(
          peer,
          createBuffer({ type: `welcome`, tunnelName: $tunnelName })
        )
      );

      // Tunnel Events ~ Peer left
      $tunnel.on(`peer left`, peer => {
        addMessage({ from: peer, type: `system`, text: `Peer left` });
      });

      // Tunnel Events ~ Add Listener Messages
      $tunnel.on(`message`, message => {
        const data = JSON.parse(message.data);
        const { type, name, text } = data;
        tunnelPeers.set($tunnel.getPeers());

        if (type === `welcome` && $isUserRoot === false) {
          tunnelName.set(data.tunnelName);
        } else if (type === `welcome` && $isUserRoot === true) {
          return;
        }

        addMessage({ from: message.from, type, name, text });
      });

      $tunnel.on(`subscribed`, () => tunnelSubscribe.set(true));

      window.addEventListener(`unload`, async () => await $tunnel.leave());
    });
  };
</script>

<ViewPort on:createId={initApp} />
