import React,{useContext} from 'react'
import style from './Collections.module.css'
import Collection from './CollectionName/CollectionName'

import {CollectionContext} from '../../collectionContext/collectionContext'
import{BsTrash} from 'react-icons/bs'
import{MdAdd} from 'react-icons/md'
import {Link} from 'react-router-dom'
import Style from './Collections.module.css'

const Collections =  ({userCollections})=> {

const {Collectionstate, dispatch,setShowForm, showForm, setAddColName} = useContext(CollectionContext)
const names = []

for(let collection in Collectionstate){
  names.push(collection)
}

let collectionName;

const ShowForm = (name)=>{
  setShowForm(!showForm);
  setAddColName(name);
}

collectionName=names.map(name=>{
  return(
    <div key={name} className={Style.NameList}>
      <Collection colName={name}/>
      <span className={Style.onHover}>
        <Link to={'/collectionName'+name}>
          <span className={Style.View}>VIEW</span>
        </Link>
        <BsTrash className={Style.TrashCan} onClick={()=> dispatch({type:'onDeleteCollection', name})}/>
        <MdAdd className={Style.Add} onClick={()=> ShowForm(name)}/>
      </span>
    </div>
  )
})


  return (
      <div className={style.Collections}>
        <h4 className={style.H4}>{names.length > 0 ? `You have ${names.length} collection`
            : 'YOUR CURRENTLY HAVE NO COLLECTION'}
        </h4>

        <Link to='/newcollection'>
          <button className={`${style.AddBtn}`}>Add collection</button>
        </Link>
        <ul className={Style.NameLists}>
          {collectionName}
        </ul>
      </div>
  );
}
export default Collections;
