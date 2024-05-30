import React from 'react';
import { Link } from 'react-router-dom';

const SuccessMessage = ({ data }) => {
  return (
    <div className='success-msg'>
      Successfully Signed In <br />  
      <br />
      <p>Welcome User</p>
      <p>{data.msg}</p>
      <Link to="/">Home</Link>
    </div>
  );
}

export default SuccessMessage;
