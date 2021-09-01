import {Checkbox, IconButton} from "@material-ui/core";
import {EditableSpan} from "./EditableSpan";
import {Delete} from "@material-ui/icons";
import React, {ChangeEvent, useCallback} from "react";
import {TaskType} from "./Todolist";

export type TaskTypeProps = {
  task: TaskType
  removeTask: (taskId: string) => void
  changeTaskStatus: (id: string, isDone: boolean) => void
  changeTaskTitle: (taskId: string, newTitle: string) => void
}
export const Task = React.memo((props: TaskTypeProps) => {
  const onClickHandler = () => props.removeTask(props.task.id)
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let newIsDoneValue = e.currentTarget.checked;
    props.changeTaskStatus(props.task.id, newIsDoneValue);
  }
  const onTitleChangeHandler = (newValue: string) => {
    props.changeTaskTitle(props.task.id, newValue);
  }

  return <div key={props.task.id} className={props.task.isDone ? "is-done" : ""}>
    <Checkbox
      checked={props.task.isDone}
      color="primary"
      onChange={onChangeHandler}
    />

    <EditableSpan value={props.task.title} onChange={onTitleChangeHandler}/>
    <IconButton onClick={onClickHandler}>
      <Delete/>
    </IconButton>
  </div>
})