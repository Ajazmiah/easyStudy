import React,{useReducer, useState, useEffect} from 'react'
import App from '../App.js'


export const CollectionContext = React.createContext()

// const initialState = {};

const collectionReducer = (state, action)=>{
  switch (action.type) {
    case 'onCollectionSubmit':
      return{
        ...state,
        [action.name]: action.collection
     };
    case 'onDeleteCard':
      return deleteCard(state, action)
    break;

    case 'onDeleteCollection':
      return deleteCollection(state, action)
    case 'onAddCardOnExistingCollection':
      return addCard(state, action)
    case 'initiate':
      return state
    default:
      return state
    }
}
/// ON-ADDING CARD ON EXISTING COLLECTION
const addCard = (state,action)=>{

  const Name = action.addColName;

  let stateCopy = {...state};
  let collectionCopy = [...stateCopy[Name]]

  collectionCopy.push({
    question: action.questionState,
    answer: action.answerState
  })

  stateCopy[Name] = collectionCopy
  return{
    ...stateCopy
  }
}
///CARD INSIDE OF COLLECTION DELETE
const deleteCard = (state, action)=>{
  const Name = action.colName;
  let Key = action.i;

  let stateCopy = {...state};
  let newCollection = stateCopy[Name].filter((card,index)=> Key !== index)

  return{
    ...stateCopy,
    [action.colName]: newCollection
  }
}
//COLLECTION DELETE
const deleteCollection  = (state,action)=>{

  const Name = action.name
  let stateCopy = {...state}
  for(let key in stateCopy){
      if(Name == key){
        delete stateCopy[key]
        break;
      }
    }
return stateCopy
}


const ColContext = (props) => {
  const [showForm, setShowForm] = useState(false)
  const [addColName , setAddColName] = useState('')
  const [initialState, setInitialState] = useState({})

  const [Collectionstate, dispatch] = useReducer(collectionReducer,initialState, ()=>{
    const savedCollection = localStorage.getItem('collection');
    return savedCollection ? JSON.parse(savedCollection): {}
  })

  useEffect(()=>{
    localStorage.setItem('collection', JSON.stringify(Collectionstate))
  },[Collectionstate])

  return (
    <CollectionContext.Provider value={{Collectionstate:Collectionstate, dispatch:dispatch, showForm, setShowForm,setAddColName,addColName}}>
      {props.children}
    </CollectionContext.Provider>
  )
}

export default ColContext;
