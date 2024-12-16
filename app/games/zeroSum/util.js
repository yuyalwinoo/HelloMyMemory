export const generateArray = () => {
    const array = [];
    for (let i = 0; i < 18; i++) {
      const randomValue = Math.floor(Math.random() * 9) + 1; // Generates a random number from 1 to 9
      const randomSign = Math.random() < 0.5 ? -1 : 1; // Randomly determines the sign (+ or -)
      array.push(randomValue * randomSign);
    }
    return array;
  };

export const chooseKey = (numbers) => {
  
  const positives = numbers.filter(num => num > 0);
  const negatives = numbers.filter(num => num < 0);

  const randomPositive = positives[Math.floor(Math.random() * positives.length)];
  const randomNegative = negatives[Math.floor(Math.random() * negatives.length)];

  return { randomPositive, randomNegative };
};

  

  