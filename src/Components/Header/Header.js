import React, {useContext, useState} from 'react'
import style from './Header.module.css'
import {Link} from 'react-router-dom'
import {BiMenu} from 'react-icons/bi'
import {CollectionContext} from '../../collectionContext/collectionContext'
const Header =  ()=> {

  const [showMenu, setShowMenu] = useState(false);

  let NavClasses = [style.Nav]

  const toggleMenu = ()=>{
    setShowMenu(!showMenu);
  }

  if(showMenu){
    NavClasses = [style.Nav, style.toggleMenu]
  }

  return (
      <div className={style.Header}>

        <div className={style.Logo}>
          <h3>Easy<span>Study</span></h3>
        </div>

        <BiMenu className={style.BurgerMenu} onClick={toggleMenu}/>
        <nav className={NavClasses.join(' ')}>
          <ul className={style.NavList}>
            <Link className={style.NavItem} to='/' onClick={toggleMenu}>
              <li>Home</li>
            </Link>
            <Link className={style.NavItem} to='/about' onClick={toggleMenu}>
              <li>About</li>
            </Link>
            <Link className={style.NavItem} to='/newcollection' onClick={toggleMenu}>
              <li>Add Collections</li>
            </Link>
            <Link className={style.NavItem} to='/viewcollections' onClick={toggleMenu}>
              <li>view Collections</li>
            </Link>
          </ul>
        </nav>
      </div>
  );
}
export default Header;
