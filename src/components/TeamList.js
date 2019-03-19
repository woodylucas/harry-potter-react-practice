import React from 'react';
import Card from './CharacterCard'
const TeamList = (props) => {

  const renderTeams = props.teams.map(studentObj => <Card  handleToggle={ props.handleToggle } key={ studentObj._id } student={ studentObj } /> )
  return (
    <div id="team-list">

      <h2>My Wizarding Team</h2>
        { renderTeams }

    </div>
  )
}

export default TeamList;
