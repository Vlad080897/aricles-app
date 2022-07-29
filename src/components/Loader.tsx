import React from 'react'
//@ts-ignore
import loader from '../images/loader.svg'

const Loader = () => {
  return (
    <img
      src={loader}
      style={{
        width: '100px',
        height: '100px',
        background: 'white'
      }}
      alt='Loader'
    />
  )
}

export default Loader