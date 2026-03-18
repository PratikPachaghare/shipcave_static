import React from 'react';
import './TruckAnimation.css';
// Ensure your image is in this folder path
import truckImage from '../../assets/images/shipcave_truck.png'; 

const TruckAnimation: React.FC = () => {
  return (
    <div className="animation-container">
      <img 
        src={truckImage}
        alt="Shipcave Logistics Truck" 
        className="moving-truck" 
      />
      <div className="road">
        <div className="road-line"></div>
      </div>
    </div>
  );
};

export default TruckAnimation;