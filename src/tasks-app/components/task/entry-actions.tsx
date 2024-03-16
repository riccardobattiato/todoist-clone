import EditBtn from "../atoms/edit-btn";

interface TaskEntryActionsProps {
  onEdit?: () => void;
}

const TaskEntryActions = ({ onEdit }: TaskEntryActionsProps) => (
  <div className="task-entry-actions cursor-pointer pl-6 bg-gradient-to-l from-neutral-800 via-neutral-800 to-100% to-transparent">
    <div className="task-entry-actions__items flex items-center">
      <EditBtn onClick={onEdit} />
    </div>
  </div>
);

export default TaskEntryActions;
