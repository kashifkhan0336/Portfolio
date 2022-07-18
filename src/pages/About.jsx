import React, {useEffect} from 'react'

export default function About() {
  useEffect(() => {
    document.title = "FrontEnd Portfolio - About";
  }, []);
  return (
    <div className='text'> About</div>
  )
}
