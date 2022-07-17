import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa"

export default function Error() {
  return (
    <div className="error-section">
      <h1 className='error-heading'>404</h1>
      <p className='error-text'>Page Not Found</p>
      <Link to="/" className='error-btn'><FaArrowLeft/>Back to Home</Link>
    </div>
  )
}
