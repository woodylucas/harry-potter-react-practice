import React from 'react';
import Card from './CharacterCard';

const StudentContainer = (props) => {

  const renderStudents = props.students.map( studentObj => <Card handleToggle={ props.handleToggle } student={ studentObj } key={ studentObj._id } />  )
  return (
    <div id="character-list">
      <h2>Students List</h2>
      { renderStudents }

    </div>
  )
}

export default StudentContainer;
