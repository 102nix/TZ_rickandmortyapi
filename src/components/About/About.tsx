import React from 'react'
import './About.scss'

export const About: React.FC = () => {
  return(
    <div className="about">
      <div className="title-about">
        О проекте
      </div>
      <div className="content-about">
        <p>
          На основе API [https://rickandmortyapi.com/](https://rickandmortyapi.com/), реализовать React приложение,
          Lazy-список героев из мультсериала (lazy-список - список, в котором элементы подгружаются с бекенда частями).
          Т.е. когда скролл доходит до конца страницы - получаем следующую часть списка и т.д. 
          Пока у бекенда еще есть для нас данные.
          По нажатию на персонажа должен осуществляться переход на отдельную страницу с подробной информацией о нём.
        </p>
        <p>
          Каждого героя можно перетаскивать - менять местами др с др.  
        </p>
        <p> 
          Для управлением стейта использовать Redux, для асинхронных запросов Redux-Saga. 
          Для стилей использовать SCSS или StyledComponents.
        </p>
      </div>
    </div>
  )
}
