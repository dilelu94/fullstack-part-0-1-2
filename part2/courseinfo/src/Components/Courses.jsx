import Content from './Content'
import TotalExercises from './TotalExercises'

const Courses = ({ coursesArray }) => {
  return (
    <div>
      <h1>Web development curriculum</h1>
      {coursesArray.map(item =>
        <div key={item.id}>
        <h2>
            {item.name}
          </h2>
          <Content courses={item} />
          <TotalExercises courses={item} />
        </div>
      )}
    </div>
  )
}

export default Courses
