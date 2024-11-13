const sumUpTo = (n: number): number => {
  if (n == 1) {
    return 1;
  }

  return sumUpTo(n - 1) + n;
};

const factorial = (n: number): number => {
  if (n == 1) {
    return 1;
  }

  return factorial(n - 1) * n;
};
