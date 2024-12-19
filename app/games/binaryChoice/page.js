"use client";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React, { useEffect, useState } from 'react'
import { generateNumber, getCorrectAnswer } from './util'
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import ShowAlert from '@/components/myComponents/ShowAlert';
import CountdownTimer from '@/components/myComponents/CountDownTimer';
import Start from '@/components/myComponents/Start';
import { SquareCheck, SquareX } from 'lucide-react';

const page = () => {

    const [selectedID, setSelectedID] = useState();
    const [correctID, setCorrectID] = useState();
    const [showResult, setShowResult] = useState(false);
    const [error, setError] = useState('');
    const [start, setStart] = useState(false);
    const [isTimeUp, setIsTimeUp] = useState(false);
    const [results, setResults] = useState([]);
    const [showAnswer, setShowAnswer] = useState(false);
    const [showTimer, setShowTimer] = useState(false);

    const createQuestion = ()=>{
        const {numArr1,numArr2} = generateNumber();
        const {largerNumber,sum1,sum2} = getCorrectAnswer(numArr1,numArr2);
        const result1 =  {
            id:1,
            question: numArr1.join(' + '),
            result:sum1
        }
        const result2 =  {
            id:2,
            question: numArr2.join(' + '),
            result: sum2
        }
        setResults([...results,result1,result2]);
        setCorrectID(largerNumber);

    }

    const calculateAnswerHandler = ()=>{
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
            setShowTimer(false)
            setShowAnswer(false)
        }
    }

    const startHandler = ()=>{
        setStart(true);
        setShowTimer(true)
        createQuestion();
    }
    const timeup = (time)=>{
        setIsTimeUp(true);
        setShowResult(true);
    }
    const onClickShowAnswerHandler = ()=>{
        setShowAnswer(true);
        setShowTimer(false)

    }
   
    return (
        <>
             <h1 className="text-2xl font-bold">Binary Choice</h1>
            {!start && 
                <>
                    <p className='my-10'>
						1.Two arithmetic problems (addition of five 3-digit numbers) are presented on the screen.<br/>
						2.Compare the sum of two formulas and enter the result of the larger formula within the time limit.
					</p>
                    <Start onClick={startHandler} className={'mt-40'}/>
                </>
            }
            {
                results.length > 1 && (
                    <div className='flex flex-col justify-center items-center w-2/3 mx-auto'>

                        {start && showTimer && <CountdownTimer countDownTime={120} timeup={timeup}/>}

                        <div className={cn(start ? 'mt-10':'mt-40','flex flex-col md:flex-row justify-center items-center gap-16')}>

                            {
                                results?.map((result)=>(
                                    <Card key={result.id}
                                    className={cn(selectedID === result.id && 'bg-match',
                                    'p-5 hover-animate cursor-pointer')} onClick={()=>cardOnClickHandler(result.id)}>
                                        <span className='inline-block align-middle text-5xl'>{result.question}</span>
                                        {
                                            showAnswer && <span className={cn(correctID === result.id ? 'text-success':'text-error','text-5xl font-extrabold inline-block')}>
                                                {`= ${result.result}`}
                                            </span>
                                        }
                                    </Card>
                                ))
                            }

                        </div>
                        {
                            showAnswer ? (
                                <Button onClick={goToStart} className={'w-fit my-10 hover-animate'}>Go To Start</Button>
                            ) : (
                                <Button onClick={calculateAnswerHandler} className={'w-fit my-10 hover-animate'}>Submit</Button>
                            )
                        }
                        
                        
                        {
                            (selectedID === correctID && showResult) && 
                            (<ShowAlert goToStart={goToStart}
                                    title={'🎉 Congratulations! 🎉'}
                                    discription={'Grate Job!!! Your answer is correct. This is your moment to shine! 🌟'} 
                                    onClickShowAnswerHandler={onClickShowAnswerHandler}/>)
                        }

                        {
                            (selectedID !== correctID && showResult) && 
                            (<ShowAlert goToStart={goToStart}
                                    title={'Sorry!'}
                                    discription={'Your answer is not correct. Please Try again.'}
                                    onClickShowAnswerHandler={onClickShowAnswerHandler}/>)
                        }

                        {
                            (isTimeUp && showResult) && 
                            (<ShowAlert goToStart={goToStart}
                                    title={'Sorry!'}
                                    discription={'Time is up. Please Try again.'}
                                    onClickShowAnswerHandler={onClickShowAnswerHandler}/>)
                        }

                        {
                            error && <ShowAlert goToStart={goToStart}
                            title={'Warning'}
                            discription={error}
                            onClickShowAnswerHandler={onClickShowAnswerHandler}/>
                        }
                    </div>
                )
            }
        </>
        
    )
}

export default page