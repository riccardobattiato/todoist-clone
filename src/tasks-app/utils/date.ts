import {
  differenceInDays,
  isToday,
  isTomorrow,
  isYesterday,
  isSameYear,
  isAfter,
  format,
  isBefore,
} from "date-fns";

export const getLabelFromDate = (value: Date) => {
  if (isYesterday(value)) return "Yesterday";
  if (isToday(value)) return "Today";
  if (isTomorrow(value)) return "Tomorrow";
  const now = new Date();

  if (isAfter(value, now) && differenceInDays(value, now) < 7) {
    return format(value, "iiii");
  }

  if (!isSameYear(now, value)) return format(value, "d MMM yyyy");

  return format(value, "d MMM");
};

export const getQuickChoiceLabelFromDate = (value: Date) => {
  if (isToday(value) || isTomorrow(value)) return format(value, "E");
  return format(value, "E d MMM");
};

export const getDueDateColor = (date?: Date) => {
  if (!date) return "text-neutral-400";
  const now = new Date();
  if (isToday(date)) return "text-green-600";
  if (isBefore(date, now)) return "text-orange-500";
  if (isTomorrow(date)) return "text-orange-400";
  if (differenceInDays(date, now) < 7) return "text-violet-600";
  return "text-neutral-200";
};
