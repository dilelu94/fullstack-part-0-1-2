import Content from './Content'
import Header from './Header'
import TotalExercises from './TotalExercises'

const Courses = ({ coursesArray }) => {
  return (
    <div>
      <h1>Web development curriculum</h1>
      {coursesArray.map(course =>
        <div key={course.id}>
          <Header courses={course} />
          <Content courses={course} />
          <TotalExercises courses={course} />
        </div>
      )}
    </div>
  )
}

export default Courses
