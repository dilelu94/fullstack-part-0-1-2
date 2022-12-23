const Courses = ({ courses }) => {
    return (
        <>
            <h1>{courses.name}</h1>
            <ul>
                {courses.parts.map(course =>
                    <li key={course.id}>
                        {course.name} {course.exercises}
                    </li>
                )}
            </ul>
        </>
    )
}

export default Courses