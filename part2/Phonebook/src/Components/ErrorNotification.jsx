const ErrorNotification = ({ message }) => {
    if (message === null) {
        console.log('errorNotification')
        return null
    }

    return (
        <div className='error'>
            {message}
        </div>
    )
}

export default ErrorNotification