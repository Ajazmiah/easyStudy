import React, { useContext, useMemo, useState, useEffect } from "react";
import PropTypes from "prop-types";
import style from "./singleCollection.module.css";

import MainDisplay from "./CardMainDisplay";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import{MdAdd} from 'react-icons/md'
import { BsTrash } from "react-icons/bs";
import { CollectionContext } from "../../../collectionContext/collectionContext";

const SingleComponent = React.memo((props) => {
  const colName = props.match.params.name;
  const { Collectionstate, dispatch,setShowForm, showForm, setAddColName } = useContext(CollectionContext);
  const [viewCard, setViewCard] = useState({});
  const [position, setPosition] = useState(1);
  const [translate, setTranslate] = useState(0);

  let mainDisplay = null;
  let display = <h4>NO MORE CARD IN THIS COLLECTION</h4>;

  useEffect(() => {
    leftArrow();
  }, [Collectionstate]);

  let len = Collectionstate[colName].length - 1;
  const rightArrow = () => {
    if (translate == -len) setTranslate(0);
    else setTranslate((prevTranslate) => prevTranslate - 1);
  };
  const leftArrow = () => {
    if (translate == 0) setTranslate(-len);
    else setTranslate((prevTranslate) => prevTranslate + 1);
  };

  const deleteCard = (i, colName, e) => {
    e.preventDefault();
    dispatch({ type: "onDeleteCard", i, colName });


  };
  const ShowForm = (name)=>{
    setShowForm(!showForm);
    setAddColName(name);
  }

  if (typeof Collectionstate[colName] !== "undefined") {
    if (Collectionstate[colName].length > 0) {

      mainDisplay = (
        <MainDisplay
          cards={Collectionstate[colName]}
          translate={translate}
          rightArrow={rightArrow}
          leftArrow={leftArrow}
        />
      );

      display = Collectionstate[colName].map((item, i) => (
        <li key={i} className={style.Card} onClick={() => setTranslate(-i)}>
          <div className={style.CardQuestion}>{item["question"]}</div>
          <div style={{ textAlign: "right" }}>
            <BsTrash
              className={style.Delete}
              onClick={(e) => deleteCard(i, colName, e)}
            />
          </div>
        </li>
      ));
    }
  }

  return (
    <>
      <h1 className={style.CollectionName}>{colName}</h1>
      <div className={style.Wrapper}>
        <MdAdd className={style.Add} onClick={()=> ShowForm(colName)}/>
        <ul className={style.cardLists}>
          {display}
        </ul>
        {mainDisplay}
      </div>
    </>
  );
});
export default SingleComponent;
