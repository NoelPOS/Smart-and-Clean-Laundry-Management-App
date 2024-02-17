import React from 'react';
import "./ReceiptCard.css"


function ReceiptCard({ cartItems, removeFromCart, incrementCount, decrementCount, cartTotal }) {
  return (
    <div className='receiptcard-container'>
      <h2 className='receipt-label'>List of items</h2>
      <table className="receipt-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Price per item</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {cartItems && cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td><button onClick={() => incrementCount(index)}>+</button>  {item.count}  <button onClick={() => decrementCount(index)}>-</button></td>
                <td>
                <button onClick={() => removeFromCart(index)}>Remove</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No items in the cart</td>
            </tr>
          )}
        </tbody>
      </table>
      <p>Total: ${cartTotal}</p>

    </div>
  );
}

export default ReceiptCard;
