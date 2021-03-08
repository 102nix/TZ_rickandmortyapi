export enum AboutChsConts {
  GET_ABOUT_CHARACTER = 'GET_ABOUT_CHARACTER',
  GET_ABOUT_CHARACTER_SAGA = 'GET_ABOUT_CHARACTER_SAGA'
}
export type InitialStateAboutCharacterType = {
  created: string
  episode: Array<string>
  gender: string
  id: null | number
  image: string
  location: {name: string, url: string}
  name: string
  origin: {name: string, url: string}
  species: string
  status: string
  type: string
}
export type ActionsType = getAboutCharacterType | getCharacterSagaType

export type getAboutCharacterType = {
  type: AboutChsConts.GET_ABOUT_CHARACTER
  payload: InitialStateAboutCharacterType
}
export type getCharacterSagaType = {
  type: AboutChsConts.GET_ABOUT_CHARACTER_SAGA
  id: number
}