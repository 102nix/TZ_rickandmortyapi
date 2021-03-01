import axios from 'axios';
import { InitialStateAboutCharacterType } from '../types/aboutCharactersType';
import { InitialStateType } from '../types/allCharactersStoreType';

const API_URL_CHARACTERS = 'https://rickandmortyapi.com/api/character'

export const RickandmortyAPI = {

  getScrollCharacters (value: string) {
    return axios.get<InitialStateType>(value)
  },
  getAboutCharacter (id: number) {
    return axios.get<InitialStateAboutCharacterType>(`${API_URL_CHARACTERS}/${id}`)
  }
}
