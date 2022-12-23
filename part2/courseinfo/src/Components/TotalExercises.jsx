const TotalExercises = ({ courses }) => {
    let totalExercises = 0

    courses.parts.forEach((partList) => totalExercises += partList.exercises)

    return (
        <div>
            <p>total of {totalExercises} exercises</p>
        </div>
    )
}

export default TotalExercises