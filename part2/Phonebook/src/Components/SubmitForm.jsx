const SubmitForm = (props) => {
    return (
        <>
            <div>
                name: <input placeholder="*add a name..." onChange={props.onChangeName} value={props.valueName} />
            </div>
            <div>
                number: <input placeholder="add a number..." onChange={props.onChangeNumber} value={props.valueNumber} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </>
    )
}

export default SubmitForm