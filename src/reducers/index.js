import { DEP, EMPLOYE } from "../consts/index";

export const departments = (state, action) => {
  switch (action.type) {
    case DEP.SUCCESS:
      return action.data;

    case DEP.UPDATE_EMPLOYE:

      let newState = state.map(d => {
        d.employes = d.employes.filter(e => action.employe.id !== e.id);
        return d;
      });
      let dep = newState.filter(d => action.employe.department_id === d.id)[0];
      dep.employes.map(e => action.employe.id === e.id ? action.employe : e);
      dep.employes.push(action.employe);

      return newState;

    default:
        return state || [];
  }
};

export const error = (state, action) => {
  switch (action.type) {
    case DEP.ERROR:
      return action.error;
    case EMPLOYE.ERROR:
      return action.error;
    default:
      return state || "";
  }
};

export const employeData = (state, action) => {
  switch (action.type) {
    case EMPLOYE.SUCCESS:
      return action.success;

    case EMPLOYE.CHANGE_DATA:
      return Object.assign(
          {},
          state,
          {[action.data.id]: action.data.value}
        );

    default:
      return state || {};
  }
};