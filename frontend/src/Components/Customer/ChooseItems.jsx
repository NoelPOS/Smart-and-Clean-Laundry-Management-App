import React from 'react';
import CustomerHeader from '../Common/CustomerHeader';
import trouser from './photos/trouser.png';
import jacket from './photos/jacket.png';
import shirt from './photos/shirt.png';
import shorts from "./photos/shorts.png";
import sweater from "./photos/sweater.png";
import sweatshirt from "./photos/sweatshirt.png";
import tops from "./photos/tops.png";
import hoodie from "./photos/hoodie.png";
import polos from "./photos/polos.png";
import skirt from "./photos/skirt.png";
import dress from "./photos/dress.png";
import coat from "./photos/coat.png";
import pajamas from "./photos/pajamas.png";
import jeans from "./photos/jeans.png";
import bodysuit from "./photos/bodysuit.png";
import './ChooseItems.css'
import {Link} from 'react-router-dom';
import { useState } from 'react';


export default function ChooseItems(){
    const items = [
        {name: 'Pants',price: 30,image:<img className='cus-trouser' src={trouser} alt='pant'/>},
        {name: 'Jacket',price: 70,image:<img className='cus-jacket' src={jacket} alt='jacket'/>},
        {name: 'Shirt',price: 45,image:<img className='cus-shirt' src={shirt} alt='shirt'/>},
        {name: 'Sweater',price: 56,image:<img className='cus-sweater' src={sweater} alt='sweater'/>},
        {name: 'Shorts',price: 28,image:<img className='cus-shorts' src={shorts} alt='shorts'/>},
        {name: 'Sweat shirt',price: 39,image:<img className='cus-sweatshirt'src={sweatshirt} alt='sweatshirt'/>},
        {name: 'Polos',price: 23,image:<img className='cus-polos' src={polos} alt='polos'/>},
        {name: 'Hoodie',price: 58,image:<img className='cus-hoodie' src={hoodie} alt='hoodie'/>},
        {name: 'Tops',price: 23,image:<img className='cus-tops' src={tops} alt='tops'/>},
        {name: 'Skirt',price: 49,image:<img className='cus-skirt' src={skirt} alt='skirt'/>},
        {name: 'Coat',price: 79,image:<img className='cus-coat' src={coat} alt='coat'/>},
        {name: 'Dress',price: 50,image:<img className='cus-dress' src={dress} alt='dress'/>},
        {name: 'Pajamas',price: 55,image:<img className='cus-pajamas' src={pajamas} alt='pajamas'/>},
        {name: 'Jeans',price: 89,image:<img className='cus-jeans' src={jeans} alt='jeans'/>},
        {name: 'Bodysuit',price: 89,image:<img className='cus-bodysuit' src={bodysuit} alt='bodysuit'/>}
    ];
    
        const [cartItems, setCartItems] = useState([]);
    
        const addToCart = (item) => {
            const updatedCart = [...cartItems, {...item, count: 1}];
            setCartItems(updatedCart);
        };
    
        // const removeFromCart = (index) => {
        //     const updatedCart = [...cartItems];
        //     updatedCart.splice(index, 1);
        //     setCartItems(updatedCart);
        // };
    
        // const incrementCount = (index) => {
        //     const updatedCart = [...cartItems];
        //     updatedCart[index].count += 1;
        //     setCartItems(updatedCart);
        // };
    
        // const decrementCount = (index) => {
        //     const updatedCart = [...cartItems];
        //     if (updatedCart[index].count > 0) {
        //         updatedCart[index].count -= 1;
        //         setCartItems(updatedCart);
        //     }
        // };
    
        return (
            <div className='cus-chooseitems-div'>
                <CustomerHeader/>
                <h1 className='cus-chooseitems-label'>Choose your items here</h1>
            
                <div className="cus-grid-item-container">
                    {items.map((item, index) => (
                        <div className="cus-grid-item" key={index}>
                            <div className='item-img-container'>{item.image}</div>
                            <p>
                                Item - {item.name}<br></br>
                                Price - {item.price} baht<br></br>
                                <button onClick={() => addToCart(item)}>Add to Cart</button>
                            </p>
                        </div>
                    ))}
                </div>
                 
                 <div className='cus-btn-proceed-div'>
                    <Link to="/customer/Receipt"><button className='cus-btn-proceed'>Proceed</button></Link>
                 </div>
            </div>
        );
    }