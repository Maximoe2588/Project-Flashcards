import React, { useEffect, useState } from "react";
import ErrorMessage from "../ErrorMessage";
import AddCardNavig from "./AddCardNavig";
import CardForm from "../CardForm";
import { readDeck } from "../utils/api/index"
import { useParams } from "react-router-dom";

//Component will add a new card to a deck that already exists

function AddCard(){
  const [deck, setDeck] = useState ({});
  const { deckId } = useParams ();
  const [error, setError] = useState(undefined);
  
  useEffect(() =>{
        const abortController = new AbortController();
        readDeck(deckId, abortController.signal).then(setDeck).catch(setError);
        return () => abortController.abort();}, [deckId]);
  
  if (error){
    return <ErrorMessage error={error} />
    }
  
  if(!deck.id){
    return <h2>Loading...</h2>;
  } else {
       return (
       <div>
          <AddCardNavig deck={deck}/>
          <CardForm deck={deck} error={error} setError={setError} deckId={deckId} />
       </div>
       );
     }
  }  

export default AddCard;
  
  
  
  
