import * as IPFS from "ipfs";
import OrbitDB from "orbit-db";
import { DBModel } from "./types";

async function createDb() {
  const ipfs = await IPFS.create({
    start: true,
    EXPERIMENTAL: {
      pubsub: true,
    },
    config: {
      Addresses: {
        Swarm: [
          // Use IPFS dev signal server
          // "/dns4/star-signal.cloud.ipfs.team/wss/p2p-webrtc-star",
          // "/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star",
          // Use IPFS dev webrtc signal server
          // "/dns4/wrtc-star1.par.dwebops.pub/tcp/443/wss/p2p-webrtc-star/",
          // "/dns4/wrtc-star2.sjc.dwebops.pub/tcp/443/wss/p2p-webrtc-star/",
          // "/dns4/webrtc-star.discovery.libp2p.io/tcp/443/wss/p2p-webrtc-star/",
          // Use local signal server
          // '/ip4/0.0.0.0/tcp/9090/wss/p2p-webrtc-star',
        ],
      },
    },
  });

  const orbitdb = await OrbitDB.createInstance(ipfs);

  const db = await orbitdb.docstore<DBModel>("delegate_list");
  await db.load();
  return db;
}

export default createDb;
