const Filter = (props) => {
    return (
        <>
            filter shown with: <input placeholder="Search for a name" value={props.valueFilter} onChange={props.onChangeFilter} />
        </>
    )
}

export default Filter