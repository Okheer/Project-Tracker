export function formatDate(date) {
  // 1. Handle null or undefined values
  if (!date) return "N/A";

  // 2. Ensure it is a Date object (converts strings automatically)
  const d = new Date(date);

  // 3. Check if the date is actually valid (e.g., not "abc")
  if (isNaN(d.getTime())) {
    return "Invalid Date";
  }

  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}