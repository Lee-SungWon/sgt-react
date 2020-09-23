import React from 'react';
import Header from './header';
import GradesTable from './grades-table';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
  }

  componentDidMount() {
    this.getAllGrades();
  }

  getAllGrades() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(data => {
        this.setState({ grades: data });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <Header />
      <div className='row'>
        <GradesTable grades={this.state.grades} />
      </div>
    );
  }
}
