import React from "react";
import { IoMenu } from "react-icons/io5";
import { motion } from "framer-motion";
import { useCollapseStates } from "@/hook/useCollapseState";
import MenuContent from "@/component/layout/MenuContent";

const MenuButton: React.FC = () => {
  const { state, open, close, motionProps } = useCollapseStates({
    initialMotionProps: {
      mask: { initial: { opacity: 0 } },
      menu: { initial: { translateX: "100%" } },
    },
    renderMotionProps: (state) => ({
      mask: {
        initial: { opacity: state === "opening" ? 0 : 1 },
        animate: { opacity: state === "opening" ? 1 : 0 },
      },
      menu: {
        initial: { translateX: state === "opening" ? "100%" : 0 },
        animate: { translateX: state === "opening" ? 0 : "100%" },
      },
    }),
  });
  return (
    <div className="h-full md:hidden">
      <button
        className="flex aspect-square h-full items-center rounded border border-blue-900 bg-white p-1 hover:bg-blue-200 active:bg-blue-300"
        onClick={open}
      >
        <IoMenu className="h-full w-full" />
      </button>
      {state !== "closed" && (
        <motion.div
          {...motionProps.mask}
          id="mask"
          className="fixed left-0 top-0 h-full w-full bg-black/50"
          onClick={(event) =>
            (event.target as HTMLElement).id === "mask" && close()
          }
        ></motion.div>
      )}
      <motion.div
        {...motionProps.menu}
        transition={{ type: "linear" }}
        className="absolute right-0 top-0 ml-auto h-screen w-1/2 rounded-l bg-white p-4"
      >
        <MenuContent onClick={close} />
      </motion.div>
    </div>
  );
};

export default MenuButton;
