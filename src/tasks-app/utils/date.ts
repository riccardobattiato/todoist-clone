import {
  differenceInDays,
  isToday,
  isTomorrow,
  isSameYear,
  isAfter,
  format,
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
