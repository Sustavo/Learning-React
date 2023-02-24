export default function SelectComponent({options, value, setValue, ...props}) {

    return(
        <div>
            <select value={value} onChange={({target}) => setValue(target.value)} {...props}>
                <option value="" disabled>selecione</option>
                {options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}