import React from 'react'

const ShowCard = ({data}) => {
    console.log(data)
  return (
    <div className='showCard'>
        <img src={data["image"] ? data["image"]["medium"] : ""} className='' alt="an image of the film" />
        <h2>{data.name}</h2>
        <p>{data.summary}</p>
    </div>
  )
}

export default ShowCard
