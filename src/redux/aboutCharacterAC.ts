import { getAboutCharacterType, getCharacterSagaType, InitialStateAboutCharacterType } from "../types/storeAboutCharactersType"
import { GET_ABOUT_CHARACTER, GET_ABOUT_CHARACTER_SAGA } from "./aboutCharacterReducer"


export const getCharacter = (payload: InitialStateAboutCharacterType): getAboutCharacterType => ({type: GET_ABOUT_CHARACTER, payload})
export const getCharacterSaga = (id: number): getCharacterSagaType => ({type: GET_ABOUT_CHARACTER_SAGA, id})