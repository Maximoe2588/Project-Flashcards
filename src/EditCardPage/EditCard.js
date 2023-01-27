import React, { useState, useEffect } from 'react';
import EditCardNavig from './EditCardNavig';
import ErrorMessage from '../ErrorMessage';
import CardForm from '../CardForm';
import { useParams } from "react-router-dom";
import { readCard, readDeck } from '../utils/api';

function EditCard(){
  const { deckId, cardId } = useParams ();
  const [deck, setDeck] = useState(null);
  const [card, setCard] = useState({front: "", back: "", deckId: deckId});
  const [ error, setError ] = useState(undefined);
  
  
  useEffect(() =>{
        const abortController = new AbortController();
          readDeck(deckId, abortController.signal).then(setDeck).catch(setError);
          readCard(cardId, abortController.signal).then(setCard).catch(setError);
          return () => abortController.abort();
            }, [cardId, deckId]);
   
  if (error) {
  return <ErrorMessage error={error} />
  }

  if(!deck || !card) {
        return <h2>Loading...</h2>
    } else {
        return (
            <div>
                <EditCardNavig card={card} deck={deck} deckId={deckId} />
                <CardForm card={card} setCard={setCard} deckId={deckId} isEdit={true} setError={setError} deck={deck}/>
            </div>
    );
  }
}


export default EditCard;