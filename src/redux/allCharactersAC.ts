import { 
  AllChsConts,
  CardType, 
  DataResponseType, 
  DropUpdateType, 
  GetAllCharactersSagaType, 
  getCharactersType, 
  SetCaracterIdType, 
  SetCurrentCardType, 
  SetFatchingType } from "../types/storeAllCharactersType"

export const getCharacters = (payload: DataResponseType): getCharactersType => ({type: AllChsConts.GET_CHARACTERS, payload})
export const setFetching = (payload: boolean): SetFatchingType => ({type: AllChsConts.SET_FETCHING, payload})
export const setCharacterId = (payload: number): SetCaracterIdType => ({type: AllChsConts.SET_CHARACTER_ID, payload})
export const getAllCharactersSaga = (val: string = 'https://rickandmortyapi.com/api/character'): GetAllCharactersSagaType => ({type: AllChsConts.GET_ALL_CHARACTER_SAGA, val})
export const setCurrentCard = (card: CardType): SetCurrentCardType => ({type: AllChsConts.SET_CURRENT_CARD, card})
export const dropUpdate = (dropResult: Array<CardType>): DropUpdateType => ({type: AllChsConts.DROP_UPDATE, dropResult}) 