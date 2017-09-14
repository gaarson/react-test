import React from 'react';
import { connect } from 'react-redux';
import { employe } from "../../actions/index";
import './edit-employe.css';

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

          <input
            type="text"
            className="employe-input"
            id="first_name"
            value={employeData.first_name || ""}
            onChange={(e) => changeData(e, employeData)}/>
          <input
            type="text"
            className="employe-input"
            id="last_name"
            value={employeData.last_name || ""}
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

            <input
              type="submit"
              value="Update"
              onClick={() => getEmploye(employeData, 'POST')}
            />

        </div>
      </div>
    )
};

export default connect(mapState, mapDispatch)(EditEmploye);
