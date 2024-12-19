export const generateArray = () => {
  const arr = [1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6, 7, -7, 8, -8, 9, -9];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
    [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
  }
    return arr;
  };

export const chooseKey = (numbers) => {
  
  const positives = numbers.filter(num => num > 0);
  const negatives = numbers.filter(num => num < 0);

  const randomPositive = positives[Math.floor(Math.random() * positives.length)];
  const randomNegative = negatives[Math.floor(Math.random() * negatives.length)];

  return { randomPositive, randomNegative };
};

export const invertNumber=(num)=> {
  return -num; 
}

  

  