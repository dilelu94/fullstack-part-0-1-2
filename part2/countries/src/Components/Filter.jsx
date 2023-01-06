const Filter = (props) => {
    return (
        <>
            find countries: <input value={props.valueFilter} onChange={props.onChangeFilter} />
        </>
    )
}

export default Filter