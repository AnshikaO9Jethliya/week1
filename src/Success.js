import React from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';

function Success() {
  const location = useLocation();
  const { state } = location;

  return (
    <div className="success-container">
      <h2>Form Submitted Successfully!</h2>
      <div>
        <strong>First Name:</strong> {state.firstName}
      </div>
      <div>
        <strong>Last Name:</strong> {state.lastName}
      </div>
      <div>
        <strong>Username:</strong> {state.username}
      </div>
      <div>
        <strong>Email:</strong> {state.email}
      </div>
      <div>
        <strong>Phone Number:</strong> {state.phoneNumber}
      </div>
      <div>
        <strong>Country:</strong> {state.country}
      </div>
      <div>
        <strong>City:</strong> {state.city}
      </div>
      <div>
        <strong>Pan No.:</strong> {state.panNo}
      </div>
      <div>
        <strong>Aadhar No.:</strong> {state.aadharNo}
      </div>
    </div>
  );
}

export default Success;
