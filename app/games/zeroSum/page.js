"use client";
import React, { useState } from 'react'
import { chooseKey, generateArray, invertNumber } from './util'
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Start from '@/components/myComponents/Start';
import CountdownTimer from '@/components/myComponents/CountDownTimer';
import { ZeroSumAnswerForm } from '@/components/myComponents/ZeroSumAnswerForm';
import { ShowAnswer } from '@/components/myComponents/ZeroSumShowAnswer';

const page = () => {
	const [start, setStart] = useState(false);
	const [showTimer, setShowTimer] = useState(false);
	const [showAnswer,setShowAnswer] = useState(false);
	const [numbers, setNumbers] = useState([]);
	const [keys, setKeys] = useState({
		key1:null,
		position1:null,
		key2:null,
		position2:null,
	});
	const [showNumbers, setShowNumbers] = useState(true);
	
	const startHandler = ()=>{
		setStart(true);
		setShowTimer(true);
		const questionNumbersArr = generateArray();
		setNumbers(questionNumbersArr);

	}

	const timeup = ()=>{
		
		setShowNumbers(false);
		const {randomPositive,randomNegative} = chooseKey(numbers);
		const firstIndex = numbers.findIndex((number) => number === randomPositive);
		const secondIndex = numbers.findIndex((number) => number === randomNegative);

		setKeys({
			key1:invertNumber(randomPositive),
			key2:invertNumber(randomNegative),
			position1:firstIndex,
			position2:secondIndex
		})
		setShowTimer(false);
	}

	const goToStart = ()=>{
		setStart(false);
		setNumbers([]);
		setKeys({
			key1:null,
			position1:null,
			key2:null,
			position2:null,
		})
		setShowAnswer(false)
		setShowNumbers(true)
	}

	
	return (
		<>
			<h1 className='text-2xl font-bold'>Zero Sum</h1>
			{
				showAnswer ? (
					<div className='flex justify-center items-center mx-auto w-1/2'>
						<ShowAnswer problems={numbers} answers={keys} goToStart={goToStart}/>
					</div>
				) : (
					<>
						{
							numbers.length > 1 && (
								<div className='flex justify-between items-center'>
									<div className='flex flex-col justify-center mx-auto items-center'>
										<div className='my-10'>
											{	
												start && showTimer && <CountdownTimer countDownTime={3} timeup={timeup}/>
											}
										</div>
										
										<div className='grid grid-cols-3 md:grid-cols-6 gap-10  mx-5' >
											{
												numbers.map((number,index)=>(
													<Button key={index} className={cn(showNumbers ? 'pointer-events-none':'pointer-events-auto',"bg-primary rounded-md p-2 flex justify-center items-center min-w-10 min-h-10 hover-animate")} 
													>
													<span 
													>{showNumbers ? number : index + 1}</span>
													
												</Button>
												))
											}
										</div>
									</div>
						
									<ZeroSumAnswerForm numbers={numbers} keys={keys} goToStart={goToStart} setShowAnswer={setShowAnswer}/>

								</div>
							)
						}
					</>
				)
			}
			{
				!start && (
					<>
						<p className='my-10'>
						1.A total of 18 numbers with absolute values ​​from 1 to 9 are displayed on the screen.<br/>
						2.After memorizing for a limited time, enter the position of the number that becomes 0 when combined with the number given in the problem.
						</p>
						<Start onClick={startHandler} className={'mt-40'}/>
					</>
				)
				
			}
		</>
	)
}

export const ProblemContainer = ({problems}) =>{
	return(
		<div aria-hidden={false} className="grid grid-cols-6">
			{
				problems?.map((number,index)=>(
					<div className={` py-2 m-2 rounded-md bg-primary text-background flex justify-center items-center`} key={index}>{number}</div>
				))
			}
		</div>
	)
}

export const AnswerContainer = ({problems,answers}) =>{
	return(
		<div aria-hidden={false} className="grid grid-cols-6">
			{
				problems?.map((number,index)=>(
					<div className={`${index == answers.position1 || index == answers.position2 ? 'bg-success':''} py-2 m-2 rounded-md bg-primary text-background flex justify-center items-center`} key={index}>{index+1}</div>
				))
			}
		</div>
	)
}

export default page