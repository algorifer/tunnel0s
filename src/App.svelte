<script>
  import Room from "ipfs-pubsub-room";
  import createIPFS from "./utils/createIPFS";

  import { ipfs, ipfsId, username, userRoot } from "./stores/user";
  import {
    tunnel,
    tunnelName,
    tunnelMsgs,
    tunnelId,
    tunnelSubscribe
  } from "./stores/tunnels";

  import Title from "./elements/Title.svelte";
  import CreateTunnel from "./components/CreateTunnel.svelte";
  import UserName from "./components/UserName.svelte";
  import Tunnel from "./components/Tunnel.svelte";

  const addMsg = obj => {
    tunnelMsgs.update(m => [...m, obj]);
  };

  const initApp = () => {
    addMsg({ type: `sys`, text: `IPFS status: Start` });

    // Create IPFS
    ipfs.set(createIPFS());
    addMsg({ type: `sys`, text: `IPFS status: Create` });

    $ipfs.once(`ready`, () => {
      $ipfs.id((err, info) => {
        if (err) {
          throw err;
        }
        ipfsId.set(info.id);
        addMsg({
          type: `sys`,
          text: `IPFS node ready with address ${$ipfsId}`
        });
      });

      // Create tunnel
      $tunnel = Room($ipfs, $tunnelId);

      // For RootUser info
      if ($userRoot) {
        addMsg({ type: `sys`, text: `You create ${$tunnelName} tunnel!` });
        addMsg({
          type: `sys`,
          text: `Invite more people: ${window.location.origin}/#tunnel=${$tunnelId}`
        });
      }

      // Create tunnel events
      // Peer joined
      $tunnel.on(`peer joined`, peer => {
        addMsg({
          id: $tunnelMsgs.length + 1,
          from: peer,
          type: `sys`,
          text: `Peer ${peer} joined`
        });

        // Send welcome message
        $tunnel.sendTo(
          peer,
          Buffer.from(
            JSON.stringify({
              type: `sys`,
              tunnelName: $tunnelName,
              text: `You joined to ${$tunnelName} tunnel! \n Invite more people: ${window.location.origin}/#tunnel=${$tunnelId}`
            })
          )
        );
      });

      $tunnel.on(`peer joined`, peer => {
        $tunnel.sendTo(
          peer,
          Buffer.from(
            JSON.stringify({
              type: `sys`,
              tunnelName: $tunnelName,
              text: `You joined to ${$tunnelName} tunnel! \n Invite more people: ${window.location.origin}/#tunnel=${$tunnelId}`
            })
          )
        );
      });

      // Peer left
      $tunnel.on(`peer left`, peer =>
        addMsg({
          id: $tunnelMsgs.length + 1,
          from: peer,
          type: `sys`,
          text: `Peer ${peer} left`
        })
      );

      // Listen message
      $tunnel.on("message", message => {
        const { type, name, text } = JSON.parse(message.data);

        if (JSON.parse(message.data).tunnelName && $userRoot === false) {
          tunnelName.set(JSON.parse(message.data).tunnelName);
        } else if (JSON.parse(message.data).tunnelName && $userRoot === true) {
          return;
        }

        addMsg({
          id: $tunnelMsgs.length,
          from: message.from,
          type: type,
          name: name,
          text: text
        });
      });

      $tunnel.on("subscribed", () => tunnelSubscribe.set(true));
    });
  };
</script>

<style>
  .root {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    min-height: 100vh;
    margin: 0;
    padding: 40px;
  }
</style>

<main class="root">
  <Title name={$tunnelName} />
  {#if $tunnelId === null}
    <CreateTunnel on:createId={initApp} />
  {:else if $username.length === 0}
    <UserName />
  {:else}
    <Tunnel />
  {/if}
</main>
