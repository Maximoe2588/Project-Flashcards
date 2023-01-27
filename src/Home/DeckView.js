import React from "react";
import { deleteDeck } from "../utils/api";
import { useHistory } from "react-router-dom";

function DeckView({ deck = { cards: [] } , decks, setDecks}) {
    const history = useHistory();
   
    const handleDelete = async() => {
        if(window.confirm("Delete this deck?\nYou will not be able to recover it")){
            await deleteDeck(deck.id).then(history.push("/"));
           
             const results = decks.filter((({id}) => deck.id !== id))
            console.log(decks);
            setDecks(results);
        }

    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{deck.name}</h5>
                <h6 className="card-subtitle text-muted">{deck.cards.length} cards</h6>
                <p className="card-text">{deck.description}</p>
                <a className="btn btn-secondary" href={`/decks/${deck.id}`}>View</a> 
                <a className="btn btn-primary" href={`/decks/${deck.id}/study`}>Study</a>
                <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
}
export default DeckView;
