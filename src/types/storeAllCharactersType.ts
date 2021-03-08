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

export type ActionsType = getCharactersType | SetFatchingType | SetCaracterIdType | SetCurrentCardType | DropUpdateType

export type getCharactersType = {
  type: AllChsConts.GET_CHARACTERS
  payload: DataResponseType
}
export type SetFatchingType = {
  type: AllChsConts.SET_FETCHING
  payload: boolean
}
export type SetCaracterIdType = {
  type: AllChsConts.SET_CHARACTER_ID 
  payload: number
}
export type GetAllCharactersSagaType = {
  type: AllChsConts.GET_ALL_CHARACTER_SAGA 
  val: string
}
export type SetCurrentCardType = {
  type: AllChsConts.SET_CURRENT_CARD
  card: CardType
}
export type DropUpdateType = {
  type: AllChsConts.DROP_UPDATE
  dropResult: Array<CardType>
}