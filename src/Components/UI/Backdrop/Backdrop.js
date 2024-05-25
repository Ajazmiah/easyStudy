
import React,{useContext} from 'react'

import style from './Backdrop.module.css'
import {CollectionContext} from '../../../collectionContext/collectionContext'


const Backdrop = (props)=>{
  const {setShowForm, showForm} = useContext(CollectionContext)

  return(
    showForm ? <div className={style.Backdrop} onClick={()=>setShowForm(prev => !prev)}></div> : null
  )
}
export default Backdrop
