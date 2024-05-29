import React from 'react'

const Alert = ({info, fromTextColor = 'from-blue-400'}) => {
  return (
    <div className={`text-xl sm:text-2xl font-extrabold md:text-3xl p-2 sm:p-4 text-center bg-clip-text text-transparent bg-gradient-to-r ${fromTextColor} to-stone-600 w-fit my-0 mx-auto`}>
       {info}
    </div>
  )
}

export default Alert;
