import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import './Character.scss' 
//types:
import { AppStateType } from '../../redux/store'
//AC:
import { getCharacterSaga } from '../../redux/aboutCharacterAC'

export const Character: React.FC = () => {

  const history = useHistory()

  const dispatch = useDispatch()
  
  const characterId = useSelector((state: AppStateType) => state.allCharactersReducer.characterId)
  const created = useSelector((state: AppStateType) =>state.aboutCharacterReducer.created)
  const episode = useSelector((state: AppStateType) => state.aboutCharacterReducer.episode)
  const gender = useSelector((state: AppStateType) => state.aboutCharacterReducer.gender)
  const id = useSelector((state: AppStateType) => state.aboutCharacterReducer.id)
  const image = useSelector((state: AppStateType) => state.aboutCharacterReducer.image)
  const location = useSelector((state: AppStateType) => state.aboutCharacterReducer.location)
  const name = useSelector((state: AppStateType) => state.aboutCharacterReducer.name)
  const origin = useSelector((state: AppStateType) => state.aboutCharacterReducer.origin)
  const species = useSelector((state: AppStateType) => state.aboutCharacterReducer.species)
  const status = useSelector((state: AppStateType) => state.aboutCharacterReducer.status)
  const type = useSelector((state: AppStateType) => state.aboutCharacterReducer.type)

  useEffect(() => {
    dispatch(getCharacterSaga(characterId))
    if (characterId === 0) history.push('/')
  }, [])

  return (
    <div className="character">
      <div className="character__title">
        Character: <strong>{name}</strong>
      </div>
      <table className="character__table-character">
        <tbody>
          <tr>
            <td>id:</td><td>{id}</td>
          </tr>
          <tr>
            <td>name:</td><td>{name}</td>
          </tr>
          <tr>
            <td>status:</td><td>{status}</td>
          </tr>
          <tr>
            <td>species:</td><td>{species}</td>
          </tr>
          <tr>
            <td>type:</td><td>{type}</td>
          </tr>
          <tr>
            <td>gender:</td><td>{gender}</td>
          </tr>
          <tr>
            <td>origin:</td><td>{origin.name} {origin.url} </td>
          </tr>
          <tr>
            <td>location:</td><td>{location.name} {location.url} </td>
          </tr>
          <tr>
            <td>image:</td><td>{image}</td>
          </tr>
          <tr>
            <td>episode</td><td>{episode.map((ep, i) => {
              return (
                <div className="character__episode-div" key={ep}>
                  <span>{i}</span> <strong>{ep}</strong>
                </div>
              )
            })}</td>
          </tr>
          <tr>
            <td>image</td><td>{image}</td>
          </tr>
          <tr>
            <td>created:</td><td>{created}</td>
          </tr>
        </tbody>
      </table>
      <div className="character__go-back" onClick={() => history.push('/')}>&#8656;</div>
    </div>
  )
}
