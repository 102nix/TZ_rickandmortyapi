import { AllChsConts, CardType, DataResponseType } from "../types/storeAllCharactersType"

const ALL_CHARACTERS: string = 'https://rickandmortyapi.com/api/character'

export const actions = {
  getCharacters: (payload: DataResponseType) => ({type: AllChsConts.GET_CHARACTERS, payload} as const),
  setFetching: (payload: boolean) => ({type: AllChsConts.SET_FETCHING, payload} as const),
  setCharacterId: (payload: number) => ({type: AllChsConts.SET_CHARACTER_ID, payload} as const),
  getAllCharactersSaga: (val: string = ALL_CHARACTERS) => ({type: AllChsConts.GET_ALL_CHARACTER_SAGA, val} as const),
  setCurrentCard: (card: CardType) => ({type: AllChsConts.SET_CURRENT_CARD, card} as const),
  dropUpdate: (dropResult: Array<CardType>) => ({type: AllChsConts.DROP_UPDATE, dropResult} as const) 
}
