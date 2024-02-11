import React from 'react'
import "./about.css"

function About() {
  return (
    <div className='container  about d-flex justify-content-center'>
         <div className="row  about-row text-white">
            <div className="col">
              <h1 className='text-center'>Biz bilan a'loqa</h1>
              <h3>
                <i> Quyidagi raqamlarga murojaat qiling:  <span>+99895123456</span>  <span>    +998774048881     </span></i>
              </h3>
              <h3>
                <i>Manzillarimiz:Parkent tumani Istiqbol MFY Alisher Navoiy ko'chasi 306 uy</i>
              </h3>
              <h3>
                <i>Mo'ljal : Parkent ixtisoslashtirilgan maktabi </i>
              </h3>
              {/* <Map></Map> */}
            </div>
         </div>
    </div>
  )
}

export default About