function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2 || num === 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  let divisor = 5;
  while (divisor * divisor <= num) {
    if (num % divisor === 0 || num % (divisor + 2) === 0) return false;
    divisor += 6;
  }

  return true;
}

function findNextPrime(n) {
  for (let nextNumber = n + 1; ; nextNumber++) {
    if (isPrime(nextNumber)) {
      console.log(nextNumber);
      return nextNumber;
    }
  }
}

const n = 5;
findNextPrime(n);
