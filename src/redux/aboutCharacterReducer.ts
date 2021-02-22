const GET_ABOUT_CHARACTER = 'GET_ABOUT_CHARACTER'
export const GET_ABOUT_CHARACTER_SAGA = 'GET_ABOUT_CHARACTER_SAGA'

let initialState = {
  created: '',
  episode: [''],
  gender: '',
  id: null,
  image: '',
  location: {name: '', url: ''},
  name: '',
  origin: {name: '', url: ''},
  species: '',
  status: '',
  type: ''
}

export type InitialStateAboutCharacterType = typeof initialState

const aboutCharacterReducer = (state = initialState, action: ActionsType): InitialStateAboutCharacterType => {
  switch (action.type) {
    case GET_ABOUT_CHARACTER:
      return {
        ...state,
        created: action.payload.created,
        episode: action.payload.episode,
        gender: action.payload.gender,
        id: action.payload.id,
        image: action.payload.image,
        location: { name: action.payload.location.name, url: action.payload.location.url },
        name: action.payload.name,
        origin: { name: action.payload.origin.name, url: action.payload.origin.url },
        species: action.payload.species,
        status: action.payload.status,
        type: action.payload.type
      }
    default: return state
  }
}

type ActionsType = getAboutCharacterType | getCharacterSagaType

type getAboutCharacterType = {
  type: typeof GET_ABOUT_CHARACTER
  payload: InitialStateAboutCharacterType
}
type getCharacterSagaType = {
  type: typeof GET_ABOUT_CHARACTER_SAGA
  id: number
}

export const getCharacter = (payload: InitialStateAboutCharacterType): getAboutCharacterType => ({type: GET_ABOUT_CHARACTER, payload})
export const getCharacterSaga = (id: number): getCharacterSagaType => ({type: GET_ABOUT_CHARACTER_SAGA, id})

export default aboutCharacterReducer
