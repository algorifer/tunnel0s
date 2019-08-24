import Room from 'ipfs-pubsub-room';

export default (ipfs, tunnelId) => {
  const tunnel = Room($ipfs, tunnelId);
  return tunnel;
};
