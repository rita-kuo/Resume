'use client';
import Image from "next/image";
import {motion, useScroll} from "framer-motion";
import {useRef} from "react";


const Page = () => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["center center", "start 15%"]
    })

    return <div className='space-y-4'>
        <div className='flex gap-4 items-center mx-auto w-max'>
            <Image src='/ntpu.jpeg' alt='ntpu' width={100} height={100}/>
            <div>
                <span className='text-teal-600'>國立臺北大學</span>
                <h3>資訊工程學系畢業</h3>
            </div>
        </div>

        <div className='w-full border-b'/>
        <div>
            <span>畢業專題</span>
            <h2 className=''>即時運動賽事虛擬動態廣告系統</h2>
        </div>
        <div className='space-y-2'>
            <div ref={ref} className='relative max-w-limit-sm mx-auto w-full aspect-video rounded-lg overflow-hidden'>
                <Image src='/project-before.png' alt='before' fill className='-z-10'/>
                <span className='p-2 bg-teal-700 text-white rounded-br-lg'>Before</span>
                <motion.div
                    className='absolute top-0 left-0 w-full h-full origin-left overflow-hidden bg-[url("/project-after.png")] bg-cover bg-center'
                    style={{scaleX: scrollYProgress}}>
                    <span className='p-2 bg-teal-700 text-white rounded-tl-lg absolute bottom-0 right-0'>After</span>
                </motion.div>
            </div>
            <h4 className='p-2 bg-sky-100 w-max ml-auto rounded shadow'>Python (OpenCV)</h4>
        </div>
    </div>
}

export default Page