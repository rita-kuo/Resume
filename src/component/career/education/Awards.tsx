import {IoRibbon} from "react-icons/io5";
import React from "react";

export interface Award {
    color: string
    title: string
}

const Awards: React.FC<{ awards: Award[] }> = (props) => {
    return <div
        className='py-2 px-4 rounded border border-teal-600 bg-teal-50 border-dashed flex flex-wrap gap-2 justify-between'>
        {props.awards.map(award =>
            <div key={award.title} className='flex gap-2 items-start w-max whitespace-pre-wrap max-w-full'>
                <IoRibbon className={`h-6 min-w-5 ${award.color}`}/>
                <span className='font-bold text-teal-600'>{award.title}</span>
            </div>)}
    </div>
}

export default Awards;