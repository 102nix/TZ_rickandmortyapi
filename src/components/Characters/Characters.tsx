import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import './Characters.scss';
//types:
import { InfoType, CardType } from '../../types/allCharactersStoreType'
import { AppStateType } from '../../redux/store';
//AC's:
import { 
  getAllCharactersSaga, 
  setFetching,
  setCharacterId, 
  setCurrentCard, 
  dropUpdate } from '../../redux/allCharactersAC'
import { sortsEl } from '../../sort';

type DispatchPropsType = {
  setFetching(value: boolean): void
  getAllCharactersSaga(val?: string): void
  setCharacterId(val: number): void
  setCurrentCard(card: CardType): void
  dropUpdate(dropResults: Array<CardType>): void
}
type StatePropsType = {
  results: Array<CardType>
  info: InfoType
  status: number
  isFetching: boolean
  currentCard: CardType 
}

const Characters: React.FC<StatePropsType & DispatchPropsType> = props => {

  const history = useHistory()

  useEffect(() => {
    props.getAllCharactersSaga()
    window.addEventListener('scroll', scrollHandler)

    return () => window.removeEventListener('scroll', scrollHandler)    
  }, [])

  const scrollHandler = () => {
    if (
      Math.ceil(window.innerHeight + document.documentElement.scrollTop) !== document.documentElement.offsetHeight ||
      props.isFetching
    )
      return

    props.setFetching(true)
  }

  useEffect(() => {
    if (!props.isFetching) return;
    props.getAllCharactersSaga(props.info.next!)
  }, [props.isFetching])

  const aboutCharacterHandler = (id: number) => {
    props.setCharacterId(id)
    history.push('/about')
  }

  const dragStartHandler = (card: CardType) => {
    props.setCurrentCard(card)
  }
  const dragOverHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }
  const dropHandler = (event: React.DragEvent<HTMLDivElement>, card: CardType) => {
    
    event.preventDefault() 

    const dropResults: Array<CardType> = props.results?.map((element: CardType) => {
      if (element.id === card.id) return {...element, id: props.currentCard.id}
      if (element.id === props.currentCard.id) return {...element, id: card.id}
      return element
    })

    props.dropUpdate(dropResults)
  }

  return (
    <div className="container">
      {props.status === 200 &&
        props.results?.sort(sortsEl).map(characker => { 
          return (
            <div 
              className="card" 
              key={characker.id}
              draggable={true}
              onDragStart={() => dragStartHandler(characker)}
              onDragOver={(event: React.DragEvent<HTMLDivElement>) => dragOverHandler(event)}
              onDrop = {(event: React.DragEvent<HTMLDivElement>) => dropHandler(event, characker)}
            >
              <div className="img-container">
                <img src={characker.image} alt="" />
              </div>
              <div className="info-container">
                <div className="title" onClick={() => aboutCharacterHandler(characker.id || 0)}>
                  {characker.name}
                </div>
                <div className="status-species">
                  {characker.status} - {characker.species}
                </div>
                <div className="location">
                  <span>Last location: </span> {characker.location.name}
                </div>
              </div>
            </div>
          )
        })}
    </div>
  );
}
const mapStateToProps = (state: AppStateType): StatePropsType => {
  return {
    info: state.allCharactersReducer.info,
    results: state.allCharactersReducer.results,
    status: state.allCharactersReducer.status,
    isFetching: state.allCharactersReducer.isFetching,
    currentCard: state.allCharactersReducer.currentCard,
  }
}
const connector = connect(mapStateToProps, { getAllCharactersSaga, setFetching, setCharacterId, setCurrentCard, dropUpdate })
export default connector(Characters)
