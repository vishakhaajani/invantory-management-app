
import React, { useState, useEffect } from 'react';

function InventoryForm({ onAddItem, itemToEdit, onUpdateItem }) {
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState('');
  const [supplier, setSupplier] = useState('');

  useEffect(() => {
    if (itemToEdit) {
      setItemName(itemToEdit.name);
      setQuantity(itemToEdit.quantity);
      setCategory(itemToEdit.category);
      setSupplier(itemToEdit.supplier);
    } else {
      setItemName('');
      setQuantity(0);
      setCategory('');
      setSupplier('');
    }
  }, [itemToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: itemToEdit ? itemToEdit.id : Date.now(), 
      name: itemName,
      quantity,
      category,
      supplier,
    };

    if (itemToEdit) {
      onUpdateItem(newItem);
    } else {
      onAddItem(newItem);
    }

    setItemName('');
    setQuantity(0);
    setCategory('');
    setSupplier('');
  };

  return (
    <div className='d-flex justify-content-center mb-5'>
        <form onSubmit={handleSubmit} className="col-lg-7 mb-3 border p-5 bg-dark rounded">
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Item Name" value={itemName} onChange={(e) => setItemName(e.target.value)} required />
        <input type="number" className="form-control mt-2" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} required />
        <input type="text" className="form-control mt-2" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} required />
        <input type="text" className="form-control mt-2" placeholder="Supplier" value={supplier} onChange={(e) => setSupplier(e.target.value)} required />
      </div>
      <button type="submit" className="btn btn-light mt-4">{itemToEdit ? 'Update Item' : 'Add Item'}</button>
    </form>
    </div>
  );
}

export default InventoryForm;