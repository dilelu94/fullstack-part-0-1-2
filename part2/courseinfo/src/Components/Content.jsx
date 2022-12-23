const Content = ({ courses }) => {
    return (
        <>
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

export default Content