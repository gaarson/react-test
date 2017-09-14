import { fork, call, put, takeLatest } from 'redux-saga/effects';
import { dep, employe } from './../actions';
import {DEP, EMPLOYE} from "../consts/index";
import * as req from './requests';

function * fetchEmployeData({reqType, data}) {
  try {
    const employeData = yield call(req.employeData, data, reqType);

    yield put(employe.success(employeData));
    if(reqType === "POST") yield put(dep.updateEmploye(employeData));
  } catch (error) {
    yield put(employe.error(error));
  }
}

function * fetchDepartmentsUsers({type, employe}) {
  try {
    const data = yield call(req.getDepartmentsUsers);
    yield put(dep.success(data))
  } catch (error) {
    yield put(dep.error(error));
  }
}

function * watchFetchDepartmentsUsers () {
    yield takeLatest(DEP.PENDING, fetchDepartmentsUsers);
}

function * watchFetchEmployeData () {
  yield takeLatest(EMPLOYE.PENDING, fetchEmployeData);
}

export default function* forks () {
    yield * [
      fork(watchFetchDepartmentsUsers),
      fork(watchFetchEmployeData),
    ];
}