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

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        id: 1,
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        id: 2,
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        id: 3,
        name: 'State of a component',
        exercises: 14,
      },
      {
        id: 4,
        name: 'Redux',
        exercises: 11,
      }
    ]
  }

  return (
    // <div>
    //   <Header course={course} />
    //   <Content parts={parts} />
    //   <Total sum={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
    // </div>
    <Course course={course} />
  )
}

export default App