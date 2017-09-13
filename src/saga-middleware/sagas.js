import { fork, call, put, takeLatest } from 'redux-saga/effects';
import { dep } from './../actions';
import { DEP } from "../consts/index";
import * as req from './requests';

function * fetchDepartmentsUsers() {
  try {
    const data = yield call(req.getDepartmentsUsers);
    yield put(dep.success(data))
  } catch (error) {
    yield put(dep.error(error));
  }
}

function * watchFetchDepartmentsUsers () {
    yield takeLatest(DEP.PENDING, fetchDepartmentsUsers)
}

export default function* forks () {
    yield * [
      fork(watchFetchDepartmentsUsers)
    ];
}