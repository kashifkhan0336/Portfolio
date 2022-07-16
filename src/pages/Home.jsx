import React, { useEffect } from 'react'

export default function Home() {
  useEffect(()=>{
    document.title = "FrontEnd Portfolio"
  }, [])
  return (
    <div>Home</div>
  )
}
