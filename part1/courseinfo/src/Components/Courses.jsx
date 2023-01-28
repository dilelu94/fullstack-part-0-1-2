import Content from './Content'
import Header from './Header'
import TotalExercises from './TotalExercises'

const Courses = ({ coursesArray }) => {
  return (
    <div>
      <h1>Web development curriculum</h1>
      {coursesArray.map(item =>
        <div key={item.id}>
          <Header courses={item} />
          <Content courses={item} />
          <TotalExercises courses={item} />
        </div>
      )}
    </div>
  )
}

export default Courses
