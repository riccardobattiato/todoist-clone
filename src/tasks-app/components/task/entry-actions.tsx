import DeleteBtn from "@/components/atoms/delete-btn";
import EditBtn from "@/components/atoms/edit-btn";

interface TaskEntryActionsProps {
  onEdit?: () => void;
  onDelete?: () => void;
}

const TaskEntryActions = ({ onEdit, onDelete }: TaskEntryActionsProps) => (
  <div className="task-entry-actions cursor-pointer pl-6 bg-gradient-to-l from-neutral-800 via-neutral-800 to-100% to-transparent">
    <div className="task-entry-actions__items flex items-center gap-x-2">
      <EditBtn onClick={onEdit} />
      <DeleteBtn onClick={onDelete} />
    </div>
  </div>
);

export default TaskEntryActions;
