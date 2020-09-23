import React from 'react';

function Grade(props) {

}

function GradesTable(props) {
  const grades = props.grades;
  const renderGrades = grades.map(grade => {
    return (
      <Grade />
    );
  });
}
