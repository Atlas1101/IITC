import './FormComp.css'
const FormComp = (props) => {
    console.log(props);
    
    const updateChoice = (e) => {        
        props.updateFunction(+e.target.innerText)
        props.setDidUserSubmit(true)
    }
    
    return (
        <div className='btn-container'>
            <span className='btn' onClick={updateChoice}>1</span>
            <span className='btn' onClick={updateChoice}>2</span>
            <span className='btn' onClick={updateChoice}>3</span>
            <span className='btn' onClick={updateChoice}>4</span>
            <span className='btn' onClick={updateChoice}>5</span>
        </div>
    )
}

export default FormComp