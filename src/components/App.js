import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import DepartmentsList from './departments/department-list';
import EditEmploye from './edit/edit-employe';

const App = () =>
  <Router>
    <div className="container">
        <Route path="/" component={DepartmentsList} />
        <Route path="/:id" component={EditEmploye} />
    </div>
  </Router>

export default App;
