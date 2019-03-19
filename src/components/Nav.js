import React from 'react';

const Nav = (props) => {
  return (
    <div id="nav">
    <h6>Filter Team</h6>
    <input type="text"
      placeholder="search player"
      value={ props.value }
      onChange={ props.changeHandler } />
    </div>
  )
}

export default Nav;
