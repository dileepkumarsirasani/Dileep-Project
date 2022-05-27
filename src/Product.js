import React from 'react'
import { FaAtlassian } from "react-icons/fa";
const Product = ({data}) => {
  return (
    <div className="row">
        {data.map(data =>
        <div className='col-lg-4'>
            <div className='card border-danger mt-2' style={{"width":"18rem"}}>
                <img className='card-img-top' src={data.recipe.image} alt="Card image cap" />
      <FaAtlassian />

            <div className='card-body'>
                <center >
                    <h3 className='card-title'>{data.recipe.label}</h3>
                    <h6 className='card-text'>Total amount Of Calories :{Math.round(data.recipe.calories)}</h6>
                    <a href='#' className='btn btn-primary'>Buy</a>
                </center>
            </div>
            </div>
        </div>
        )

        }

    </div>
  )
}

export default Product