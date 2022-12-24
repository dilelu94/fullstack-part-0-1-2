const TotalExercises = ({ courses }) => {
    const initialValue = 0

    const totalExercises = courses.parts.reduce(
        (accumulator, currentValue) => accumulator + currentValue.exercises,
        initialValue
    )   /* currentValue".exercises" es para cuando la poronga esta 
        dentro de un Object */

    return (
        <div>
            <p>total of {totalExercises} exercises</p>
        </div>
    )
}

export default TotalExercises
