import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import EditItem from './EditItem';
import ViewItems from './ViewItems';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

function App() {
  return (
    <Router>  
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/edit" element={<EditItem />} />
          <Route path="/view" element={<ViewItems />} />
        </Routes>
    </Router>
  );
}

export default App;