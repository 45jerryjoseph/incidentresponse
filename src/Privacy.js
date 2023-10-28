import React from 'react'
import { Link } from 'react-router-dom'

export const Privacy = () => {
  return (
    <div>
        <p> Here are our terms and conditions</p>
        <p> We take your privacy very seriously and your data is handles in accordance to the <Link href="https://gdpr-info.eu/" target='_blank'>GDPR laws</Link>  and <a href="https://www.odpc.go.ke/dpa-act/" target='_blank'>Kenya Data Protection Act</a></p>
        
    </div>
  )
}

