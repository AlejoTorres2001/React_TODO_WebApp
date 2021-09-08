import React from "react";
import '../../../styles/Tasks.css'
export const TaskBanner = (props) => {
  const taskLeft = props.tasks.filter((task) => !task.done).length;
  
  return (
  
        <h4 className="banner-background text-primary text-white text-center p-4">
      {props.userName}'s Task App ({taskLeft} task to do)
    </h4>

    
  );
};
