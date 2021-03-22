import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import './Characters.scss';
//types:
import { CardType } from '../../types/storeAllCharactersType'
import { AppStateType } from '../../redux/store';
//AC's:
import { 
  getAllCharactersSaga, 
  setFetching,
  setCharacterId, 
  setCurrentCard, 
  dropUpdate } from '../../redux/allCharactersAC'
import { sortsEl } from '../../sort'

export const Characters: React.FC = () => {

  const history = useHistory()
  const dispatch = useDispatch()
  const info = useSelector((state: AppStateType) => state.allCharactersReducer.info)
  const results = useSelector((state: AppStateType) => state.allCharactersReducer.results)
  const status = useSelector((state: AppStateType) => state.allCharactersReducer.status)
  const isFetching = useSelector((state: AppStateType) => state.allCharactersReducer.isFetching)
  const currentCard = useSelector((state: AppStateType) => state.allCharactersReducer.currentCard)

  useEffect(() => {
    dispatch(getAllCharactersSaga())
    window.addEventListener('scroll', scrollHandler)

    return () => window.removeEventListener('scroll', scrollHandler)    
  }, [])

  const scrollHandler = () => {
    if (
      Math.ceil(window.innerHeight + document.documentElement.scrollTop) !== document.documentElement.offsetHeight ||
      isFetching
    )
      return

    dispatch(setFetching(true))
  }

  useEffect(() => {
    if (!isFetching) return;
    dispatch(getAllCharactersSaga(info.next!))
  }, [isFetching])

  const aboutCharacterHandler = (id: number) => {
    dispatch(setCharacterId(id))
    history.push('/about')
  }

  const dragStartHandler = (card: CardType) => {
    dispatch(setCurrentCard(card))
  }
  const dragOverHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }
  const dropHandler = (event: React.DragEvent<HTMLDivElement>, card: CardType) => {
    
    event.preventDefault() 

    const dropResults: Array<CardType> = results?.map((element: CardType) => {
      if (element.id === card.id) return {...element, id: currentCard.id}
      if (element.id === currentCard.id) return {...element, id: card.id}
      return element
    })

    dispatch(dropUpdate(dropResults))
  }

  return (
    <div className="container">
      {status === 200 &&
        results?.sort(sortsEl).map(characker => { 
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
  )
}



