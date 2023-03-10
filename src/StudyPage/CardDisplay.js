import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";


function CardDisplay({ deck }) {
    const cards = deck.cards;
    const [cardId, setCardId] = useState(1);
    const [flipped, setFlipped] = useState(false);
    const [card, setCard] = useState({});
    const history = useHistory();
    
    useEffect(() => {
        const abortController = new AbortController();
        setCard({...cards[cardId-1]});
        return () => abortController.abort();
    }, [cardId]);
    /*
    const handleFlip = () => {
        setFlipped(true);
        //console.log("You just hit the flip button on card: ", cardId);
    };
    const handleNext = () => {
        //console.log("You just hit the next button on card:", cardId);
        setCardId(cardId + 1);
        //console.log("You are now on card: ", cardId+1);
        setFlipped(false);
    };

    if (flipped === true && cardId === cards.length) {
        if (window.confirm("Restart cards?\nClick 'cancel' to return to the home page.")) {
            setCardId(1);
            setFlipped(false);
        } else {
            history.push("/");
        }
    }*/


    const handleFlip = () => {
        setFlipped(true);
        //console.log("You just hit the flip button on card: ", cardId);
    };
    const handleNext = () => {
       if (flipped === true && cardId === cards.length) {
        if (window.confirm("Restart cards?\nClick 'cancel' to return to the home page.")) {
            setCardId(1);
            setFlipped(false);
        }else {history.push("/");
       }
      }
          
  else{
        //console.log("You just hit the next button on card:", cardId);
        setCardId(cardId + 1);
        //console.log("You are now on card: ", cardId+1);
        setFlipped(false);
      }
    };


if (!cards) {
    return <p>Loading...</p>
} else if (cards.length > 2) {
  return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Card {cardId} of {cards.length}</h5>
                    {!flipped ? (<p className="card-text">{card.front}</p>) :
                        (<p className="card-text">{card.back}</p>)
                    }
                    <button className="btn" onClick={handleFlip}>Flip</button>
                    {flipped && (<button className="btn" onClick={handleNext}>Next</button>)}
                </div>
            </div>
        </div>
    );  
} else {
    return (
        <div className="container">
            <h2>Not enough cards.</h2>
            <p>You need at least 3 cards to study. There are {cards.length} cards in this deck.</p>
            <a href={`/decks/${deck.id}/cards/new`} className="btn">+ Add Cards</a>
        </div>
    );
}


}
export default CardDisplay;