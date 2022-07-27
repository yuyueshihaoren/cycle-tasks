import React from "react";

const Task = ({ title, description, lastCompletionDate, priority }) => {
  return (
    <div className="task">
      <span className="task-title">{title ?? "Title"}</span>
      <span className="task-description">{description ?? "Description"}</span>
      <span className="task-last-completion-date">
        {lastCompletionDate ?? "Last completion date"}
      </span>
      <span className="task-priority">{priority ?? "Priority"}</span>
      <button type="button" className="task-done">
        DONE
      </button>
    </div>
  );
};

export { Task };
