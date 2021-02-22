import { put, call, takeEvery } from 'redux-saga/effects'
import { RickandmortyAPI } from '../../api/api'
import { getCharacters, setFetching, GET_ALL_CHARACTER_SAGA } from '../allCharactersReducer'

function* fetchAllCharacter (action) {
  try {
    const response = yield call (RickandmortyAPI.getScrollCharacters, action.val)
    yield put(getCharacters({
      info: response.data.info, 
      results: response.data.results, 
      status: response.status})
    )
    yield put(setFetching(false))
  } catch (err) {
    console.log(err)
  }
}

export function* allCharactersWatcher () {
  yield takeEvery(GET_ALL_CHARACTER_SAGA, fetchAllCharacter)
}