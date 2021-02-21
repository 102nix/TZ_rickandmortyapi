import { put, takeEvery, call } from 'redux-saga/effects'
import { RickandmortyAPI } from '../../api/api'
import { getCharacter, GET_ABOUT_CHARACTER_SAGA } from '../aboutCharacterReducer'

function* fetchAboutCharacter (action) {
  try {
    const response = yield call(RickandmortyAPI.getAboutCharacter, action.id)
    yield put (getCharacter(response.data))
  } catch (err) {
    console.log(err)
  }
}

export function* aboutCharacterWatcher () {
  yield takeEvery(GET_ABOUT_CHARACTER_SAGA, fetchAboutCharacter)
}