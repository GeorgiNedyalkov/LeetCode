let result;

function firstBadVersion(n) {
  for (let i = 0; i < n; i++) {
    if (i === bad) return i;
  }
}

function logFirstBadVersion(n, bad) {
  let mid = Math.floor(n / 2);

  if (mid === bad) {
    return mid;
  } else if (mid > bad) {
    mid = Math.floor(mid / 2);
    console.log(mid);
  }
}

console.log(logFirstBadVersion(8, 4));
console.log(logFirstBadVersion(8, 2));
console.log(logFirstBadVersion(8, 6));
