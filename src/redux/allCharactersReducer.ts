import { ActionsType, InitialStateType } from "../types/allCharactersStoreType"

export const GET_CHARACTERS = 'GET_CHARACTERS'
export const SET_FETCHING = 'SET_FETCHING'
export const SET_CHARACTER_ID = 'SET_CHARACTER_ID'
export const GET_ALL_CHARACTER_SAGA = 'GET_ALL_CHARACTER_SAGA'
export const SET_CURRENT_CARD = 'SET_CURRENT_CARD'
export const DROP_UPDATE = 'DROP_UPDATE'

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

const allCharactersReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case GET_CHARACTERS:
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

export default allCharactersReducer
