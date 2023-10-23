import './Details.css'

const Details = (props) => {
  return (
    <div className="Details">
        <img src={props.img} alt="" width={'50px'} height={'50px'} style={{borderRadius:'50%'}} />
        <div className="name">
            <h3>{props.name}</h3>
            <p>{props.age}</p>
        </div>
    </div>
  )
}

export default Details