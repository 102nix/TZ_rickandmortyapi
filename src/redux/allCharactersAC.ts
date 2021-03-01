import { 
  CardType, 
  DataResponseType, 
  DropUpdateType, 
  GetAllCharactersSagaType, 
  getCharactersType, 
  SetCaracterIdType, 
  SetCurrentCardType, 
  SetFatchingType } from "../types/allCharactersStoreType"
import { DROP_UPDATE, GET_ALL_CHARACTER_SAGA, GET_CHARACTERS, SET_CHARACTER_ID, SET_CURRENT_CARD, SET_FETCHING } from "./allCharactersReducer"

export const getCharacters = (payload: DataResponseType): getCharactersType => ({type: GET_CHARACTERS, payload})
export const setFetching = (payload: boolean): SetFatchingType => ({type: SET_FETCHING, payload})
export const setCharacterId = (payload: number): SetCaracterIdType => ({type: SET_CHARACTER_ID, payload})
export const getAllCharactersSaga = (val: string = 'https://rickandmortyapi.com/api/character'): GetAllCharactersSagaType => ({type: GET_ALL_CHARACTER_SAGA, val})
export const setCurrentCard = (card: CardType): SetCurrentCardType => ({type: SET_CURRENT_CARD, card})
export const dropUpdate = (dropResult: Array<CardType>): DropUpdateType => ({type: DROP_UPDATE, dropResult}) 