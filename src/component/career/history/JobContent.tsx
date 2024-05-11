import { motion } from "framer-motion";
import WorkHistory from "@/model/workHistory";
import { useWorkHistory } from "@/component/career/history/WorkHistoryContext";
import { useCollapseState } from "@/hook/useCollapseState";
import Markdown from "react-markdown";

const JobContent: React.FC<{ history: WorkHistory }> = (props) => {
  const { state, close, open, motionProps } = useCollapseState({
    initialMotionProps: { initial: { height: 0 } },
    renderMotionProps: (state) => ({
      initial: state === "opening" ? { height: 0 } : { height: "auto" },
      animate: state === "opening" ? { height: "auto" } : { height: 0 },
    }),
  });

  useWorkHistory({
    historyId: props.history.id,
    state,
    open,
    close,
  });

  return (
    <motion.div {...motionProps} className="ml-10 overflow-hidden">
      {props.history.detail.map((detail) => (
        <div key={detail.title} className="mt-1 md:mt-2">
          <h4>{detail.title}</h4>
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
    </motion.div>
  );
};

export default JobContent;
