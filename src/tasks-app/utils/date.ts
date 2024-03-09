import {
  differenceInDays,
  isToday,
  isTomorrow,
  isSameYear,
  isAfter,
  format,
  isBefore,
} from "date-fns";

export const getLabelFromDate = (value: Date) => {
  if (isToday(value)) return "Today";
  if (isTomorrow(value)) return "Tomorrow";
  const now = new Date();

  if (isAfter(value, now) && differenceInDays(value, now) < 7) {
    return format(value, "iiii");
  }

  if (!isSameYear(now, value)) return format(value, "d MMM yyyy");

  return format(value, "d MMM");
};

export const getDueDateColor = (date: Date) => {
  const now = new Date();
  if (isToday(date)) return "text-green-600";
  if (isBefore(date, now)) return "text-orange-500";
  if (isTomorrow(date)) return "text-orange-400";
  if (differenceInDays(date, now) < 7) return "text-violet-600";
  return "text-neutral-200";
};
