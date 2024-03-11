import { Color } from "@/types/colors";
import { TaskPriority } from "@/types/tasks";

export const textColorsMap = {
  [Color.SLATE]: "text-slate-600",
  [Color.ZINC]: "text-zinc-600",
  [Color.STONE]: "text-stone-600",
  [Color.RED]: "text-red-600",
  [Color.ORANGE]: "text-orange-600",
  [Color.AMBER]: "text-amber-600",
  [Color.YELLOW]: "text-yellow-600",
  [Color.LIME]: "text-lime-600",
  [Color.GREEN]: "text-green-600",
  [Color.EMERALD]: "text-emerald-600",
  [Color.TEAL]: "text-teal-600",
  [Color.CYAN]: "text-cyan-600",
  [Color.SKY]: "text-sky-600",
  [Color.BLUE]: "text-blue-600",
  [Color.INDIGO]: "text-indigo-600",
  [Color.VIOLET]: "text-violet-600",
  [Color.PURPLE]: "text-purple-600",
  [Color.FUCHSIA]: "text-fuchsia-600",
  [Color.PINK]: "text-pink-600",
  [Color.ROSE]: "text-rose-600",
};

export const bgColorsMap = {
  [Color.SLATE]: "bg-slate-600",
  [Color.ZINC]: "bg-zinc-600",
  [Color.STONE]: "bg-stone-600",
  [Color.RED]: "bg-red-600",
  [Color.ORANGE]: "bg-orange-600",
  [Color.AMBER]: "bg-amber-600",
  [Color.YELLOW]: "bg-yellow-600",
  [Color.LIME]: "bg-lime-600",
  [Color.GREEN]: "bg-green-600",
  [Color.EMERALD]: "bg-emerald-600",
  [Color.TEAL]: "bg-teal-600",
  [Color.CYAN]: "bg-cyan-600",
  [Color.SKY]: "bg-sky-600",
  [Color.BLUE]: "bg-blue-600",
  [Color.INDIGO]: "bg-indigo-600",
  [Color.VIOLET]: "bg-violet-600",
  [Color.PURPLE]: "bg-purple-600",
  [Color.FUCHSIA]: "bg-fuchsia-600",
  [Color.PINK]: "bg-pink-600",
  [Color.ROSE]: "bg-rose-600",
};

export const priorityColorsMap = {
  [TaskPriority.URGENT]: "text-red-600",
  [TaskPriority.HIGH]: "text-orange-600",
  [TaskPriority.NORMAL]: "text-blue-500",
  [TaskPriority.LOW]: "text-neutral-300",
};
