import Courses from './Components/Courses'
import Content from './Components/Content'
import TotalExercises from './Components/TotalExercises'

const App = ({ courses }) => {

  /*   const result = courses.map(course => course.name)
    console.log(result)  */

  /* es una reverenda mierda esto, 4 horas para mostrar una lista, por 
  que no me explicaron que el objeto tenia una lista adentro??? */


  return (
    <div>
      <Courses courses={courses} />
      <Content courses={courses} />
      <TotalExercises courses={courses} />
    </div>
  )
}

export default App








/*   return (
    <div>
      <h1><Course course={course.name} /></h1>
      <CourseParts courseProp={course.parts} />
    </div>
  ) */

/* 
const CourseParts = (courseProp) => {
  <ul>
    {courseProp.map(courseCopy =>
      <Course key={courseCopy.id} courseCopy={courseCopy.parts} />
    )}
  </ul>
} */