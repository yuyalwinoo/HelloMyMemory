"use client";

import CountdownTimer from "@/components/myComponents/CountDownTimer";
import ShowAlert from "@/components/myComponents/ShowAlert";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { createItemsArr } from "./util";
import Start from "@/components/myComponents/Start";

const page = props => {
    const initialNumber = [12, 77, 78, 3, 89, 23, 56, 8, 67, 90, 12, 77, 78, 3, 89, 23, 56, 8, 67, 90];

    const [numbers,setNumber]=useState([]);
    const [matchItems,setMatchItems]=useState(0);
    const [failCount,setFailCount]=useState(0);
    const [showAllNumber,setAllShowNumber]=useState(false);
    const [loading,setLoading]=useState(false);

    const [selectedItem,setSelectedItem] = useState({
        id:0,
        value:null
    });

    const checkItemMatch = (id,number) => {
        
        let newNumbers = [];
        if(!!selectedItem.value)// exist
        {
            if(number === selectedItem.value){
                console.log("Match")
                setMatchItems(matchItems+1);
                setSelectedItem({id:0,value:null});

                newNumbers = numbers.map(item=>(
                    item.value === number ? {...item,isMatched :true,show:true}:item
                ));
                setNumber(newNumbers);
            } else {
                console.log("Not Match")
                newNumbers = numbers.map(number=>((number.id === id || number.id === selectedItem.id) ? {...number,show:false} : number));
                setNumber(newNumbers);
                setSelectedItem({id:0,value:null});
                setFailCount(failCount+1);
            }
        } 
    }

    const createItems = ()=>{
        const shuffledNumbers = createItemsArr(initialNumber);
        setNumber(shuffledNumbers);
    }

    const startHandler = ()=>{
        createItems();
        setAllShowNumber(true);
        setTimeout(()=>{
            setAllShowNumber(false);
        },10000)
    }
    const itemClickHandler = (id,number)=>{
        setSelectedItem({id,value:number});

        const newNumbers = numbers.map(number=>(number.id === id ? {...number,show:true} : number))
        setNumber(newNumbers);
        setTimeout(()=>{
            checkItemMatch(id,number);
        },1000)
    }
    
    const goToStart=()=>{
        setNumber([]);
        setMatchItems(0);
        setFailCount(0);
    }
  
    return (
        <>
            <h1 className="text-2xl font-bold">Match Items</h1>
            <div className={cn(loading && 'pointer-events-none',"flex flex-col justify-center items-center gap-10 pb-10 overflow-y-hidden h-full")}>
                
                {showAllNumber && <CountdownTimer countDownTime={180} />}
                <div className={cn(!showAllNumber && "mt-32","grid grid-cols-5 gap-5 md:w-1/3 mx-auto")}>
                    {
                        numbers?.map((number)=><Item key={number.id} 
                                                            number={number}
                                                            showAllNumber={showAllNumber}
                                                            itemClickHandler={itemClickHandler}/>)
                    }
                    
                </div>
                <Start onClick={startHandler}/>
                {
                    matchItems >= 10 && <ShowAlert goToStart={goToStart}
                                            title={'🎉 Congratulations! 🎉'}
                                            discription={'Grate Job!!! This is your moment to shine! 🌟'}/>
                }
                {
                    failCount >= 3 && <ShowAlert goToStart={goToStart}
                                        title={'Sorry!'}
                                        discription={'You fail 3 times! Try again.'}/>
                }
            
            </div>
        </>
        
    )
}

const Item = ({number,showAllNumber,itemClickHandler})=>{

    return(
        <Button className={cn(number.isMatched  && "!bg-match pointer-events-none",
                            showAllNumber  && "pointer-events-none",
                            "bg-primary rounded-md p-2 flex justify-center items-center min-w-10 min-h-10 hover-animate")} 
            onClick={(e)=>itemClickHandler(number.id,number.value)}>
            <span className={cn((number.show || showAllNumber) ? "block" : "hidden")}>{number.value}</span>
        </Button>
    )
}

export default page