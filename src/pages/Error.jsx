import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa"

export default function Error() {
  useEffect(() => {
    document.title = "404 Page Not Found";
  }, []);
  return (
    <div className="error-section">
      <h1 className='error-heading'>404</h1>
      <p className='error-text'>Page Not Found</p>
      <Link to="/" className='error-btn'><FaArrowLeft/>Back to Home</Link>
    </div>
  )
}
