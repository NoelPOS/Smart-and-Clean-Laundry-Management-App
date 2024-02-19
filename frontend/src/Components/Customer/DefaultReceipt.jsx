import React from 'react';
import './DefaultReceipt.css';


function DefaultReceipt({ cartItems, cartTotal }) {
  const sampleItems = [
    { name: 'Pajamas', price: 55, count: 2 },
    { name: 'Sweater', price: 56, count: 1 },
    { name: 'Jeans', price: 89, count: 3 }
  ];

  // Combine sample items with cart items
  const allItems = [...sampleItems];

  return (
    <div className='cus-receiptcard-container'>
      <h2 className='cus-receipt-label'>List of items</h2>
      <table className="cus-receipt-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Price per item</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
            {/* allItems ny yr mhr cartItems htae  */}
          {allItems && allItems.length > 0 ? (
            allItems.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td> {item.count}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No items in the cart</td>
            </tr>
          )}
        </tbody>
      </table>
      <p className='cus-rtable-total'>Total: 200 baht</p>
      {/* <p className='cus-rtable-total'>Total: {cartTotal} baht</p> */}
    </div>
  );
}

export default DefaultReceipt;