import React,{useContext} from 'react'
import Header from './Components/Header/Header'
import NewCardForm from './Components/NewCardForm/newCardForm'
import Collections from './Components/Collections/Collections'
import SingleCollection from './Components/Collections/singleCollection/singleCollection'
import AddToCollection from './Components/addToCollection/addToCollection'
import About from './Components/About/About'
import Home from './Components/Home/Home'
import {Route} from 'react-router-dom'
import {CollectionContext} from './collectionContext/collectionContext'
import ColContext from './collectionContext/collectionContext'
import style from './App.module.css'


const App =() => {

  const {showForm} = useContext(CollectionContext)


  let Form = null
  if(showForm){Form = (<AddToCollection/>)}
  return (
    <div>
      {Form}
      <div>
        <Header/>
        <main className={style.Main}>
          <Route path='/' component={Home} exact/>
          <Route path='/newcollection' component={NewCardForm}/>
          <Route path='/viewcollections'component={Collections} exact/>
          <Route path='/about' component={About} exact/>
          <Route path='/collectionName:name' component={SingleCollection} exact/>
        </main>
        <footer className={style.Footer}>
          <div>All rights reserved &copy; 2021</div>
          <span>Developer by: </span>
          <a href="https://ajazmiah.com/">AJAZ MIAH</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
