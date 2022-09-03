const Header = (props) => (<h1>{props.course}</h1>) 

const Part = (props) => {
  return (
    <>
      <p>
        {props.partName} {props.partExercises}
      </p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part
        partName={props.part1}
        partExercises={props.exercises1}
      />
      <Part
        partName={props.part2}
        partExercises={props.exercises2}
      />
      <Part
        partName={props.part3}
        partExercises={props.exercises3}
      />
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </>
  )
}

function App() {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      excercises: 10
    },
    {
      name: 'Using props to pass data',
      excercises: 7
    },
    {
      name: 'State of a component',
      excercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
}

export default App;
