
import React, { useState } from 'react';
import InventoryForm from './InventoryForm';
import SupplierList from './SupplierList';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';

const initialItems = [
  { id: 1, name: 'Item A', quantity: 10, category: 'Category 1', supplier: 'Supplier X' },
  { id: 2, name: 'Item B', quantity: 2, category: 'Category 2', supplier: 'Supplier Y' },
];

const initialSuppliers = [];

function Dashboard() {
  const [items, setItems] = useState(initialItems);
  const [suppliers, setSuppliers] = useState(initialSuppliers);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [itemToEdit, setItemToEdit] = useState(null);
  const navigate = useNavigate();

  const addItem = (item) => {
    setItems([...items, item]);
    alert(`${item.name} added successfully!`);
  };

  const deleteItem = (id) => {
    const itemToDelete = items.find(item => item.id === id);
    setItems(items.filter(item => item.id !== id));
    alert(`${itemToDelete.name} deleted successfully!`);
  };

  const updateItem = (updatedItem) => {
    setItems(items.map(item => item.id === updatedItem.id ? updatedItem : item));
    alert(`${updatedItem.name} updated successfully!`);
  };

  const handleEditItem = (item) => {
    setItemToEdit(item);
    navigate('/'); // Navigate back to the dashboard
  };

  const filteredItems = items.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory ? item.category === filterCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container text-center">
      <Header /> {/* Corrected Header usage */}
      <h2 className="mt-4">Inventory Items</h2>
      <InventoryForm onAddItem={addItem} itemToEdit={itemToEdit} onUpdateItem={updateItem} />
      
      <div className="mt-3">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Search by item name" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <select 
          className="form-control mt-2" 
          value={filterCategory} 
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {[...new Set(items.map(item => item.category))].map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="row justify-content-center mt-5">
        {filteredItems.map(item => (
          <div key={item.id} className="col-sm-4 col-md-4 mb-5">
            <div className='card bg-dark text-light'>
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Quantity: {item.quantity}</p>
                <p className="card-text">Category: {item.category}</p>
                <p className="card-text">Supplier: {item.supplier}</p>
                <button onClick={() => handleEditItem(item)} className="btn btn-success me-2 mx-2">Edit</button>
                <button onClick={() => deleteItem(item.id)} className="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>


      <Link to="/view" className="btn btn-dark mb-5 mt-3" state={{ items }}>View All Items</Link>
    </div>
  );
}

export default Dashboard;
