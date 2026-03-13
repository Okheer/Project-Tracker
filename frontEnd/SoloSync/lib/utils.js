export function formatDate(date) {
  // 1. Handle null or undefined values
  if (!date) return "N/A";

  const d = date?.toDate ? date.toDate()
            : date?.seconds ? new Date(date.seconds * 1000)
            : new Date(date);

    if (isNaN(d.getTime())) return "Invalid Date";
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}