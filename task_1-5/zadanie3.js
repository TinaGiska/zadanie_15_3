
const average = (...args) => {
  const length = args.length;

  let sum = 0;
  for (let i = 0; i <= length; i++) {
    sum = sum + args[i];
  }

  const average = sum/length;
  return average;

}

average(2,5);
