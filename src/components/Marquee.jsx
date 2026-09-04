import React from 'react';
import './Marquee.css';

const Marquee = () => {
  return (
    <div className="marquee-wrapper">
      <div className="marquee-content">
        <span>Together we can build Oru West Constituency through  &nbsp;&bull;&nbsp;&nbsp;</span>
        {/* <span>Oru West Constituency through &nbsp;&bull;&nbsp;&nbsp;</span> */}
        <span>Transparent Leadership &nbsp;&bull;&nbsp;&nbsp;</span>
        <span>Community Development &nbsp;&bull;&nbsp;&nbsp;</span>
        <span>Service and Accountability, and Sustainable Empowerment&nbsp;&bull;&nbsp;&nbsp;</span>
        {/* <span>and Sustainable Empowerment &nbsp;&bull;&nbsp;&nbsp;</span> */}
      </div>
    </div>
  );
};

export default Marquee;