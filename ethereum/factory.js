import web3 from "./web3";
import CampaignFactory from "../ethereum/build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xc69C6e5B53DA7bBBF3ed6Cf8eFcfA47007a6234B"
);

export default instance;
