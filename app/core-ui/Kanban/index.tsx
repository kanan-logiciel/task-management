"use client";
import { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";

interface Task {
  id: string;
  name: string;
  status: "To-Do" | "In Progress" | "Completed";
  priority: "Low" | "Medium" | "High" | "Urgent";
}

const initialTasks: Task[] = [
  { id: "1", name: "Design UI", status: "To-Do", priority: "High" },
  { id: "2", name: "Fix Bug", status: "In Progress", priority: "Medium" },
  { id: "3", name: "Deploy Backend", status: "Completed", priority: "Urgent" },
];

const priorities: Record<Task["priority"], string> = {
  High: "bg-red-500",
  Medium: "bg-yellow-500",
  Low: "bg-green-500",
  Urgent: "bg-purple-500",
};

export default function KanbanBoard() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const updatedTasks = [...tasks];
    const [reorderedTask] = updatedTasks.splice(result.source.index, 1);
    updatedTasks.splice(result.destination.index, 0, reorderedTask);

    setTasks(updatedTasks);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="tasks">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="space-y-4"
          >
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="bg-white p-4 rounded-md shadow-md flex justify-between"
                  >
                    <span>{task.name}</span>
                    <span
                      className={`px-2 py-1 text-white rounded ${
                        priorities[task.priority]
                      }`}
                    >
                      {task.priority}
                    </span>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
