import Courses from './Components/Courses'

const App = ({ coursesArray }) => {

  /*   const result = courses.map(course => course.name)
    console.log(result)  */

  /* es una reverenda mierda esto, 4 horas para mostrar una lista, por 
  que no me explicaron que el objeto tenia una lista adentro??? */

  return (
    <Courses coursesArray={coursesArray} />
  )

}

export default App