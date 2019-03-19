import React from 'react';

const CharacterCard = (props) => {
  return (
    <div id="character-card">
      <p>{ props.student.name }</p>
      <button onClick={ () => props.handleToggle(props.student) }>Toggle</button>
      <button>Edit</button>
    </div>

  )
}

export default CharacterCard;
