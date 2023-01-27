import React from "react";
import EditCardNavig from "./EditCardNavig";
import CardForm from "./../CardForm";


function EditCardNew({deck}) {
    
  return (
    <>
      <EditCardNavig />
      <h1>Edit Card</h1>
      <CardForm deck={deck} />
    </>
  )
} 

export default EditCardNew;