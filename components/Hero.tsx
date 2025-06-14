import {motion} from 'framer-motion'
import MainInput from './MainInput'

const Hero = () => {


  return (
    <section className='p-4 lg:p-8 rounded-xl bg-[#f1f5f9] dark:bg-[#1e293b] shadow-lg h-[90%] w-full grid place-items-center'>
                <div className='text-center'>
                <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
                        Welcome to SkyCast
                </h1>
                <p className="text-lg md:text-xl text-center  max-w-xl mb-6">
                    Get accurate and real-time weather updates. Enter your city below to begin.
                    </p>
                    <MainInput />
                 </div>
            </section>
  )
}

export default Hero