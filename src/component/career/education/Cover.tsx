'use client'

import React, {useRef} from "react";
import Education from "@/model/education";
import Image from "next/image";
import {motion, useScroll} from "framer-motion";

const Cover: React.FC<{ education: Education }> = (props) => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["center 55%", "start 20%"]
    })

    return (
        <div ref={ref} className='relative w-full aspect-video rounded-lg overflow-hidden'>
            <Image src='/project-before.png' alt='before' fill className='-z-10'/>
            <span className='p-2 bg-teal-700 text-white rounded-br-lg'>Before</span>
            <motion.div
                className='absolute top-0 left-0 w-full h-full origin-left overflow-hidden bg-[url("/project-after.png")] bg-cover bg-center'
                style={{scaleX: scrollYProgress}}>
                <span className='p-2 bg-teal-700 text-white rounded-tl-lg absolute bottom-0 right-0'>After</span>
            </motion.div>
        </div>
    );
}

export default Cover;