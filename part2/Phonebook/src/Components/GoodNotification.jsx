const GoodNotification = ({ message }) => {
    if (message === null) {
        console.log('goodNotification')
        return null
    }

    return (
        <div className='success'>
            {message}
        </div>
    )
}

export default GoodNotification