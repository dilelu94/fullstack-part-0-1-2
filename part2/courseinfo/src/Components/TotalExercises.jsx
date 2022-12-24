const TotalExercises = ({ courses }) => {
    const initialValue = 0

    const totalExercises = courses.parts.reduce(
        (accumulator, currentValue) => accumulator + currentValue.exercises,
        initialValue
    )   /* currentValue".exercises" es para cuando la poronga esta 
        dentro de un Object */

    return (
        <h3 key={courses.parts.map((part) => part.id)}>
            total of {totalExercises} exercises
        </h3>
    )
}

export default TotalExercises
