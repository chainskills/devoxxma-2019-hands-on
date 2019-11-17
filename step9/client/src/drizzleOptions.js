import Greetings from "./contracts/Greetings.json";

const drizzleOptions = {
  web3: {
    fallback: {
      type: "ws",
      url: "ws://127.0.0.1:8545"
    }
  },
  contracts: [Greetings],
  events: {
    ChainBizz: ["GreetingsChangedEvent", "NewServiceFeeEvent"]
  }
};

export default drizzleOptions;
