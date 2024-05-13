'use client';
import Image from "next/image";
import {motion, useScroll} from "framer-motion";
import React, {useRef} from "react";
import Steps from "@/component/career/education/Steps";
import Awards from "@/component/career/education/Awards";

const education = {
    image: "/ntpu.jpeg",
    title: "資訊工程學系畢業",
    school: "國立臺北大學",
    project: {
        title: "即時運動賽事虛擬動態廣告系統",
        subtitle: "畢業專題 (Python, OpenCV)",
        before: "/project-before.png",
        after: "/project-after.png",
        description: "透過即時影像處理的技術，替換運動賽事中的廣告看板為轉播當地的廣告，增加經濟效益。",
        awards: [{
            color: 'text-yellow-500',
            title: "臺北大學資工系專題成果競賽 第一名"
        }, {
            color: 'text-gray-400',
            title: "2018 全國大專院校軟體創作競賽 銀牌"
        }],
        steps: [{
            title: "匯入影像",
            image: ["/project-1.png"]
        }, {
            title: "初步定位",
            image: ["/project-2.png"],
            skill: ["色彩提取"]
        }, {
            title: '雜訊濾除',
            image: ["/project-3.png"],
            skill: ["Morphology 形態學", "Flood Fill漫水填充法"]
        }, {
            title: "確認看板位置",
            image: ["/project-4.png", "/project-5.png"],
            skill: ["最小外接矩形", "CNN"]
        }, {
            title: "投影虛擬看板",
            image: ["/project-6.png", "/project-7.png"],
            skill: ["透視變換", "色彩提取"]
        }, {
            title: "完成",
            image: ["/project-8.png"]
        }]
    }
}


const Page = () => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["center 55%", "start 20%"]
    })

    return <div className='space-y-4'>
        <div className='flex gap-4 items-center mx-auto w-max'>
            <Image src={education.image} alt='ntpu' width={100} height={100}/>
            <div>
                <span className='text-teal-600'>{education.school}</span>
                <h3>{education.title}</h3>
            </div>
        </div>
        <div>
            <span className='text-teal-600'>{education.project.subtitle}</span>
            <h2>{education.project.title}</h2>
            <p>{education.project.description}</p>
        </div>
        <div ref={ref} className='relative w-full aspect-video rounded-lg overflow-hidden'>
            <Image src='/project-before.png' alt='before' fill className='-z-10'/>
            <span className='p-2 bg-teal-700 text-white rounded-br-lg'>Before</span>
            <motion.div
                className='absolute top-0 left-0 w-full h-full origin-left overflow-hidden bg-[url("/project-after.png")] bg-cover bg-center'
                style={{scaleX: scrollYProgress}}>
                <span className='p-2 bg-teal-700 text-white rounded-tl-lg absolute bottom-0 right-0'>After</span>
            </motion.div>
        </div>
        <Awards awards={education.project.awards}/>
        <Steps steps={education.project.steps}/>
    </div>
}

export default Page