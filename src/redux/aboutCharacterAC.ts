import { 
  AboutChsConts, 
  getAboutCharacterType, 
  getCharacterSagaType, 
  InitialStateAboutCharacterType } from "../types/storeAboutCharactersType"

export const getCharacter = (payload: InitialStateAboutCharacterType): getAboutCharacterType => ({type: AboutChsConts.GET_ABOUT_CHARACTER, payload})
export const getCharacterSaga = (id: number): getCharacterSagaType => ({type: AboutChsConts.GET_ABOUT_CHARACTER_SAGA, id})