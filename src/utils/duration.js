const MONTH_ABBR = [
  "jan", "feb", "mar", "apr", "may", "jun",
  "jul", "aug", "sep", "oct", "nov", "dec",
];

// "2022" -> { year: 2022, month: null }
// "2022 Jan" -> { year: 2022, month: 0 }
function parseDatePart(value) {
  const [yearPart, monthPart] = value.trim().split(/\s+/);
  const year = parseInt(yearPart, 10);
  let month = null;
  if (monthPart) {
    const idx = MONTH_ABBR.indexOf(monthPart.slice(0, 3).toLowerCase());
    if (idx !== -1) month = idx;
  }
  return { year, month };
}

export function isPresent(end) {
  return end.trim().toLowerCase() === "present";
}

// Display label, e.g. "2022 — 2026" or "2023 Jun — Present"
export function formatPeriod(start, end) {
  return `${start} — ${isPresent(end) ? "Present" : end}`;
}

function formatDuration(years, months) {
  const yrPart = years > 0 ? `${years} yr${years === 1 ? "" : "s"}` : "";
  const moPart = months > 0 ? `${months} mo` : "";
  if (yrPart && moPart) return `${yrPart} ${moPart}`;
  return yrPart || moPart || "0 mo";
}

// "2022", "2026" -> "4 yrs"
// "2020 Jan", "2020 Jul" -> "6 mo"
// "2021 Feb", "2023 Apr" -> "2 yrs 2 mo"
// "2023", "Present" -> calculated against today
export function calculateDuration(start, end) {
  const startDate = parseDatePart(start);
  const present = isPresent(end);
  const endDate = present
    ? { year: new Date().getFullYear(), month: new Date().getMonth() }
    : parseDatePart(end);

  // both sides are year-only and end isn't "Present" -> plain year count
  if (startDate.month === null && endDate.month === null && !present) {
    return formatDuration(Math.max(0, endDate.year - startDate.year), 0);
  }

  const startTotal = startDate.year * 12 + (startDate.month ?? 0);
  const endTotal = endDate.year * 12 + (endDate.month ?? 0);
  const totalMonths = Math.max(0, endTotal - startTotal);

  return formatDuration(Math.floor(totalMonths / 12), totalMonths % 12);
}