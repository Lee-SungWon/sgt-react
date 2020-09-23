import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <header className="container header">
        <div className="row">
          <div className="col">
            <h1>Student Grade Table</h1>
          </div>
          <div className="col">
            <div className="row">
              <h1>Average Grade</h1>
              <span className="badge badge-secondary"></span>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
