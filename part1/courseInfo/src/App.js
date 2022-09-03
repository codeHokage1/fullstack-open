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
        partName={props.parts[0].name}
        partExercises={props.parts[0].excercises}
      />
      <Part
        partName={props.parts[1].name}
        partExercises={props.parts[1].excercises}
      />
      <Part
        partName={props.parts[2].name}
        partExercises={props.parts[2].excercises}
      />
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.parts[0].excercises + props.parts[1].excercises + props.parts[2].excercises}</p>
    </>
  )
}

function App() {
  const course = {
    name: 'Half Stack application development',
    parts : [
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

  }
  

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}

export default App;
