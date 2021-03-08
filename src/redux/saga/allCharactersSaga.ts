import { put, call, takeEvery } from 'redux-saga/effects'
import { RickandmortyAPI } from '../../api/api' 
import { IfetchAllCharacters } from '../../types/sagaInterfaces'
import { AllChsConts } from '../../types/storeAllCharactersType'
import { getCharacters, setFetching } from '../allCharactersAC'

function* fetchAllCharacter (action: IfetchAllCharacters) {
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
  yield takeEvery(AllChsConts.GET_ALL_CHARACTER_SAGA, fetchAllCharacter)
}