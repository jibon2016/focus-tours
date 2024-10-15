import React, { useState } from 'react'
import passprot from '../assets/Passprot.json'
import Lottie from 'lottie-react'
export default function PassportAnimation() {
  const passportRef = useState(null)
  return (
    <div className='absolute top-[200px] h-[100px] w-[100px] md:w-[300px] md:top-[300px] md:h-[300px]'>
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
