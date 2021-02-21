import { all } from 'redux-saga/effects'
import { aboutCharacterWatcher } from './aboutCharacterSaga'
import { allCharactersWatcher } from './allCharactersSaga'

export function* rootWatcher () {
  yield all ([aboutCharacterWatcher(), allCharactersWatcher()])
}
