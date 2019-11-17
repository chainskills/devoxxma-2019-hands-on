import React, {useState, useEffect} from "react";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

import Account from "./components/Account";
import Information from "./components/Information";
import Greetings from "./components/Greetings";
import ServiceFee from "./components/ServiceFee";
import Events from "./components/Events";

import "./App.css";

const App = ({drizzleContext}) => {
  const {drizzleState, drizzle, initialized} = drizzleContext;
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(0);
  const [owner, setOwner] = useState(null);
  const [earnings, setEarnings] = useState(0);
  const [enable, setEnable] = useState(false);

  const [greetingsKey, setGreetingsKey] = useState(null);
  const [serviceFee, setServiceFee] = useState(0);

  useEffect(() => {
    M.AutoInit();

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (initialized) {
      async function fetchAccount() {
        const currAccout = drizzleState.accounts[0];
        const currBalance = await drizzle.web3.eth.getBalance(currAccout);

        setAccount(currAccout);
        setBalance(drizzle.web3.utils.fromWei(currBalance, "ether"));

        M.CharacterCounter.init(
          document.querySelectorAll(".has-character-counter")
        );

        const {Greetings} = drizzle.contracts;

        // TODO: Initialize state variables
        // setGreetingsKey(/* cache call greetings message */);

        // setServiceFee(/* get service fee */);

        // setOwner(/* get contract owner */);

        // setEarnings(/* get balance of the contract */);

        // setEnable(/* get enable status */);
      }
      fetchAccount();
    }
    // eslint-disable-next-line
  }, [initialized, drizzleState]);

  if (!initialized || account === null) {
    return (
      <div className="container">
        <h2>Preparing the Dapp ...</h2>
      </div>
    );
  }

  // detect account changes from Metamask
  window.ethereum.on("accountsChanged", function(accounts) {
    // reload the page to refresh all context
    window.location.reload();
  });

  // prepare ...
  let currentGreetings = null;
  if (greetingsKey !== null) {
    // TODO get greetings from cache
    /* retrieve greetings value only if data is ready */
  }

  return (
    <div className="container">
      <div className="row">
        <Account
          drizzle={drizzle}
          enable={enable}
          account={account}
          owner={owner === account ? true : false}
          balance={balance}
        />

        <div className="col m8 greetings-data">
          <Information
            drizzle={drizzle}
            greetings={currentGreetings}
            serviceFee={drizzle.web3.utils.toBN(
              serviceFee !== null ? serviceFee : 0
            )}
            account={account}
            earnings={earnings}
            owner={owner === account ? true : false}
          />
          <Greetings
            drizzle={drizzle}
            account={account}
            serviceFee={drizzle.web3.utils.toBN(
              serviceFee !== null ? serviceFee : 0
            )}
          />

          {owner === account && (
            <ServiceFee
              drizzle={drizzle}
              account={account}
              serviceFee={drizzle.web3.utils.toBN(
                serviceFee !== null ? serviceFee : 0
              )}
            />
          )}
        </div>
      </div>
      <div className="row">
        <div className="col s12 m8 push-m4 greetings-data">
          <Events drizzle={drizzle} owner={owner === account ? true : false} />
        </div>
      </div>
    </div>
  );
};

export default App;
