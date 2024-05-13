import {IoRibbon} from "react-icons/io5";
import React from "react";

interface Award {
    color: string
    title: string
}

const Awards: React.FC<{ awards: Award[] }> = (props) => {
    return <div
        className='md:ml-1.5 py-2 px-4 rounded border border-teal-600 bg-teal-50 border-dashed flex flex-wrap justify-between font-bold text-teal-600'>
        {props.awards.map(award =>
            <div className='flex gap-2 items-center min-w-max'>
                <IoRibbon className={`h-5 w-5 ${award.color}`}/>
                <span>{award.title}</span>
            </div>)}
    </div>
}

export default Awards;