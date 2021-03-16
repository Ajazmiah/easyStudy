import React,{useState, useContext} from 'react'
import style from './addToCollection.module.css'
import Add from '../UI/Button/Button'
import Backdrop from '../UI/Backdrop/Backdrop'
import {CollectionContext} from '../../collectionContext/collectionContext'



const AddToCollection = () =>{

  const {dispatch,showForm,addColName} = useContext(CollectionContext)
  const [answerState, setAnswerState] = useState('');
  const [questionState, setQuestionState] = useState('')

  const cardAdded = (e)=>{
    e.preventDefault();
    if(questionState != '' && answerState !='')
      {
        dispatch({type:'onAddCardOnExistingCollection', answerState, questionState, addColName})
        setAnswerState('')
        setQuestionState('')
      }
    else{
        alert("question and answer filed can not be empy")
        return false
      }
  }
  return(
    <>
    <Backdrop showForm={showForm}/>
      <div className={style.formDiv}>
        <form>
          <input type='text'
                 placeholder='Enter Question'
                 value={questionState}
                 className={style.Input}
                 onChange={event =>setQuestionState(event.target.value)}/>
               <textarea type='text'
                 className={style.Textarea}
                 placeholder='Enter Answer'
                 value={answerState}
                 onChange={event => setAnswerState(event.target.value)}/>
          <Add clicked={event=>cardAdded(event)}>Add</Add>
        </form>
      </div>
    </>
  )
}

export default AddToCollection
