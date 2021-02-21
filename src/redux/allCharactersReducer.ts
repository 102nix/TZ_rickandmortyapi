const GET_CHARACTER = 'GET_CHARACTER'
const SET_FETCHING = 'SET_FETCHING'
const SET_CHARACTER_ID = 'SET_CHARACTER_ID'
export const GET_ALL_CHARACTER_SAGA = 'GET_ALL_CHARACTER_SAGA'
const SET_CURRENT_CARD = 'SET_CURRENT_CARD'
const DROP_UPDATE = 'DROP_UPDATE'

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

let initialState: InitialStateType = {
  info: {
    count: 671,
    pages: 34,
    next: null,
    prev: null
  },
  results: [],
  status: 0,
  isFetching: false,
  characterId: 0,
  currentCard: 
    {
      id: null,
      name: '', 
      status: '',
      species: '',
      type: '',
      gender: '',
      location: {
        name: '',
        url: ''
      },
      image: '',
      url: '',
    }
}

const dataReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case GET_CHARACTER:
      return {
        ...state,
        info: Object.assign(state.info, action.payload.info),
        results: [...state.results, ...action.payload.results], 
        status: action.payload.status
      }
    case SET_FETCHING:
      return {
        ...state,
        isFetching: action.payload
      }
    case SET_CHARACTER_ID:
      return {
        ...state,
        characterId: action.payload
      }
    case SET_CURRENT_CARD:
      return {
        ...state,
        currentCard: action.card
      }
    case DROP_UPDATE:
      return {
        ...state,
        results: action.dropResult
      }
    default: return state
  }
}

type ActionsType = getRateType | SetFatchingType | SetCaracterIdType | SetCurrentCardType | DropUpdateType

type getRateType = {
  type: typeof GET_CHARACTER
  payload: DataResponseType
}
type SetFatchingType = {
  type: typeof SET_FETCHING
  payload: boolean
}
type SetCaracterIdType = {
  type: typeof SET_CHARACTER_ID 
  payload: number
}
type GetAllCharactersSagaType = {
  type: typeof GET_ALL_CHARACTER_SAGA 
  val: string
}
type SetCurrentCardType = {
  type: typeof SET_CURRENT_CARD
  card: CardType
}
type DropUpdateType = {
  type: typeof DROP_UPDATE
  dropResult: Array<CardType>
}

export const getCharacters = (payload: DataResponseType): getRateType => ({type: GET_CHARACTER, payload})
export const setFetching = (payload: boolean): SetFatchingType => ({type: SET_FETCHING, payload})
export const setCharacterId = (payload: number): SetCaracterIdType => ({type: SET_CHARACTER_ID, payload})
export const getAllCharactersSaga = (val: string = 'https://rickandmortyapi.com/api/character'): GetAllCharactersSagaType => ({type: GET_ALL_CHARACTER_SAGA, val})
export const setCurrentCard = (card: CardType): SetCurrentCardType => ({type: SET_CURRENT_CARD, card})
export const dropUpdate = (dropResult: Array<CardType>): DropUpdateType => ({type: DROP_UPDATE, dropResult}) 

export default dataReducer
