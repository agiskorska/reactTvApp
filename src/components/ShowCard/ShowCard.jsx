import React from 'react'

const ShowCard = ({data}) => {
    console.log(data)
  return (
    <div className='showCard'>
        <h2>{data.name}</h2>

    </div>
  )
}

export default ShowCard
