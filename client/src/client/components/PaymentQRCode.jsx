import React, { useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { saveAs } from 'file-saver'; // You'll need to install file-saver with `npm install file-saver`

const PaymentQRCode = ({ upiId, amount, name }) => {
  // UPI payment URL format
  const upiPaymentUrl = `upi://pay?pa=${upiId}&pn=${name}&am=${amount}&cu=INR`;

  // Reference to QR code canvas for downloading
  const qrRef = useRef(null);

  // Function to copy UPI ID to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(upiId).then(() => {
      alert('UPI ID copied to clipboard!');
    }, (err) => {
      console.error('Failed to copy UPI ID:', err);
    });
  };

  // Function to download QR code image
  const downloadQRCode = () => {
    if (qrRef.current) {
      qrRef.current.toDataURL('image/png').then((dataUrl) => {
        saveAs(dataUrl, 'payment-qr-code.png');
      });
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Pay ₹{amount} to {name}</h2>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <QRCodeCanvas value={upiPaymentUrl} size={256} ref={qrRef} />
        <button 
          onClick={downloadQRCode} 
          style={{ 
            position: 'absolute', 
            bottom: '10px', 
            right: '10px', 
            padding: '5px 10px', 
            fontSize: '14px', 
            cursor: 'pointer' 
          }}
        >
          Download QR Code
        </button>
      </div>
      <p>Scan the QR code to make the payment via UPI</p>
      <div style={{ marginTop: '10px' }}>
        <button 
          onClick={copyToClipboard} 
          style={{ 
            padding: '5px 10px', 
            fontSize: '14px', 
            cursor: 'pointer' 
          }}
        >
          Copy UPI ID
        </button>
      </div>
    </div>
  );
};

export default PaymentQRCode;
