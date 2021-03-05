import { CardType, InfoType } from "./storeAllCharactersType"

export type AboutStateType = {
  characterId: number
}
export type AboutDispatchType = {
  getCharacterSaga(id: number): void
}

export type CharactersStateType = {
  results: Array<CardType>
  info: InfoType
  status: number
  isFetching: boolean
  currentCard: CardType 
}
export type CharactersDispatchType = {
  setFetching(value: boolean): void
  getAllCharactersSaga(val?: string): void
  setCharacterId(val: number): void
  setCurrentCard(card: CardType): void
  dropUpdate(dropResults: Array<CardType>): void
}
