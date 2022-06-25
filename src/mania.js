
import React from 'react'
import Cards from './cards.js'
import P1 from './Components/phase-1.jpg'
import P2 from './Components/phase-2.jpg'
import P3 from './Components/phase-3.jpg'
import P4 from './Components/phase-4.jpg'

import Navbar from './navbar';

export default function apps() {
  return (
    <>
      <Navbar title="Marvel Mania" aboutus="About Us" />

      <div className="container mx-my-5" style={{ display: 'flex' }}>

        <div className="col-md-6">
          <Cards title="Phase-1" img={P1} description="This is phase-1" link="#" btnname="Enter Phase-1" />
          <Cards title="Phase-2" img={P2} description="This is phase-2" link="#" btnname="Enter Phase-2" />
        </div>

        <div className="col-md-4">
          <Cards title="Phase-3" img={P3} description="This is phase-3" link="#" btnname="Enter Phase-3" />
          <Cards title="Phase-4" img={P4} description="This is phase-4" link="#" btnname="Enter Phase-4" />
        </div>
      </div>


    </>
  )
}
