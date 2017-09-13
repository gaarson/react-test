import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { dep } from './../../actions';
import './departments-list.css';

const mapState = ({ departments }) => ({ departments });
const mapDispatch = dispatch => ({ getList: () => dispatch(dep.pending()) });

const DepartmentsList = ({ departments, getList }) => {
  !departments.length && getList();

  return (
    <div className="dep-list">
      <ul>
        {
          departments.map(department => (
            <li key={department.id}>
              {department.name}
                <ul>
                  {
                    department.employes.map(employe => (
                      <li key={employe.id}>
                        <Link to={'/' + department.id + '/' + employe.id}>
                          {employe.first_name + ' ' + employe.last_name}
                        </Link>
                      </li>
                    ))
                  }
                </ul>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default connect(mapState, mapDispatch)(DepartmentsList);
