import React from "react";
import { userContext, channelContext } from "../../App";

export default function ComponentC() {
  return (
    <div>
      <userContext.Consumer>
        {user => {
          return (
            <channelContext.Consumer>
              {channel => {
                return (
                  <div>
                    user {user} channel {channel}
                  </div>
                );
              }}
            </channelContext.Consumer>
          );
        }}
      </userContext.Consumer>
    </div>
  );
}
