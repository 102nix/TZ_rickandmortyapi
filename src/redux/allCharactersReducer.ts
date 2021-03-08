import { ActionsType, AllChsConts, InitialStateType } from "../types/storeAllCharactersType"

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
    case AllChsConts.GET_CHARACTERS:
      return {
        ...state,
        info: Object.assign(state.info, action.payload.info),
        results: [...state.results, ...action.payload.results], 
        status: action.payload.status
      }
    case AllChsConts.SET_FETCHING:
      return {
        ...state,
        isFetching: action.payload
      }
    case AllChsConts.SET_CHARACTER_ID:
      return {
        ...state,
        characterId: action.payload
      }
    case AllChsConts.SET_CURRENT_CARD:
      return {
        ...state,
        currentCard: action.card
      }
    case AllChsConts.DROP_UPDATE:
      return {
        ...state,
        results: action.dropResult
      }
    default: return state
  }
}

export default allCharactersReducer
