import React from 'react';
import { useDispatch } from 'react-redux';
import { increment, decrement, removeitem } from '../Slices/Cartslice';

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="card mb-3 shadow-sm">
      <div className="row g-0">
        <div className="col-md-4 text-center bg-light">
          <img
            src={item.images[0]}
            alt={item.title}
            className="img-fluid p-3"
            style={{ height: '200px', objectFit: 'contain' }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.info}</p>
            <p className="card-text">
              <strong>₹{item.finalPrice}</strong>{' '}
              <del className="text-muted">₹{item.originalPrice}</del>
            </p>
            <p className="card-text">Quantity: {item.quantity}</p>
            <div className="d-flex gap-2">
              <button className="btn btn-outline-success" onClick={() => dispatch(increment(item))}>+</button>
              <button className="btn btn-outline-warning" onClick={() => dispatch(decrement(item))}>−</button>
              <button className="btn btn-outline-danger" onClick={() => dispatch(removeitem(item.id))}>Remove</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;