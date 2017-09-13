import React from 'react';
import { connect } from 'react-redux';
import { employe } from "../../actions/index";
import './edit-employe.css';

const mapState = ({ departments }, {match: {params: {dep_id, id}}}) => {
  return {
    departments: departments.map(d => ({id: d.id, name: d.name})),
    employeData: departments.filter(d => d.id === +dep_id)[0].employes.filter(e => e.id === +id)[0]
  }
};

const mapDispatch = dispatch => ({
  changeData: (event, employeData) => {
    dispatch(employe.changeData(event.target.id));
    dispatch(employe.pending(employeData));
  }
});

const EditEmploye =
  ({
     employeData,
     changeData,
     departments
  }) => {
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
