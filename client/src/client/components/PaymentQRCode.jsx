import React from 'react';
import QRCode from 'qrcode.react';

const PaymentQRCode = ({ upiId, amount, name }) => {
  // UPI payment URL format
  
  const upiPaymentUrl = `upi://pay?pa=${upiId}&pn=${name}&am=${amount}&cu=INR`;

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Pay ₹{amount} to {name}</h2>
      <QRCode value={upiPaymentUrl} size={256} />
      <p>Scan the QR code to make the payment via UPI</p>
    </div>
  );
};

export default PaymentQRCode;
