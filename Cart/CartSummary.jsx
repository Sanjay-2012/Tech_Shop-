import React from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from '../Slices/Cartslice';

function CartSummary({ totalPrice }) {
  const dispatch = useDispatch();

  return (
    <div className="text-end mt-4">
      <h4>Total Price: ₹{totalPrice}</h4>
      <button className="btn btn-danger mt-2" onClick={() => dispatch(clearCart())}>
        Clear Cart
      </button>
    </div>
  );
}

export default CartSummary;