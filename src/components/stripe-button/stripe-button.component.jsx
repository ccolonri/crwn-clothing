import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;

    const publishableKey = 'pk_test_kKhPtRJNY3p0a6yHF9lOvE6Y00RRtkLPT0';
    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }
    return (
        <StripeCheckout label="Pay Now"
            name='CRWN CLothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey} />
    );
}

export default StripeButton;