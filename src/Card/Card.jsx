import { useEffect, useState } from "react"
import Details from "./Details"
import './Details.css'

import Data from "./Data"

const Card = () => {
    const [dataApi, setDataApi] = useState(Data)
  return (
    <section
     className=" section">
        <div className="Card">
            <h1>Todays Birthday {dataApi.length}</h1>
            {dataApi.map((e) => {
                return(
                    <Details name ={e.name} age = {e.age} img = {e.img} />
                )
            })}
            <button onClick={() => setDataApi([])}> Clear All</button>
    </div>
     </section>
  )
}

export default Card;


