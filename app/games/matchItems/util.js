export const getRandomArray=()=> {
    const size = 10; // Fixed size of 10
    const numbers = new Set();
  
    while (numbers.size < size) {
      const randomNum = Math.floor(Math.random() * 99) + 1; // Random number between 1 and 99
      numbers.add(randomNum);
    }
  
    return Array.from(numbers);
}

export const createItemsArr = (initialNumber)=>{
    
    return  initialNumber.sort(() => Math.random() - 0.5)
                .map((item,index)=>({
                    id:index+1,
                    value: item,
                    show: false
                }));
}