import React from 'react'

function Alert({alert}) {
  return (
    <div className={`${alert.error ? 'from-red-400 to-red-600 ': 'from-green-400 to-green-600'} bg-gradient-to-r p-3 w-full rounded-lg font-bold text-white text-center h-10 uppercase `}>{alert.msg}</div>
  )
}

export default Alert