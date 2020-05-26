import React from 'react';
import { connect } from 'react-redux';
import {selectCartItems,selectCartTotal} from '../../redux/cart/cart.selector'
import {createStructuredSelector} from 'reselect'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeButton from '../../components/stripe-button/stripe-button.component'

import './checkout.styles.scss';


const CheckoutPage = ({cartItems,totalValue}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(item => <CheckoutItem key={item.id} cartItem={item}></CheckoutItem>)
        }
        <div className="total">
            <span>TOTAL: ${totalValue}</span>
        </div>
        <div className="test-warning">
        *Please use the following test credit card for payments*
        <br/>
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
        </div>
        <StripeButton price={totalValue}></StripeButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalValue: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);