import React from 'react';

const Header = ({ courseName }) => <h1>{courseName}</h1>

const Total = ({ exercises }) => <p><strong>Total of {exercises.reduce((a, b) => a + b)} exercises</strong></p>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <>
    {parts.map(part => <Part key={part.id} part={part} />)} 
  </>


const Course = ({course}) => {
  return (
    <>
      <Header courseName={course.name}></Header>
      <Content parts={course.parts} />
      <Total exercises={course.parts.map(part => part.exercises)} />
    </>
  )
}

export default Course