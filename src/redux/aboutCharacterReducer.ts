import { InitialStateAboutCharacterType, ActionsType, AboutChsConts } from "../types/storeAboutCharactersType"

let initialState: InitialStateAboutCharacterType = {
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

const aboutCharacterReducer = (state = initialState, action: ActionsType): InitialStateAboutCharacterType => {
  switch (action.type) {
    case AboutChsConts.GET_ABOUT_CHARACTER:
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

export default aboutCharacterReducer
