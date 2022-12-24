import Courses from './Components/Courses'
/* import Content from './Components/Content' */
import TotalExercises from './Components/TotalExercises'

const App = ({ coursesArray }) => {

  /*   const result = courses.map(course => course.name)
    console.log(result)  */

  /* es una reverenda mierda esto, 4 horas para mostrar una lista, por 
  que no me explicaron que el objeto tenia una lista adentro??? */

  return (
    <div>
      <Courses coursesArray={coursesArray} />
    </div>
  )

}

export default App