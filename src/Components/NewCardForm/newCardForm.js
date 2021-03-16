import React,{useState, useCallback, useMemo, useContext} from 'react'
import Button from '../UI/Button/Button'
import Add from '../UI/Button/Button'
import {CollectionContext} from '../../collectionContext/collectionContext'
import AddToCollection from '../addToCollection/addToCollection'
import { withRouter} from 'react-router-dom'
import style from './newCardForm.module.css'

const NewCardForm = React.memo(({onCollectionSubmit,history}) => {


const {Collectionstate, dispatch} = useContext(CollectionContext)
const [collectionNameState, setCollectionName] = useState('')
const [cardState , setCardState] = useState([])


const formSubmited =(event)=>{
  event.preventDefault();
  if(collectionNameState == '' || collectionNameState == null){
    alert("Please enter a collection name to proceeded.")
    return false;
  }
  else{
    setCollectionName('')
    setCardState([])
    dispatch({type:'onCollectionSubmit',collection:cardState,name:collectionNameState});
    history.push({
      pathname: '/viewcollections'
    })
    return true;
  }
}

  return (
      <div style={{height:'100vh'}}>
        <form onSubmit={(event)=> formSubmited(event)} className={style.Form}>
          <div className={style.collectionNameDiv}>
            <label> enter the collection name</label>
            <input type='text'
                   className={style.CollectionName}
                   placeholder='Collection Name..'
                   value={collectionNameState}
                   onChange={(event)=> setCollectionName(event.target.value)}/>
          </div>
          <br/>
          <div className={style.Buttons}>
            <Button>NEXT</Button>
          </div>
        </form>
      </div>
  );
}, (prevProps, nextProps)=>{
  if(prevProps.onCollectionSubmit !== nextProps.onCollectionSubmit){
    return false
  }else{
    return true
  }
})

export default withRouter(NewCardForm);
