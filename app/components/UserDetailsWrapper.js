import React from 'react'

function UserDetailsWrapper ({header, children}) {
  return (
    <div className='col-sm-6'>
      <p className='lead'>{header}</p>
      {children}
    </div>
  )
}

export default UserDetailsWrapper
