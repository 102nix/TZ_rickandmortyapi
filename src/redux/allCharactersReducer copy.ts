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
export type ResultType = typeof initialState.results
export type DataResponseType = {
  info: InfoType
  results: ResultType
  status: number
}
export type CardType = {
  id: number
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

let initialState = {
  info: {
    count: 671,
    pages: 34,
    next: null,
    prev: null
  },
  results: [
    {
      id: 0,
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
  ],
  status: 0,
  isFetching: false,
  characterId: 0,
  currentCard: 
    {
      id: 0,
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

export type InitialStateType = typeof initialState

const dataReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case GET_CHARACTER:
      return {
        ...state,
        info: Object.assign(state.info, action.payload.info),
        results: [...action.payload.results], 
        // results: action.payload.results, 
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
  dropResult: ResultType
}

export const getCharacters = (payload: DataResponseType): getRateType => ({type: GET_CHARACTER, payload})
export const setFetching = (payload: boolean): SetFatchingType => ({type: SET_FETCHING, payload})
export const setCharacterId = (payload: number): SetCaracterIdType => ({type: SET_CHARACTER_ID, payload})
export const getAllCharactersSaga = (val: string = 'https://rickandmortyapi.com/api/character'): GetAllCharactersSagaType => ({type: GET_ALL_CHARACTER_SAGA, val})
export const setCurrentCard = (card: CardType): SetCurrentCardType => ({type: SET_CURRENT_CARD, card})
export const dropUpdate = (dropResult: ResultType): DropUpdateType => ({type: DROP_UPDATE, dropResult}) 

export default dataReducer
