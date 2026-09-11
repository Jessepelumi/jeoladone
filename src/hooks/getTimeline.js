import { parse, format, differenceInCalendarMonths } from "date-fns";

const getTimeline = (start, end) => {
  const startDate = parse(start, "MMM yyyy", new Date());
  const endDate =
    end === "Present" ? new Date() : parse(end, "MMM yyyy", new Date());

  const formattedStartDate = format(startDate, "MMM yyyy");
  const formattedEndDate =
    end === "Present" ? "Present" : format(endDate, "MMM yyyy");

  // Count both the starting and ending calendar months
  const months = differenceInCalendarMonths(endDate, startDate) + 1;

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  let duration;

  if (years > 0) {
    duration = `${years} year${years > 1 ? "s" : ""}`;

    if (remainingMonths > 0) {
      duration += `, ${remainingMonths} month${remainingMonths > 1 ? "s" : ""}`;
    }
  } else {
    duration = `${months} month${months > 1 ? "s" : ""}`;
  }

  return {
    label: `${formattedStartDate} — ${formattedEndDate}`,
    duration,
  };
};

export default getTimeline;
