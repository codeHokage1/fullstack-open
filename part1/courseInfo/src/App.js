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
  const part1 = {
    name: 'Fundamentals of React',
    excercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    excercises: 7
  }
  const part3 = {
    name: 'State of a component',
    excercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  );
}

export default App;
