const Filter = (props) => {
    return (
        <>
            filter shown with: <input value={props.valueFilter} onChange={props.onChangeFilter} />
        </>
    )
}

export default Filter