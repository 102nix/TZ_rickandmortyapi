import React from 'react';
import './Tech.scss';

export const Tech: React.FC = () => {
  
  return (
    <div className="tech">
      <div className="tech-title">Используемые технологии</div>
      <div className="tech-text">
        React, React-router-dom, React Function Components.<br/>
        React hooks, React-Typescript.<br/>
        Redux, Redux-saga, React-redux.<br/>
        CSS-стили написаны в sass, установлен node-sass.<br/>
        Axios.<br/>
      </div>

    </div>
  )
}
