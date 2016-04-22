import React from 'react'
import styles from '../styles'

function MainContainer ({children}) {
  return (
    <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
      {children}
    </div>
  )
}

export default MainContainer
