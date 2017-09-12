import React from 'react';
import { connect } from 'react-redux';
import './departments-list.css';

const DepartmentsList = () =>
    <div className="dep-list">
        Departments List
    </div>

export default connect()(DepartmentsList);
