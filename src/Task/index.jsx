import React from "react";
import "./index.css";

const LeftPanel = (props) => {
  return <div className="task-left-panel">{props.children}</div>;
};

const MainBody = (props) => {
  return <div className="task-main-body">{props.children}</div>;
};

const Task = ({ period, lastCompletionDate, priority, title, description }) => {
  return (
    <div className="task">
      <LeftPanel>
        <span className="task-period">{period ?? "Period"}</span>
        <span>{lastCompletionDate ?? "Last completion date"}</span>
        <span>{priority ?? "Priority"}</span>
        <button type="button" className="task-done">
          DONE
        </button>
      </LeftPanel>
      <MainBody>
        <span className="task-title">{title ?? "Title"}</span>
        <span className="task-description">{description ?? "Description"}</span>
      </MainBody>
    </div>
  );
};

export { Task };
