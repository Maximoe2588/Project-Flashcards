import React, { useState } from "react";
import { updateCard } from "../utils/api";
//import { useHistory } from "react-router-dom";
//import ErrorMessage from "../ErrorMessage";


//Component will render form for Editing a Card

function EditCardForm({card, deckId, error, setError, deck}) {
  //const [currentDeck, setCurrentDeck] = useState({...deck});
  //const [formData, setFormData] = useState({...initialFormState});*/
   /*useEffect(() =>
        const abortController = new AbortController();
          readDeck(deck.id, abortController.signal).then(setCurrentDeck).catch(setError);
return () => abortController.abort();}, [deck.id];*/
  //const history = useHistory();
  


  

/*
return (
<div className="container">
  <h3> Edit Card</h3>
    <form onSubmit={handleSubmit}>
     <div className="form-group">
       <label htmlFor="front">Front</label>
         <textarea
           className="form-control"
           name="front"
           placeholder="Front side of card."
           rows={3}
           value={formData.front}
           onChange={handleChange}>
           </textarea>
      </div>
      <div>
        <label htmlFor="back">Back</label>
        <textarea
           className="form-control"
           name="back"
           placeholder="Back side of card."
           rows={3}
           value={formData.back}
           onChange={handleChange}>
           </textarea>
      </div>
      <a href={`/decks/${deckId}`} className="btn secondary">Cancel</a>
      <button className="btn primary" type="submit">Submit</button>
    </form>
   </div>
  );*/
 }

export default EditCardForm;
  
  
  
  
  
  
  
  
  
  