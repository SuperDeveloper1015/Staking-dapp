import React from 'react';
import classes from './AdminTesting.module.css';

const AdminTesting = (props) => {
  return (
    <div className={classes.for_testing}>
      <div className={classes.network}>
        <p>
          Selected Network: <b>{props.network.name}</b>
          &nbsp; id: <b>{props.network.id}</b>
        </p>
        <p>Contract Balance: {props.contractBalance} TestToken (Tst) </p>
        <p>Staking Contract address: {props.tokenStakingContract._address}</p>
      </div>
    </div>
  );
};

export default AdminTesting;
