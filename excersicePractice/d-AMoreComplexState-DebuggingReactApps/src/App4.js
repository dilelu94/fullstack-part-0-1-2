const MyComponent = () => {
    const someCondition = true;

    return (
        <div>
            {
                someCondition ? (
                    <p>The condition is true!</p>
                ) : (
                    <p>The condition is false.</p>
                )
            }
        </div>
    );
}

export default MyComponent