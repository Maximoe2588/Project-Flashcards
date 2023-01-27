import React, {useState, useEffect} from "react";
import {useHistory, useParams, useLocation} from "react-router-dom";
import { createCard, updateCard, readCard } from "./utils/api/index";

function CardForm({deck, isEdit, card, setCard, deckId, setError}) {


const initialFormState = isEdit ? card : {front: "", back: "", deckId: deckId};

const [formData, setFormData] = useState(initialFormState);

console.log(card);
    
const handleChange = ({target}) => {
      setFormData({...formData, [target.name]: target.value})
    };

const handleSubmitEdit = (event) => {
        event.preventDefault();
        console.log(formData, deckId);
        updateCard({...formData, id:deckId}).catch(setError);
      };

    

const handleSubmitAdd = (event) => {
    event.preventDefault();
    createCard(deck.id, formData).then(setFormData({...initialFormState})).catch(setError);
  };

  useEffect(() => {
    setFormData(card)
  }, [card])


    return (
        <div className="container">
          <h3> {deck.name}: {isEdit ? "Edit Card" : "Add Card"} :</h3>
            <form onSubmit={isEdit ? handleSubmitEdit : handleSubmitAdd}>
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
              <div className="form-group">
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
              <a href={`/decks/${deck.id}`} className="btn secondary">Done</a>
              <button className="btn primary" type="submit">Save</button>
            </form>
           </div>
          );
         }
          
        


export default CardForm;