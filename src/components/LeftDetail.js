import React from 'react'

const LeftDetail = ({data}) => {
  return (
    <div>
        <h3>Chort Ten: {data.cohortName} </h3>
        <h5>{data.fullName}</h5>
        <p>{data.nickName}</p>
    </div>
  )
}

export default LeftDetail