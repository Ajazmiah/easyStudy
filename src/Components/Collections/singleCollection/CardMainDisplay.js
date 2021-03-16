import React, {useEffect} from 'react'
import style from './singleCollection.module.css'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'

const CardMainDisplay = (props)=>{

  let trans = props.translate * 100;


  const styles = {
      transform: `translate(${trans}%)`,

  };

  let cards = props.cards;
  let flashCards =cards.map((card,i) =>(
        <div className={style.CurrentCardDiv} key={i} style={styles}>
          <div className={style.FlipCard}>
            <div className={`${style.CurrentCard} ${style.Front}`}>
              <div className={style.contentWrapper}>
                {card.question}
              </div>
            </div>

            <div className={`${style.CurrentCard} ${style.Back}`}>
              <div className={style.contentWrapper}>
                {card.answer}
              </div>
            </div>
          </div>
        </div>))



  return(
    <div className={style.DisplayContainer}>
      <div className={style.FlashCards}>
        {flashCards}
      </div>

      <div className={style.NavigateDiv}>
        <AiOutlineArrowLeft onClick={props.leftArrow}/>
        <AiOutlineArrowRight onClick ={props.rightArrow}/>
      </div>
   </div>
  )
}
export default CardMainDisplay;
