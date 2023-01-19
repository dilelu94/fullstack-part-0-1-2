const ErrorNotification = ({ message }) => {
    if (!message) {
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