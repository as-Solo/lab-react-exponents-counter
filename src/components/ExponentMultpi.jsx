function ExponentMulti(props){
    const {num, exponent} = props
    let elementos = ""
    for(let i = 1; i < exponent; i++){
        elementos += ` * ${num}`
    }
    return (
        <div className="exponent-counter-container">
        <p className="exponent-label">n<sup>{exponent}</sup></p>
        <p className="exponent-result">{num} {elementos}  = <span className="total">{num**exponent}</span></p>
    </div>
    );
}
 export default ExponentMulti;