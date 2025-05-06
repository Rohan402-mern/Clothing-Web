import React from 'react'
import './SortDown.css'
const SortDown = ({label}) => {
  return (
    <div className='sortdown'>
        <p>{label}</p>
        <svg style={{ cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#000000"><path d="M480-357.85 253.85-584 296-626.15l184 184 184-184L706.15-584 480-357.85Z"/></svg>
    </div>
  )
}

export default SortDown
