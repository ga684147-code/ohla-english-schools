export const year = 2027;

export const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const sessionStarts = new Set(["01-04", "03-15", "05-24", "08-02", "10-11"]);
const otherStarts = new Set([
  "01-19", "02-01", "02-16", "03-29", "04-12", "04-26", "06-07", "06-21",
  "07-06", "08-16", "08-30", "09-13", "09-27", "10-25", "11-08", "11-22",
]);

type Closure = {
  start: string;
  end?: string;
  label: string;
  description: string;
};

export const closures: Closure[] = [
  { start: "01-18", label: "Jan 18", description: "Martin Luther King Jr. Day" },
  { start: "02-15", label: "Feb 15", description: "Presidents’ Day" },
  { start: "03-12", label: "Mar 12", description: "End of Session" },
  { start: "05-21", label: "May 21", description: "End of Session" },
  { start: "05-31", label: "May 31", description: "Memorial Day" },
  { start: "06-18", label: "Jun 18", description: "Juneteenth Observed" },
  { start: "07-05", label: "Jul 5", description: "Independence Day Observed" },
  { start: "07-30", label: "Jul 30", description: "End of Session" },
  { start: "09-06", label: "Sep 6", description: "Labor Day" },
  { start: "10-08", label: "Oct 8", description: "End of Session" },
  { start: "11-25", end: "11-26", label: "Nov 25 & 26", description: "Thanksgiving" },
  { start: "12-17", label: "Dec 17", description: "End of Session" },
  { start: "12-20", end: "12-31", label: "Dec 20 – Dec 31", description: "Christmas Break" },
];

export function dayInfo(key: string) {
  if (sessionStarts.has(key)) return { kind: "session", label: "Session start date" };
  if (otherStarts.has(key)) return { kind: "other", label: "Other start date" };
  const closure = closures.find(({ start, end }) => start <= key && key <= (end ?? start));
  if (closure || key === "01-01") {
    return { kind: "closed", label: (closure?.description ?? "New Year’s Day") + " · No class" };
  }
}
