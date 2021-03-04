import { Action } from 'redux'
import { AxiosResponse } from 'axios'

export interface IfetchAllCharacters extends Action {
  val: string
  getScrollCharacters (val: string): Promise<AxiosResponse<any>>
}

export interface IfetchAboutCharacter extends Action {
  id: number
  getAboutCharacter (id: number): Promise<AxiosResponse<any>>
}