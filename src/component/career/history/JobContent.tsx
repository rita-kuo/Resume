import { motion } from "framer-motion";
import WorkHistory from "@/model/workHistory";
import { useWorkHistory } from "@/component/career/history/WorkHistoryContext";
import { useCollapseState } from "@/hook/useCollapseState";

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
    <motion.div {...motionProps} className="ml-10 overflow-hidden"></motion.div>
  );
};

export default JobContent;
