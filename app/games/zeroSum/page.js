"use client";
import React, { useState } from 'react'
import { chooseKey, generateArray } from './util'
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Start from '@/components/myComponents/Start';
import CountdownTimer from '@/components/myComponents/CountDownTimer';

const page = () => {
	const [start, setStart] = useState(false);
	const [numbers, setNumbers] = useState([]);
	const [keys, setKeys] = useState({
		key1:null,
		key2:null
	});
	
	const startHandler = ()=>{
		setStart(true);
		const questionNumbersArr = generateArray();
		setNumbers(questionNumbersArr);

		const {randomPositive,randomNegative} = chooseKey(questionNumbersArr);
		setKeys({
			key1:randomPositive,
			key2:randomNegative
		})
	}

	const timeup = ()=>{
		console.log("timeup")
	}

	console.log("numbers",numbers)
	console.log("keys",keys)
	return (
		<>
			<h1 className='text-2xl font-bold'>Zero Sum</h1>
			{!start && 
                <Start onClick={startHandler} className={'mt-40'}/>
            }
			{
				numbers.length > 1 && (
					<>
						<div className='my-10'>
							{	
								start && <CountdownTimer countDownTime={3} timeup={timeup}/>
							}
						</div>
						<div className='grid grid-cols-3 md:grid-cols-6 gap-10 w-1/3 mx-auto' >
							{
								numbers.map((number,index)=>(
									<Button key={index} className={cn("bg-primary rounded-md p-2 flex justify-center items-center min-w-10 min-h-10 hover-animate")} 
									>
									<span 
									//className={cn((number.show || showAllNumber) ? "block" : "hidden")}
									>{number}</span>
								</Button>
								))
							}
						</div>
					</>
				)
			}
		</>
	)
}

export default page