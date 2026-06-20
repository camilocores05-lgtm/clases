export function input({type, label, onChange, value, labaleId}){
    return(
        <div>
            <label htmlFor="{labelId">Texto del label </label>
            <input type={type} value={value} onChange={onChange} id={labelId} />
        </div>
    )
}