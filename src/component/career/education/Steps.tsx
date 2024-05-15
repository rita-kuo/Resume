import React from "react";
import Image from "next/image";
import {useTranslations} from "next-intl";

export interface StepProps {
    title: string
    skill?: string[]
    image: string[]
}

const Step: React.FC<StepProps> = props => {
    return <>
        <span className='-ml-2.25 first:-mt-1 mt-4 md:mt-0 space-y-2'>
            <h4 className='text-teal-600 flex gap-2 items-center'>
                <div className='w-4 h-4 rounded-full border-teal-500 border-4 bg-white'/>
                {props.title}
            </h4>
            {props.skill &&
                <ul className='ml-10 list-disc md:ml-6 md:list-none space-y-1'>{props.skill.map(skill =>
                    <li>{skill}</li>)}</ul>}
        </span>
        <div className='md:col-start-2 md:col-span-3 ml-4 md:ml-0 space-y-2'>
            {props.image.map(src =>
                <Image key={src} src={src} alt='project-1' className='rounded' width={1920} height={1080}/>)}
        </div>
    </>
}

const Steps: React.FC<{ steps: StepProps[] }> = (props) => {
    const t = useTranslations('Education')
    return <div className='space-y-2'>
        <h3>{t('workflow')}</h3>
        <div className='grid md:grid-cols-3 gap-2 md:gap-y-4 ml-2 md:ml-4 border-l-2 border-sky-300'>
            {props.steps.map(step => <Step key={step.title} {...step}/>)}
        </div>
    </div>
}

export default Steps;