import React from 'react'
import nativeData from './Data'
import LeftDetail from './LeftDetail'
import RightDetail from './RightDetail'

const Card = () => {
  return (
    <div>
         {nativeData.map(data => <RightDetail data={data} key={data.id}/>)}
         {nativeData.map(data => <LeftDetail data={data} key={data.id}/>)}
    </div>
  )
}

export default Card