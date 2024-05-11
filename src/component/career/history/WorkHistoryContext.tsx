import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import WorkHistory from "@/model/workHistory";
import { CollapseState } from "@/hook/useCollapseState";

const WorkHistoryContext = createContext<{
  currentId: number;
  setCurrentId: (id: number) => void;
}>({
  currentId: 0,
  setCurrentId: () => {},
});

export const WorkHistoryProvider: React.FC<
  PropsWithChildren<{ histories: WorkHistory[] }>
> = (props) => {
  const [currentId, setCurrentId] = useState<number>(props.histories[0]?.id);
  return (
    <WorkHistoryContext.Provider value={{ currentId, setCurrentId }}>
      {props.children}
    </WorkHistoryContext.Provider>
  );
};

export const useWorkHistory = (props: {
  historyId: number;
  state: CollapseState;
  open: () => void;
  close: () => void;
}) => {
  const { currentId, setCurrentId } = useContext(WorkHistoryContext);
  const stateRef = useRef(props.state);
  useEffect(() => {
    stateRef.current = props.state;
  }, [props.state]);

  useEffect(() => {
    if (currentId === props.historyId) {
      props.open();
    } else if (stateRef.current.includes("open")) {
      props.close();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentId]);

  return { currentId, setCurrentId };
};
