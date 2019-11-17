import React, {useEffect, useState} from "react";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

import "./Account.css";

const Information = ({
  drizzle,
  greetings,
  account,
  earnings,
  serviceFee,
  owner
}) => {
  useEffect(() => {
    M.AutoInit();

    // eslint-disable-next-line
  }, []);

  const onTransferEarning = () => {
    const {Greetings} = drizzle.contracts;

    Greetings.methods
      .transferEarning()
      .send({from: account, gas: 500000})
      .on("data", err => {
        console.err(err);
      });
  };

  return (
    <div className="row">
      <div className="col m12">
        <p>The current greetings is: {greetings}</p>
      </div>
      <div className="col m12">
        <p>
          The service fee is:{" "}
          {serviceFee !== null
            ? drizzle.web3.utils.fromWei(serviceFee, "ether")
            : null}{" "}
          ETH
        </p>
      </div>
      {owner && (
        <div>
          <div className="col m8">
            <p>
              Your earning is:{" "}
              {drizzle.web3.utils.fromWei(
                drizzle.web3.utils.toBN(earnings),
                "ether"
              )}{" "}
              ETH
            </p>
          </div>
          {earnings > 0 && (
            <div className="col m3">
              <a
                href="#!"
                className="waves-effect waves-light btn left primary-content blue"
                style={{margin: "5px"}}
                onClick={() => onTransferEarning()}
              >
                Transfer
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Information;
