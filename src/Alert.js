import React, { useEffect } from 'react'
import List from './List'

const Alert = ({ type, msg, removeAlert, list }) => {
  useEffect(() => {
    setTimeout(() => {
      removeAlert()
    }, 3000)
    return () => {
      clearTimeout()
    }
  }, [list])
  return <h2 className={`alert alert-${type}`}> {msg}</h2>
}

export default Alert
