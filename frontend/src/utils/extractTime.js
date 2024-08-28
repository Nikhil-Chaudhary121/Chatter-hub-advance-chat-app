export function extractTime(dataString) {
  const date = new Date(dataString);
  const hour = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());

  return `${hour}:${minutes}`;
}

// give a single digit number a leading 0 (number = 1 == output = 01)
function padZero(number) {
  return number.toString().padStart(2, "0");
}
