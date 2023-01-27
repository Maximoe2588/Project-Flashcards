import React from "react";
import AddCardNavig from "./AddCardNavig";
import CardForm from "./../CardForm";

function AddCardNew({deck}) {
  return (
    <>
      <AddCardNavig deck={deck}/>
      <h1>{`${deck.name}: Add Card`}</h1>
      <CardForm deck={deck}/>
    </>
  )
}
 
export default AddCardNew;