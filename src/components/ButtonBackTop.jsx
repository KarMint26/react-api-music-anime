import React from "react";
import { Tooltip } from "@material-tailwind/react";

const ButtonBackTop = () => {
  return (
    <Tooltip
      content={
        <div className="bg-slate-700 text-white dark:text-black dark:bg-slate-300 p-2 px-4 rounded-lg">
          Back to Top
        </div>
      }
      placement="top-end"
    >
      <button
        onClick={() => {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }}
        id="myBtn"
      >
        <span class="material-symbols-outlined text-4xl dark:text-white font-bold">
          keyboard_double_arrow_up
        </span>
      </button>
    </Tooltip>
  );
};

export default ButtonBackTop;
