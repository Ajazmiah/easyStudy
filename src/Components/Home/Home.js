import React from 'react'
import style from './Home.module.css'
import {Link} from 'react-router-dom'

const Home =  ()=> {
  return (
      <div className={style.Home}>
        <p className={style.P}>Create your own flash card collections to study for exams and quizes</p>
        <Link to='/newcollection'>
          <button className={`${style.Btn} ${style.Add}`}>Add collection</button>
        </Link>

        <Link to='/viewcollections'>
          <button className={`${style.Btn} ${style.View}`}>View Collection</button>
        </Link>

      </div>
  );
}
export default Home;
