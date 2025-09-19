import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import EmptyCart from './EmptyCart';
import LoginPage from '../HomePage/LoginPage';
import SignUp from '../HomePage/SignUp';

function Cart() {
  const items = useSelector(state => state.cart.items);
  const totalPrice = items.reduce((sum, item) => sum + item.finalPrice * item.quantity, 0);


  return (
    <div className="container py-4">
      <h2 className="text-center text-danger mb-4">🛍️ My Cart</h2>

      {items.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          {items.map(item => <CartItem key={item.id} item={item} />)}
          <CartSummary totalPrice={totalPrice} />
        </>
      )}

      <LoginPage />
      <SignUp />
    </div>
  );
}

export default Cart;