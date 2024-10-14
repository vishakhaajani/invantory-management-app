
import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';

function ViewItems({ items }) {
  const location = useLocation();
  const { state } = location;

  return (
    <div className='container'>
      <div className="row">
      <Header/>
      <h3 className='my-4 text-center'>All Inventory Items</h3>
        {state?.items.map(item => (
          <div key={item.id} className="col-md-4 mb-3" >
              <div className="card-body"  >
            <div className='card bg-dark text-light p-3'>
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Quantity: {item.quantity}</p>
                <p className="card-text">Category: {item.category}</p>
                <p className="card-text">Supplier: {item.supplier}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewItems;