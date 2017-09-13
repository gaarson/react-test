import {DEP, EMPLOYE} from './../consts';

export const dep = {
  pending: () => ({type: DEP.PENDING}),
  success: (data) => ({type: DEP.SUCCESS, data}),
  error: (error) => ({type: DEP.ERROR, error})
}

export const employe = {
  pending: (data) => ({type: EMPLOYE.PENDING, data}),
  success: (success) => ({type: EMPLOYE.SUCCESS, success}),
  error: (error) => ({type: EMPLOYE.ERROR, error}),

  changeData: (data) => ({type: EMPLOYE.CHANGE_DATA, data})
}