import Lottie from 'lottie-react'
import Airplane from './../assets/Animation - 1727364271751.json'
import { useRef } from 'react'
import Navbar from './Navbar'
import PassportAnimation from './PassportAnimation'

export default function Header({children}) {
    const airoplaneRef = useRef(null)
    return (
        <div className='bg-white'>
            <Navbar/>
            <div className="-mt-[60px] bg-black/50">
                <div className="">
                    <Lottie 
                        loop={true}
                        lottieRef={airoplaneRef}
                        onDOMLoaded={() => {
                            airoplaneRef?.current?.setSpeed(0.5)
                        }}
                        style={{
                            opacity: 0.9,
                        }}
                        animationData={Airplane}
                    />
                    <div className="flex justify-between absolute bg-blue-500/60 font-madimi-one rounded-full py-5 px-10 w-[80%] left-[10%] top-[150px] md:top-[250px] md:space-x-3 ">
                        <input className='w-[50%] md:py-3 py-2 px-4 bg-white/90' placeholder='Book a Flight' />
                        <select className='w-[30%] px-3 text-gray-500 block border-0 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 bg-white/90 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'>
                            <option value="">Country</option>
                            <option value="">Bangladesh</option>
                            <option value="">India</option>
                        </select>
                        <button className='hover:bg-blue-500 p-2 text-white bg-blue-900 w-[25%]'>Search</button>
                    </div>
                    <PassportAnimation></PassportAnimation>
                </div>
            </div>
            
            {children}
        </div>
    )
}
