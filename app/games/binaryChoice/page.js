"use client";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React, { useEffect, useState } from 'react'
import { generateNumber, getCorrectAnswer } from './util'
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import ShowAlert from '@/components/myComponents/ShowAlert';
import CountdownTimer from '@/components/myComponents/CountDownTimer';
import Start from '@/components/myComponents/Start';

const page = () => {

    const [selectedID, setSelectedID] = useState();
    const [correctID, setCorrectID] = useState();
    const [showResult, setShowResult] = useState(false);
    const [error, setError] = useState('');
    const [start, setStart] = useState(false);
    const [isTimeUp, setIsTimeUp] = useState(false);
    const [results, setResults] = useState([]);

    const createQuestion = ()=>{
        const {numArr1,numArr2} = generateNumber();
        console.log("numArr1",numArr1)
        console.log("numArr2",numArr2)
        const correctAnswer = getCorrectAnswer(numArr1,numArr2);
        // console.log("correctAnswer",correctAnswer)
        const result1 =  {
            id:1,
            question: numArr1.join(' + '),
        }
        const result2 =  {
            id:2,
            question: numArr2.join(' + '),
        }
        setResults([...results,result1,result2]);
        setCorrectID(correctAnswer);

    }

    const calculateAnswerHandler = ()=>{
        console.log("calculateAnswerHandler")
        if(selectedID){
            setShowResult(true);
        }else{
            setError('Please click one card to choose the correct answer.')
        }
        
    }

    const cardOnClickHandler = (id)=> {
        setSelectedID(id);
    }
    
    const goToStart = ()=> {
        if(error)
        {
            setError('')
        }else{
            setResults([]);
            setSelectedID(0);
            setCorrectID(0);
            setShowResult(false);
            setStart(false);
        }
    }

    const startHandler = ()=>{
        setStart(true);
        createQuestion();
    }
    const timeup = (time)=>{
        setIsTimeUp(true);
        setShowResult(true);
    }
   
    // console.log("selectedID",selectedID, ' type ', typeof selectedID)
    // console.log("correctID",correctID, ' type ', typeof correctID)
    // console.log("showResult",showResult, ' type ', typeof showResult)
    return (
        <>
             <h1 className="text-2xl font-bold">Binary Choice</h1>
            {!start && 
                <Start onClick={startHandler} className={'mt-40'}/>
            }
            {
                results.length > 1 && (
                    <div className='flex flex-col justify-center items-center w-2/3 mx-auto'>

                        {start && <CountdownTimer countDownTime={120} timeup={timeup}/>}

                        <div className={cn(start ? 'mt-10':'mt-40','flex flex-col md:flex-row justify-center items-center gap-16')}>

                            {
                                results?.map((result)=>(
                                    <Card key={result.id}
                                    className={cn(selectedID === result.id && 'bg-match','p-5 hover-animate cursor-pointer')} onClick={()=>cardOnClickHandler(result.id)}>
                                        <span className='inline-block align-middle text-5xl'>{result.question}</span>
                                    </Card>
                                ))
                            }

                        </div>
                        
                        <Button onClick={calculateAnswerHandler} className={'w-fit my-10 hover-animate'}>Submit</Button>
                        
                        {
                            (selectedID === correctID && showResult) && (<ShowAlert goToStart={goToStart}
                                                                                    title={'🎉 Congratulations! 🎉'}
                                                                                    discription={'Grate Job!!! Your answer is correct. This is your moment to shine! 🌟'}/>)
                        }

                        {
                            (selectedID !== correctID && showResult) && (<ShowAlert goToStart={goToStart}
                                                                                    title={'Sorry!'}
                                                                                    discription={'Your answer is not correct. Please Try again.'}/>)
                        }

                        {
                            (isTimeUp && showResult) && (<ShowAlert goToStart={goToStart}
                                                                                    title={'Sorry!'}
                                                                                    discription={'Time is up. Please Try again.'}/>)
                        }

                        {
                            error && <ShowAlert goToStart={goToStart}
                            title={'Warning'}
                            discription={error}/>
                        }
                    </div>
                )
            }
        </>
        
    )
}

export default page