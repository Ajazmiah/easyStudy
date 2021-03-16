import React from 'react'
import Style from './CollectionName.module.css'



const Collection = (props)=> {

  return(
    <li>
      <h3>{props.colName}</h3>
    </li>
  )
}
export default Collection;
