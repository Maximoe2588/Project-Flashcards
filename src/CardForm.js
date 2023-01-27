import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { createCard, updateCard } from "./utils/api/index";

function CardForm({ deck, isEdit, card, deckId, setError }) {
  const history = useHistory();
  const initialFormState = isEdit
    ? card
    : { front: "", back: "", deckId: deckId };

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleSubmitEdit = (event) => {
    event.preventDefault();
    updateCard({
      ...formData,
      id: Number.parseInt(formData.id),
      deckId: Number.parseInt(deckId),
    }).catch(setError);
    history.push(`/decks/${deckId}`);
  };

  const handleSubmitAdd = (event) => {
    event.preventDefault();
    createCard(Number.parseInt(deck.id), formData).catch(setError);
  };

  useEffect(() => {
    setFormData(card);
  }, [card]);

  return (
    <div className="container">
      <h3>
        {" "}
        {deck.name}: {isEdit ? "Edit Card" : "Add Card"} :
      </h3>
      <form onSubmit={isEdit ? handleSubmitEdit : handleSubmitAdd}>
        <div className="form-group">
          <label htmlFor="front">Front</label>
          <textarea
            className="form-control"
            name="front"
            placeholder="Front side of card."
            rows={3}
            value={formData.front}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="back">Back</label>
          <textarea
            className="form-control"
            name="back"
            placeholder="Back side of card."
            rows={3}
            value={formData.back}
            onChange={handleChange}
          ></textarea>
        </div>
        <a href={`/decks/${deck.id}`} className="btn secondary">
          Done
        </a>
        <button className="btn primary" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}

export default CardForm;
