import {format} from "date-fns";
import Image from "next/image";

interface Skill {
    title: string
    from: Date
    to?: Date
    image: string
}

const skills: Skill[] = [{
    title: "Azure Developer Associate",
    from: new Date("2021-12-29"),
    to: new Date("2023-12-30"),
    image: "/AzureDeveloperAssociate.png"
}, {
    title: "Azure Fundamentals",
    from: new Date("2020-3-14"),
    image: "/AzureFundamentals.png"
}, {
    title: "TOEIC 930",
    from: new Date("2022-12-18"),
    image: "/toeic.png"
}]

const Page = () => {
    return <div className='space-y-4 divide-y-2 [&>*]:pt-4'>
        {skills.map(skill => <div className='space-y-2'>
            <div className='flex flex-col md:flex-row md:items-end gap-x-4'>
                <h2>{skill.title}</h2>
                <span
                    className='text-teal-600'>
                    {format(skill.from, 'yyyy/MM/dd')}
                    {skill.to && ` - ${format(skill.to, 'yyyy/MM/dd')}`}
                </span>
            </div>
            <Image src={skill.image} alt={skill.title} className='rounded shadow w-full h-auto max-w-limit-sm'
                   width={1920}
                   height={1080}/>
        </div>)}
    </div>
}

export default Page;