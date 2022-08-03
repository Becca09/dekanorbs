import React from 'react'

const LeftDetail = (data) => {
  return (
    <div>
        <h1>Chort Ten: {data.cName} </h1>
        <h2>{data.name}</h2>
        <h4>{data.nName}</h4>
    </div>
  )
}

export default LeftDetail