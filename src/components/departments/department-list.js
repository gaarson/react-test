import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { dep } from './../../actions';
import './departments-list.css';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

const mapState = ({ departments }) => ({ departments });
const mapDispatch = dispatch => ({ getList: () => dispatch(dep.pending()) });

const DepartmentsList = ({ departments, getList }) => {
  !departments.length && getList();

  return (
    <div className="dep-list">
      <ListGroup>
        {
          departments.map(department => (
            <ListGroupItem key={department.id}>
              {department.name}
                <ul>
                  {
                    department.employes.map(employe => (
                      <li key={employe.id}>
                        <Link to={'/' + employe.id}>
                          {employe.first_name + ' ' + employe.last_name}
                        </Link>
                      </li>
                    ))
                  }
                </ul>
            </ListGroupItem>
          ))
        }
      </ListGroup>
    </div>
  )
}

export default connect(mapState, mapDispatch)(DepartmentsList);
