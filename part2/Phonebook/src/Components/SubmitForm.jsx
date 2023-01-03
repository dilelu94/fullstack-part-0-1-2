const SubmitForm = (props) => {
    return (
        <>
            <div>
                name: <input onChange={props.onChangeName} value={props.valueName} />
            </div>
            <div>
                number: <input onChange={props.onChangeNumber} value={props.valueNumber} />
            </div>

            <div>
                <button type="submit">add</button>
            </div>
        </>
    );
};

export default SubmitForm