import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import ShopHeader from '../Common/ShopHeader';
import './LaundryItems.css';

export default function LaundryItems() {
    const { id } = useParams();
    const [itemList, setItems] = useState([]);
    const [quantities, setQuantities] = useState({});

    const getItems = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/shop/getItems');
            setItems(response.data);
            const initialQuantities = {};
            response.data.forEach(item => {
                initialQuantities[item.item_id] = 0;
            });
            setQuantities(initialQuantities);
        } catch (err) {
            alert(err);
        }
    };

    useEffect(() => {
        getItems();
    }, []);
    console.log(quantities)

    const handleIncrement = itemId => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [itemId]: prevQuantities[itemId] + 1
        }));
    };

    const handleDecrement = itemId => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [itemId]: Math.max(0, prevQuantities[itemId] - 1)
        }));
    };

    

    const addToCart = async item => {
        try {
            await axios.post('http://localhost:8080/api/shop/placeOrderItems', {
              order_id: id,
              quantity: quantities[item.item_id],
              selling_price: item.price,
              item_id: item.item_id
            });
            alert('Order items are placed successfully!');
            setQuantities(prevQuantities => ({
                ...prevQuantities,
                [item.item_id]: 0
            }))
            } catch (error) {
            console.error('Error placing order items:', error);
            alert('Error placing order items. Please try again.');
        };
    }

    return (
        <div className='cus-chooseitems-div'>
            <ShopHeader />
            <h1 className='cus-chooseitems-label'>Choose your items here</h1>
            <div className="cus-grid-item-container">
                {itemList.map(item => (
                    <div className="cus-grid-item" key={item.item_id}>
                        {/* <img src={item.image} alt={item.item_title} /> */}
                        <p>
                            Item - {item.item_title}<br />
                            Price - {item.price} baht<br />
                            Quantity: {quantities[item.item_id]}<br />
                            <button onClick={() => handleIncrement(item.item_id)}>+</button>
                            <button onClick={() => handleDecrement(item.item_id)}>-</button>
                            <button onClick={() => addToCart(item)}>Add to Cart</button>
                        </p>
                    </div>
                ))}
            </div>
            <div className='cus-btn-proceed-div'>
                <Link to={`/shop/checkitems/${id}`}><button className='cus-btn-proceed'>Proceed</button></Link>
            </div>
        </div>
    );
}

