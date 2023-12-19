import React from 'react'

function Divider() {
  const styleLeft = {
    background: 'linear-gradient(90deg, #101213 40%, rgba(255,255,255,0) 100%)',
  }
  const styleRight = {
    background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, #101213 60%)',
  }

  return (
    <div className="absolute left-0 top-0 w-full">
      <div
        className="absolute -top-[1px] left-0 h-[3px] w-[30%]"
        style={styleLeft}
      />
      <svg style={{ width: '100%', height: '5px' }}>
        <path
          d="M0 1H4231"
          stroke="#494949"
          strokeDasharray={10}
          strokeWidth="1"
        />
      </svg>
      <div
        className="absolute -top-[1px] right-0 h-[3px] w-[30%] "
        style={styleRight}
      />
    </div>
  )
}

export default Divider
