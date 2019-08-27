<script>
  // Libs
  const Bugout = require("bugout");

  // Utils
  import ipfsConfig from "./utils/ipfsConfig";
  import createBuffer from "./utils/createBuffer";

  // Svelte
  import { onMount } from "svelte";

  // Stores
  import { userID, isServer, userName } from "./stores/user";
  import {
    tunnel,
    tunnelName,
    tunnelMessages,
    tunnelID,
    tunnelSeens
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
    // Create Tunnel
    if ($isServer) {
      // Init Server
      addMessage({ type: `system`, text: `Announcing...` });
      tunnel.set(new Bugout());
      tunnelID.set($tunnel.address());
      window.location.hash = `#tunnel=${$tunnelID}`;
      $tunnel.register(`seenwelcome`, (pk, args, cb) =>
        cb({ tunnelName: $tunnelName })
      );
    } else {
      // Init Seen
      addMessage({ type: `system`, text: `Connecting...` });
      tunnel.set(new Bugout($tunnelID));
      $tunnel.on(`server`, () => {
        $tunnel.rpc(`seenwelcome`, {}, res => tunnelName.set(res.tunnelName));
      });
    }

    userID.set($tunnel.address());
    tunnelSeens.update(seens => [
      ...seens,
      { id: $tunnel.address(), name: $userName }
    ]);

    // Send userName
    $tunnel.register(`reqname`, (pk, AbortSignal, cb) =>
      cb({ userName: $userName })
    );

    // On Join Seen
    $tunnel.on(`seen`, address =>
      $tunnel.rpc(address, `reqname`, {}, res => {
        tunnelSeens.update(seens => [
          ...seens,
          { id: address, name: res.userName }
        ]);
        console.log($tunnelSeens);
        addMessage({
          from: address,
          type: `system`,
          text: `${res.userName} join in tunnel_${$tunnelName}`
        });
      })
    );

    // On Left Seen Dont Work
    $tunnel.on(`left`, (count, address) => {
      console.log($tunnelSeens);
      console.log(address);
      tunnelSeens.update(seens => [
        ...seens.filter(seen => {
          console.log(address !== seen.id);
          if (address !== seen.id) return true;
          addMessage({
            from: address,
            type: `system`,
            text: `${seen.userName} left tunnel_${$tunnelName}`
          });
          return false;
        })
      ]);
    });

    $tunnel.on(`message`, (address, message) => {
      addMessage({
        from: address,
        type: `user`,
        name: $tunnelSeens.filter(seen => address === seen.id)[0].name,
        text: message
      });
    });
  };
</script>

<ViewPort on:initApp={initApp} />
