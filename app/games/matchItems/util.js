export const createItemsArr = (initialNumber)=>{
    return  initialNumber.sort(() => Math.random() - 0.5)
                .map((item,index)=>({
                    id:index+1,
                    value: item,
                    show: false
                }));
}