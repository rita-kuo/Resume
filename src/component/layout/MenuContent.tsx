import React from "react";
import TextLink from "@/component/TextLink";

const MenuContent: React.FC<{ onClick?: () => void }> = (props) => {
  return (
    <div>
      <TextLink href={"/"} onClick={props.onClick}>
        Home
      </TextLink>
    </div>
  );
};

export default MenuContent;
