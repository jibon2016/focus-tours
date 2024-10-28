import React, { useState } from 'react'
import passprot from '../assets/Passprot.json'
import Lottie from 'lottie-react'
export default function PassportAnimation() {
  const passportRef = useState(null)
  return (
    <div className='h-[100px] w-[100px] mx-auto'>
      <Lottie 
          lottieRef={passportRef}
          onDOMLoaded={() => {
              passportRef?.current?.setSpeed(0.5)
          }}
          animationData={passprot}
      />
  </div>
  )
}
