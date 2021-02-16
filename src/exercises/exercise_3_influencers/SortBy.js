export default function sortBy(data) {
  const arr = ["High", "Medium", "Low"];
  const output = data.sort((a, b) => {
    return arr.indexOf(a.priority) - arr.indexOf(b.priority);
  });
  return output;
}
