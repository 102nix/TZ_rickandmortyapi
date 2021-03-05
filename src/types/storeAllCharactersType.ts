import { 
  DROP_UPDATE, 
  GET_ALL_CHARACTER_SAGA, 
  GET_CHARACTERS, 
  SET_CHARACTER_ID, 
  SET_CURRENT_CARD, 
  SET_FETCHING } from "../redux/allCharactersReducer"

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
  type: typeof GET_CHARACTERS
  payload: DataResponseType
}
export type SetFatchingType = {
  type: typeof SET_FETCHING
  payload: boolean
}
export type SetCaracterIdType = {
  type: typeof SET_CHARACTER_ID 
  payload: number
}
export type GetAllCharactersSagaType = {
  type: typeof GET_ALL_CHARACTER_SAGA 
  val: string
}
export type SetCurrentCardType = {
  type: typeof SET_CURRENT_CARD
  card: CardType
}
export type DropUpdateType = {
  type: typeof DROP_UPDATE
  dropResult: Array<CardType>
}