import React, { useState } from 'react'
import flightTicket from '../../assets/Flight_ticket.json'
import Lottie from 'lottie-react'
export default function FlightTicket() {
  const flightRef = useState(null)
  return (
    <div className='h-[100px] w-[100px] mx-auto'>
      <Lottie 
            style={{
              width: '100px',
              height: '100px',
            }}
          lottieRef={flightRef}
          onDOMLoaded={() => {
            //   flightRef?.current?.setSpeed(0.5)
          }}
          animationData={flightTicket}
      />
  </div>
  )
}
