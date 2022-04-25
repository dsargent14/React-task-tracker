import Task from "./Task";

const Tasks = ({tasks, onDelete,onToggle}) => {
  
  return (
  <>
{tasks.map((task) =>( // cant use push state is immutable
<Task key={task.id} task= {task} 
onDelete = {onDelete} onToggle ={onToggle}/>))}
  </>

  )
};

export default Tasks;
