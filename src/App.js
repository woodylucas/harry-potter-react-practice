import React, {Component} from 'react';
import './App.css';
import CharacterList from './components/CharacterList'
import TeamList from './components/TeamList'
import { getGryffindor }  from './endpoints'
import Nav from './components/Nav'


class App extends Component {
  state = {
    students: [],
    filterStudents: [],
    filterTeams: [],
    teams: [],
    searchPlayer: ""
  }

  componentDidMount() {
    fetch( getGryffindor )
    .then(resp => resp.json() )
    .then(students => this.setState( {
      students: students[0].members,
      filterStudents: students[0].members
    } ))
  }

  handleToggle = (studentObj) => {
    console.log('click')
    console.log(studentObj)
    const newStudents = [...this.state.filterStudents]
    const filteredStudents = newStudents.filter(student => student._id !== studentObj._id )
    console.log(filteredStudents)

    this.setState( { filterStudents: filteredStudents, filterTeams: [studentObj, ...this.state.filterTeams] } )

  }

  handleRemove = (studentObj) => {
    const newTeamsArray = [...this.state.teams]
    const filterTeams = newTeamsArray.filter(student => student._id !== studentObj._id)

    this.setState( { filterTeams: filterTeams, filterStudents: [studentObj, ...this.state.filterStudents] } )
  }

  changeHandler = event => {
    const searchValue = event.target.value

    const newStudentArray = [...this.state.filterStudents]
    const newTeamArray = [...this.state.filterTeams]
    const filterStudents = newStudentArray.filter(student => student.name.toLowerCase().includes(searchValue.toLowerCase()))
    const filterTeams  = newTeamArray.filter(student => student.name.toLowerCase().includes(searchValue.toLowerCase()))
    this.setState( {
      searchPlayer: searchValue,
      filterStudents: filterStudents,
      filterTeams: filterTeams
    })

  }



  render(){
    const { students, teams, filterStudents, filterTeams, searchPlayer } = this.state
    return (
      <div id="character-container">

        <CharacterList handleToggle={ this.handleToggle } students={ filterStudents } />
        <TeamList teams={ filterTeams } handleToggle={ this.handleRemove } />
        <Nav value={ searchPlayer } changeHandler={ this.changeHandler } />
      </div>
    )
  }
}

export default App;
