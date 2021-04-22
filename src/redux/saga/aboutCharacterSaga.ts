import { put, takeEvery, call } from 'redux-saga/effects'
import { RickandmortyAPI } from '../../api/api'
import { getCharacter } from '../aboutCharacterAC'
import { IfetchAboutCharacter, ResponseFetchAboutCharacter } from '../../types/sagaInterfaces'
import { AboutChsConts } from '../../types/storeAboutCharactersType'

function* fetchAboutCharacter (action: IfetchAboutCharacter) {
  try {
    const response: ResponseFetchAboutCharacter = yield call(RickandmortyAPI.getAboutCharacter, action.id)
    console.log(response)
    yield put (getCharacter(response.data))
  } catch (err) {
    console.log(err)
  }
}

export function* aboutCharacterWatcher () {
  yield takeEvery(AboutChsConts.GET_ABOUT_CHARACTER_SAGA, fetchAboutCharacter) 
}