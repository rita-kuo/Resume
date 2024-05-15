'use client'
import {motion} from "framer-motion";
import WorkHistory from "@/model/workHistory";
import {useWorkHistory} from "@/component/career/history/WorkHistoryContext";
import {useCollapseState} from "@/hook/useCollapseState";
import Markdown from "react-markdown";
import {format} from "date-fns";
import Link from "next/link";

const JobContent: React.FC<{ history: WorkHistory }> = (props) => {
    const {state, close, open, motionProps} = useCollapseState({
        initialMotionProps: {initial: {height: 0, marginTop: 0}},
        renderMotionProps: (state) => ({
            initial:
                state === "opening"
                    ? {height: 0, marginTop: 0}
                    : {height: "auto", marginTop: "0.5rem"},
            animate:
                state === "opening"
                    ? {height: "auto", marginTop: "0.5rem"}
                    : {height: 0, marginTop: 0},
        }),
    });

    useWorkHistory({
        historyId: props.history.id,
        state,
        open,
        close,
    });

    return (
        <motion.div
            {...motionProps}
            className="ml-8 space-y-1 overflow-hidden rounded bg-blue-50 md:space-y-2"
        >
            <div className="space-y-2 p-2 md:space-y-4 md:p-4">
                {props.history.detail.map((detail) => (
                    <div key={detail.title} className="space-y-1">
                        <span className="space-x-1 [&>*]:inline">
                            <h4> {detail.title} </h4>
                            <span className='font-medium text-xs text-gray-500'>{`
                                ${detail.from ? format(detail.from, 'yyyy/MM') : ''}
                                ${detail.to ? ` - ${format(detail.to, 'yyyy/MM')}` : ''}
                            `}</span>
                        </span>
                        <Markdown
                            className="ml-1 md:ml-2 text-xs md:text-sm [&>*]:leading-6 [&>*+h4]:mt-2"
                            components={{
                                h1: ({children}) => (<h4 className='text-sky-600 text-sm'>{children}</h4>),
                                strong: ({children}) => (
                                    <strong className="text-teal-500">{children}</strong>),
                                ul: ({children}) => (
                                    <ul className="ml-4 list-disc">{children}</ul>
                                ),
                                a: ({children, href}) =>
                                    <Link href={href ?? ''} target='_blank' className='underline'>{children}</Link>,
                            }}
                        >
                            {detail.description}
                        </Markdown>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default JobContent;
