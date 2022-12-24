import Content from './Content'
import TotalExercises from './TotalExercises'

const Courses = ({ coursesArray }) => {
  return (
    <div >
      <h1>Web development curriculum</h1>
      {coursesArray.map(item =>
        <>
          <h2 key={item.id}>
            {item.name}
          </h2>
          <Content courses={item} />
          <TotalExercises courses={item} />
        </>
      )}
    </div>
  )
}

export default Courses
