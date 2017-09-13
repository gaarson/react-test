import { DEP, EMPLOYE } from "../consts/index";

export const departments = (store, action) => {
  switch (action.type) {
    case DEP.SUCCESS:
      return action.data;
    default:
        return store || [];
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
      console.log(action.success);
      return state;
    case EMPLOYE.CHANGE_DATA:
      console.log(action.data);
      return state;
    default:
      return state || {};
  }
};