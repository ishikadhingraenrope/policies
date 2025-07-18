import { useState } from 'react'
import './App.css'
import RefundPolicy from './component/refundpolicy/RefundPolicy.jsx'
import ContactInformation from './component/contact-information/ContactInformation.jsx'


function App() {

  return (
    <>
    <RefundPolicy/>
    <hr />
    <ContactInformation/>
    </>
  )
}

export default App
