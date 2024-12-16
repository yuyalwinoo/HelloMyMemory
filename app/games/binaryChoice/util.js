export const generateNumber = ()=>{
    let numArr1 = [];
    let numArr2 = [];
    for(let i=0;i<5;i++)
    {
        const firstDigit = Math.floor(Math.random() * 9) + 1;
        const next1 = Math.floor(Math.random()*100);
        const next2 = Math.floor(Math.random()*100);

        const finalNumber1 = (firstDigit * 100) + next1;
        const finalNumber2 = (firstDigit * 100) + next2;

        numArr1.push(finalNumber1);
        numArr2.push(finalNumber2);
    }
    return {numArr1,numArr2};
}

export const getCorrectAnswer = (numArr1,numArr2)=>{
    
    const sum1 = numArr1.reduce((sum,num)=>sum+num,0);
    const sum2 = numArr2.reduce((sum,num)=>sum+num,0);
    const largerNumber = Math.max(sum1,sum2);
    return largerNumber === sum1 ? 1 : 2;
}