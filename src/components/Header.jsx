import classNames from 'classnames';
import React from 'react'
import titlePng from '../assets/img/title.png';




const Header = () => {

  return (
    <div className={classNames('header')}>
        {/*<img src={titlePng} alt=""/>*/}
        <div>лого</div>
      <img src={titlePng} alt=""/>
      <h1>Турбина</h1>
      <div>Плеер</div>
    </div>
  )
}

export default Header