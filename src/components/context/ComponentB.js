import React, { useContext } from "react";
import ComponentC from "./ComponentC";
import { userContext, channelContext } from "../../App";

export default function ComponentB() {
  const user = useContext(userContext);
  const channel = useContext(channelContext);
  return (
    <div>
      {user} {channel}
    </div>
  );
}
