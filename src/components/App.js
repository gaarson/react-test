import React, { Component } from 'react';
import './App.css';

import DepartmentsList from './departments/department-list';

class App extends Component {
  render() {
    return (
      <div className="container">
        <DepartmentsList />
      </div>
    );
  }
}

export default App;
