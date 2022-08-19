import React from 'react'
import CV from '../../assets/Jayesh_resume_New.pdf'

export const CTA = () => {
  function downloadPdf(){
    window.open('Jayesh_resume_New.pdf', '_blank');
  }
  return (
    <div className='cta' >
        <a href={CV} className="btn" target='_blank' rel='noopener noreferrer'  >Dounload CV</a>
        <a href='#contact' className='btn btn-primary'>Lets Talk..</a>
    </div>
  )
}
