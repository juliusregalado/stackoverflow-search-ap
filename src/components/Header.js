import React from 'react'
import logo from '../logo.svg';
import SearchBox from './SearchBox'

export default function Header(props) {
  return (
    <div>
      <header className="App-header container-fluid fixed-pos">
        <div className="text-center">
          <img src={logo} className="App-logo" alt="logo" />
          <SearchBox
          handleSearch={props.handleSearch}
          handleSubmit={props.handleSubmit}
          data={props.data}
          />
        </div>
      </header>
    </div>
  )
}
