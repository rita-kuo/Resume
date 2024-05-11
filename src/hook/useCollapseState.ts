import { useEffect, useState } from "react";
import { MotionProps } from "framer-motion";

type AnimatingState = "closing" | "opening";
export type CollapseState = "open" | "closed" | AnimatingState;

interface Props<T> {
  initialState?: CollapseState;
  initialMotionProps: T;
  renderMotionProps: (state: AnimatingState) => T;
}

export const useCollapseStates = (
  props: Props<Record<string, MotionProps>>,
) => {
  const [state, setState] = useState<CollapseState>(
    props.initialState ?? "closed",
  );

  const [motionProps, setMotionProps] = useState<Record<string, MotionProps>>(
    props.initialMotionProps,
  );

  useEffect(() => {
    if (state.includes("ing")) {
      const renderMotionProps = props.renderMotionProps;
      const motionProps = renderMotionProps(state as AnimatingState);

      const keys = Object.keys(motionProps);
      if (keys[0]) {
        const onAnimationComplete = motionProps[keys[0]].onAnimationComplete;
        motionProps[keys[0]] = {
          ...motionProps[keys[0]],
          onAnimationComplete: (definition) => {
            onAnimationComplete?.(definition);
            setState((state) =>
              state.includes("ing")
                ? state === "opening"
                  ? "open"
                  : "closed"
                : state,
            );
          },
        };
      }

      setMotionProps({ ...motionProps });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return {
    state,
    motionProps,
    open: () => setState("opening"),
    close: () => setState("closing"),
  };
};

export const useCollapseState = (props: Props<MotionProps>) => {
  const { motionProps, ...rest } = useCollapseStates({
    initialState: props.initialState,
    initialMotionProps: { motionProps: props.initialMotionProps },
    renderMotionProps: (state) => ({
      motionProps: props.renderMotionProps(state),
    }),
  });

  return {
    ...rest,
    motionProps: motionProps?.motionProps,
  };
};
