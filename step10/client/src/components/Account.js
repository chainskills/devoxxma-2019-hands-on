import React, {useEffect} from "react";
import JazzIcon, {jsNumberForAddress} from "react-jazzicon";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

import "./Account.css";

const Account = ({drizzle, enable, owner, account, balance}) => {
  useEffect(() => {
    M.AutoInit();

    // eslint-disable-next-line
  }, []);

  const disableContract = () => {
    const {Greetings} = drizzle.contracts;
    Greetings.methods
      .disableContract()
      .send({from: account, gas: 500000})
      .on("error", err => {
        console.err(err);
      });
  };

  const enableContract = () => {
    const {Greetings} = drizzle.contracts;
    Greetings.methods
      .enableContract()
      .send({from: account, gas: 500000})
      .on("error", err => {
        console.err(err);
      });
  };

  return (
    <div className="col m4">
      <div className="avatar">
        <JazzIcon diameter={40} seed={jsNumberForAddress(account)} />
        <p className="account truncate">{account}</p>
        <p className="balance">{parseFloat(balance).toFixed(4)} ETH</p>
        {owner && enable && (
          <a
            href="#!"
            className="waves-effect waves-light btn left primary-content blue"
            style={{margin: "5px"}}
            onClick={() => disableContract()}
          >
            Disable
          </a>
        )}

        {owner && !enable && (
          <a
            href="#!"
            className="waves-effect waves-light btn left primary-content blue"
            style={{margin: "5px"}}
            onClick={() => enableContract()}
          >
            Enable
          </a>
        )}
      </div>
    </div>
  );
};

export default Account;
