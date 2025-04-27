const InputForm = (props) =>{

    const {htmlFor,type,name,placeholder,label}  = props;

    return (
        <div>
            <label htmlFor={htmlFor}>{label}</label>
            <input type={type} name={name} placeholder={placeholder} />
        </div>
    )
}

export default InputForm;