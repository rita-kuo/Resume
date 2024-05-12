import { motion } from "framer-motion";
import WorkHistory from "@/model/workHistory";
import { useWorkHistory } from "@/component/career/history/WorkHistoryContext";
import { useCollapseState } from "@/hook/useCollapseState";
import Markdown from "react-markdown";

const JobContent: React.FC<{ history: WorkHistory }> = (props) => {
  const { state, close, open, motionProps } = useCollapseState({
    initialMotionProps: { initial: { height: 0, marginTop: 0 } },
    renderMotionProps: (state) => ({
      initial:
        state === "opening"
          ? { height: 0, marginTop: 0 }
          : { height: "auto", marginTop: "0.5rem" },
      animate:
        state === "opening"
          ? { height: "auto", marginTop: "0.5rem" }
          : { height: 0, marginTop: 0 },
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
            <h4 className="text-sky-600">{detail.title}</h4>
            <Markdown
              className="ml-4 text-sm"
              components={{
                ul: ({ children }) => (
                  <ul className="ml-4 list-disc">{children}</ul>
                ),
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
