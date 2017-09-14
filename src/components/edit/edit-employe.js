import React from 'react';
import { connect } from 'react-redux';
import { employe } from "../../actions/index";
import './edit-employe.css';

import {FormControl, Button} from 'react-bootstrap';

const mapState = ({ employeData, departments }, {match: {params: {id}}}) => ({
    params: {id},
    departments,
    employeData
});

const mapDispatch = dispatch => ({
  changeData: (event, employeData) => dispatch(employe.changeData(event.target)),
  getEmploye: (params, type) => dispatch(employe.pending(params, type))
});

const EditEmploye =
  ({
     employeData,
     departments,
     changeData,
     getEmploye,
     params
  }) => {
    (!Object.keys(employeData).length ||
      employeData.id !== +params.id) && getEmploye(params, 'GET');


    return (
      <div className="edit-employe">
        <div>
          <label htmlFor="first_name">
            <p>Имя</p>
            <FormControl
              type="text"
              className="employe-input"
              id="first_name"
              value={employeData.first_name || ""}
              onChange={(e) => changeData(e, employeData)}/>
          </label>
          <label htmlFor="second_name">
            <p>Фамилия</p>
            <FormControl
              type="text"
              className="employe-input"
              id="last_name"
              value={employeData.last_name || ""}
              onChange={(e) => changeData(e, employeData)}/>
          </label>
          <label htmlFor="department_id">
            <p>Действующий департамент</p>
            <select
              id="department_id"
              value={employeData.department_id}
              onChange={(e) => changeData(e, employeData)}
            >
              {
                departments.map(department => (
                  <option
                    key={department.id}
                    value={department.id}
                  >
                    {department.name}
                  </option>
                ))
              }
            </select>
          </label>
            <Button
              className="update"
              type="submit"
              value="Update"
              onClick={() => getEmploye(employeData, 'POST')}
            >Обновить данные сотрудника</Button>
        </div>
      </div>
    )
};

export default connect(mapState, mapDispatch)(EditEmploye);
