export default {
  repo: `ipfs/tunnel0s/${Math.random()}`,
  EXPERIMENTAL: {
    pubsub: true
  },
  config: {
    Addresses: {
      Swarm: [
        `/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star`
      ]
    }
  }
};
