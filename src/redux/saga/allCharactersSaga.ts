import { put, call, takeEvery } from 'redux-saga/effects'
import { RickandmortyAPI } from '../../api/api' 
import { IfetchAllCharacters, ResponseGetScrollCharacters } from '../../types/sagaInterfaces'
import { AllChsConts } from '../../types/storeAllCharactersType'
import { actions } from '../allCharactersAC'

function* fetchAllCharacter (action: IfetchAllCharacters) {
  try {
    const response: ResponseGetScrollCharacters = yield call (RickandmortyAPI.getScrollCharacters, action.val) 
    yield put(actions.getCharacters({
      info: response.data.info, 
      results: response.data.results, 
      status: response.status})
    )
    yield put(actions.setFetching(false))
  } catch (err) {
    console.log(err) 
  }
}

export function* allCharactersWatcher () {
  yield takeEvery(AllChsConts.GET_ALL_CHARACTER_SAGA, fetchAllCharacter)
}