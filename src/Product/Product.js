import React from 'react'
const Product = ({data}) => {
  return (
    <div className="row">
        {data.map(data =>
        <div className='col-lg-3 md-4 sm-12'>
            <div className='card border-danger mt-3' style={{"width":"18rem"}}>
                <img className='card-img-top' src={data.recipe.image} alt="Card image cap" />
            <div className='card-body'>
                <center >
                    <h3 className='card-title'>{data.recipe.label}</h3>
                    <h6 className='card-text'>Total Amount Of Calories :{Math.round(data.recipe.calories)}</h6>
                    <a href='#' className='btn btn-primary'>Buy</a>
                </center>
            </div>
            </div>uuhgbyug
            
        </div>
        )

        }

    </div>
  )
}

export default Product;