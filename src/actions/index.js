import {DEP, EMPLOYE} from './../consts';

export const dep = {
  pending: () => ({type: DEP.PENDING}),
  success: (data) => ({type: DEP.SUCCESS, data}),
  error: (error) => ({type: DEP.ERROR, error}),
  updateEmploye: (employe) => ({type: DEP.UPDATE_EMPLOYE, employe})
}

export const employe = {
  pending: (data, reqType) => ({type: EMPLOYE.PENDING, data, reqType}),
  success: (success) => ({type: EMPLOYE.SUCCESS, success}),
  error: (error) => ({type: EMPLOYE.ERROR, error}),

  changeData: (data) => ({type: EMPLOYE.CHANGE_DATA, data})
}