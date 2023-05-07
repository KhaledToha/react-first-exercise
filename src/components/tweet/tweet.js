

const Tweet = (props)=>{
    return <div className='tweet'>
        <div className="header">
        <h4>{props.name}</h4>
        <span>{props.date}</span>
        </div>
        <p>{props.message}</p>
    </div>
}

export default Tweet