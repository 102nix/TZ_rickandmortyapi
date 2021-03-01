import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import './About.scss' 
//types:
import { InitialStateAboutCharacterType } from '../../types/aboutCharactersType'
import { AppStateType } from '../../redux/store'
//AC:
import { getCharacterSaga } from '../../redux/aboutCharacterAC'


type StatePropsType = {
  characterId: number
}
type DispatchProps = {
  getCharacterSaga(id: number): void
}
const About: React.FC<StatePropsType & DispatchProps & InitialStateAboutCharacterType> = props => {

  const history = useHistory()

  useEffect(() => {
    props.getCharacterSaga(props.characterId)
    if (props.characterId === 0) history.push('/')
  }, [])

  return (
    <div className="about">
      <div className="container">
        <div className="title">
          Character: <strong>{props.name}</strong>
        </div>
        <table className="table-character">
          <tbody>
            <tr>
              <td>id:</td><td>{props.id}</td>
            </tr>
            <tr>
              <td>name:</td><td>{props.name}</td>
            </tr>
            <tr>
              <td>status:</td><td>{props.status}</td>
            </tr>
            <tr>
              <td>species:</td><td>{props.species}</td>
            </tr>
            <tr>
              <td>type:</td><td>{props.type}</td>
            </tr>
            <tr>
              <td>gender:</td><td>{props.gender}</td>
            </tr>
            <tr>
              <td>origin:</td><td>{props.origin.name} {props.origin.url} </td>
            </tr>
            <tr>
              <td>location:</td><td>{props.location.name} {props.location.url} </td>
            </tr>
            <tr>
              <td>image:</td><td>{props.image}</td>
            </tr>
            <tr>
              <td>episode</td><td>{props.episode.map((ep, i) => {
                return (
                  <div className="episode-div" key={ep}>
                    <span>{i}</span> <strong>{ep}</strong>
                  </div>
                )
              })}</td>
            </tr>
            <tr>
              <td>image</td><td>{props.image}</td>
            </tr>
            <tr>
              <td>created:</td><td>{props.created}</td>
            </tr>
          </tbody>
        </table>
        <div className="go-back" onClick={() => history.push('/')}>&#8656;</div>
      </div>
    </div>
  )
}

const mapStateToProps = (state: AppStateType): StatePropsType & InitialStateAboutCharacterType => {
  return {
    characterId: state.allCharactersReducer.characterId,
    created: state.aboutCharacterReducer.created,
    episode: state.aboutCharacterReducer.episode,
    gender: state.aboutCharacterReducer.gender,
    id: state.aboutCharacterReducer.id,
    image: state.aboutCharacterReducer.image,
    location: state.aboutCharacterReducer.location,
    name: state.aboutCharacterReducer.name,
    origin: state.aboutCharacterReducer.origin,
    species: state.aboutCharacterReducer.species,
    status: state.aboutCharacterReducer.status,
    type: state.aboutCharacterReducer.type
  }
}
const connector = connect(mapStateToProps, { getCharacterSaga })
export default connector(About)
