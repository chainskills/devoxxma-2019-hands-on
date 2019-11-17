import React, {useState} from "react";

import "materialize-css/dist/css/materialize.min.css";

const ServiceFee = ({drizzle, account, serviceFee}) => {
  const [newFee, setNewFee] = useState(
    drizzle.web3.utils.fromWei(
      drizzle.web3.utils.toBN(serviceFee !== null ? serviceFee : 0, "ether")
    )
  );

  const onChange = e => {
    setNewFee(e.target.value);
  };

  const onSaveServiceFee = () => {
    // TODO: Save the new service fee
  };

  return (
    <div className="row">
      <div className="col m9 input-field">
        <input
          type="number"
          name="serviceFee"
          value={newFee}
          min={0}
          onChange={onChange}
          step={".01"}
        />
        <label htmlFor="price" className="active">
          Service fee in ETH
        </label>
      </div>
      <div className="col m3 input-field">
        <a
          href="#!"
          className="waves-effect waves-light btn left primary-content blue"
          onClick={() => onSaveServiceFee()}
          style={{margin: "5px"}}
        >
          Send
        </a>
      </div>
    </div>
  );
};

export default ServiceFee;
