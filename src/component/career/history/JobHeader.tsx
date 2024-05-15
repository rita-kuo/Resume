'use client';

import React, {useMemo, useRef} from "react";
import WorkHistory from "@/model/workHistory";
import {format} from "date-fns";
import {motion} from "framer-motion";
import {useWorkHistory} from "@/component/career/history/WorkHistoryContext";
import {useCollapseStates} from "@/hook/useCollapseState";
import {IoPlay} from "react-icons/io5";

const dotSize = "h-5 w-5 md:h-6 md:w-6";
const defaultColor = "#bfdbfe";
const activeColor = "#0d9488";

const JobHeader: React.FC<{ history: WorkHistory }> = (props) => {
    const ref = useRef<HTMLDivElement>(null);
    const {state, motionProps, open, close} = useCollapseStates({
        initialMotionProps: {
            dot: {initial: {backgroundColor: defaultColor}},
            text: {initial: {color: defaultColor}},
        },
        renderMotionProps: (state) => ({
            dot: {
                initial:
                    state === "opening"
                        ? {rotate: 0, backgroundColor: defaultColor}
                        : {rotate: 90, backgroundColor: activeColor},
                animate:
                    state === "opening"
                        ? {rotate: 90, backgroundColor: activeColor}
                        : {rotate: 0, backgroundColor: defaultColor},
                onAnimationComplete: () =>
                    state === "opening" &&
                    ref.current?.scrollIntoView({behavior: "smooth", block: "center"}),
            },
            text: {
                initial:
                    state === "opening"
                        ? {color: defaultColor}
                        : {color: activeColor},
                animate:
                    state === "opening"
                        ? {color: activeColor}
                        : {color: defaultColor},
            },
        }),
    });

    const from = useMemo(
        () => format(props.history.from, "yyyy/MM"),
        [props.history.from],
    );
    const to = useMemo(
        () => (props.history.to ? format(props.history.to, "yyyy/MM") : "Present"),
        [props.history.to],
    );

    const {setCurrentId} = useWorkHistory({
        historyId: props.history.id,
        state,
        open,
        close,
    });

    return (
        <button
            className="group flex items-end gap-4"
            onClick={() =>
                setCurrentId((current) =>
                    current === props.history.id ? undefined : props.history.id,
                )
            }
        >
            <motion.div
                ref={ref}
                {...motionProps?.dot}
                className={`flex items-center justify-center rounded-full text-white ${dotSize} ${state === "closed" ? "group-hover:!bg-blue-300" : ""}`}
            >
                <IoPlay className="h-3 w-3 md:h-4 md:w-4"/>
            </motion.div>

            <motion.h3
                {...motionProps?.text}
                className={`space-x-2 [&>*]:align-baseline ${state === "closed" ? "group-hover:!text-blue-300" : ""}`}
            >
                <span className="text-sm font-medium">{`${from} - ${to}`}</span>
                <span>{props.history.company}</span>
            </motion.h3>
        </button>
    );
};

export default JobHeader;
