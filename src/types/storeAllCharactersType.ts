import { actions } from "../redux/allCharactersAC"

export enum AllChsConts {
  GET_CHARACTERS = 'GET_CHARACTERS',
  SET_FETCHING = 'SET_FETCHING',
  SET_CHARACTER_ID = 'SET_CHARACTER_ID',
  GET_ALL_CHARACTER_SAGA = 'GET_ALL_CHARACTER_SAGA',
  SET_CURRENT_CARD = 'SET_CURRENT_CARD',
  DROP_UPDATE = 'DROP_UPDATE',
}

export type InfoType = {
  count: number
  pages: number
  next: null | string
  prev: null | string
}
export type DataResponseType = {
  info: InfoType
  results: Array<CardType> 
  status: number
}
export type CardType = {
  id: null | number
  name: string
  status: string
  species: string
  type: string
  gender: string
  location: {
    name: string
    url: string
  },
  image: string
  url: string
}
export type InitialStateType = {
  info: InfoType
  results: Array<CardType>
  status: number
  isFetching: boolean
  characterId: number
  currentCard: CardType
}

type PropertiesType<T> = T extends { [key: string]: infer U }? U : never
export type ActionsType = ReturnType<PropertiesType<typeof actions>>
