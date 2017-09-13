import React from 'react';
import { connect } from 'react-redux';
import { employe } from "../../actions/index";
import './edit-employe.css';

const mapState = ({ employeData }, {match: {params: {dep_id, id}}}) => ({
    params: {dep_id, id},
    employeData
});

const mapDispatch = dispatch => ({
  changeData: (event, employeData) => {
    dispatch(employe.changeData(event.target.id));
    dispatch(employe.pending(employeData));
  },
  getEmploye: (params) => (employe.pending(params))
});

const EditEmploye =
  ({
     employeData,
     changeData,
     departments,
     getEmloye
  }) => {
    getEmploye();

    return (
      <div className="edit-employe">
        <div>

          <input
            type="text"
            className="employe-input"
            id="first_name"
            value={employeData.first_name}
            onChange={(e) => changeData(e, employeData)}/>
          <input
            type="text"
            className="employe-input"
            id="last_name"
            value={employeData.last_name}
            onChange={(e) => changeData(e, employeData)}/>

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

        </div>
      </div>
    )
}

export default connect(mapState, mapDispatch)(EditEmploye);
