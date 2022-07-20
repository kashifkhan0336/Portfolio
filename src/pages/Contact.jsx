import React, { useEffect } from 'react'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  useEffect(()=>{
    document.title = "FrontEnd Portfolio - Contact"
  }, [])
  return (
    <section className='form-section'>
      <ContactForm />
    </section>
  )
}
