import React from 'react'

const CategoryCard = ({name, quantity, thumbnail}) => {
  return (
    <>
      <div className='d-flex  align-items-center'>
                  <div className='mx-3'>
                    <h6>{name}</h6>
                  </div>
                  <img src={thumbnail} alt="camera" width='150px' height='100px'/>
                </div>
      
    </>
  )
}

export default CategoryCard
