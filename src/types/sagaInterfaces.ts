import { Action } from 'redux'
import { AxiosResponse } from 'axios'
import { InitialStateType } from './storeAllCharactersType'
import { InitialStateAboutCharacterType } from './storeAboutCharactersType'

export interface IfetchAllCharacters extends Action {
  val: string
  getScrollCharacters (val: string): Promise<AxiosResponse<any>>
}

export interface IfetchAboutCharacter extends Action {
  id: number
  getAboutCharacter (id: number): Promise<AxiosResponse<any>>
}

export type ResponseGetScrollCharacters = {
  config: any,
  data: InitialStateType,
  headers: any,
  request: any,
  status: number,
  statusText: string
}
export type ResponseFetchAboutCharacter = {
  config: any
  data: InitialStateAboutCharacterType
  headers: any,
  request: any,
  status: number,
  statusText: string
}