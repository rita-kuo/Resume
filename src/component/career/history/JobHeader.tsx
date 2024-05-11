import React, { useMemo } from "react";
import WorkHistory from "@/model/workHistory";
import { format } from "date-fns";

const JobHeader: React.FC<{ history: WorkHistory }> = (props) => {
  const from = useMemo(
    () => format(props.history.from, "yyyy/MM"),
    [props.history.from],
  );
  const to = useMemo(
    () => (props.history.to ? format(props.history.to, "yyyy/MM") : "Present"),
    [props.history.to],
  );

  return (
    <button className="group flex items-center gap-4">
      <div className="h-5 w-5 rounded-full bg-blue-400 group-hover:bg-blue-300 md:h-6 md:w-6" />
      <h3 className="space-x-4 text-sky-600 group-hover:text-sky-500 [&>*]:align-middle">
        <span className="text-sm font-medium">{`${from} - ${to}`}</span>
        <span>{props.history.company}</span>
      </h3>
    </button>
  );
};

export default JobHeader;
