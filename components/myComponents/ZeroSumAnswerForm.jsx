"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

// import { toast } from "@/components/hooks/use-toast"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import ShowAlert from "./ShowAlert"
import { useState } from "react"

const FormSchema = z.object({
  firstNumber: z
    .string({
      required_error: "Please select your answer for first number.",
    }),

    secondNumber: z
    .string({
      required_error: "Please select your answer for second number.",
    }),
})


export function ZeroSumAnswerForm({numbers,keys,goToStart,setShowAnswer}) { 

  const [result,setResult]=useState(0);
  
  const form = useForm({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data) {
    if(keys.position1 === +data.firstNumber && keys.position2 === +data.secondNumber)
    {
      setResult(1);//correct
    }
    else{
      setResult(2);
    }
 
  }

  const onClickShowAnswerHandler=()=>{
		setShowAnswer(true);
	  }


  return (

          <div className={`flex flex-col justify-center w-1/2 mx-auto px-28 ${keys.key1 !== null ? 'pointer-events-auto':'pointer-events-none blur-sm '}`}>
            {
              keys.key1 !== null &&
              <div className='flex flex-col justify-center items-center mb-6 gap-4'>
                <p>Find the position of the number that becomes 0 when combine with the given number. </p>
                <div className='flex justify-center items-center gap-4 mb-3'>
                  <p className='bg-slate-300 px-4 py-2 rounded-md'>{keys.key1}</p>
                  <p className='bg-slate-300 px-4 py-2 rounded-md'>{keys.key2}</p>
                </div>
              </div>
            }
            <Form {...form} className=''>
              <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                <FormField
                  control={form.control}
                  name="firstNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Number</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="focus:ring-0 focus:outline-none">
                            <SelectValue placeholder="Select answer 1" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className='max-h-44'>
                          {
                            numbers.map((number,index)=>(
                              <SelectItem key={index} value={String(index)}>{index+1}</SelectItem>
                            ))
                          }
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="secondNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Second Number</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="focus:ring-0 focus:outline-none">
                            <SelectValue placeholder="Select answer 2" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className='max-h-44'>
                          {
                            numbers.map((number,index)=>(
                              <SelectItem key={index} value={String(index)}>{index+1}</SelectItem>
                            ))
                          }
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Submit</Button>
              </form>
            </Form>

            {
              result === 1 && <ShowAlert goToStart={goToStart}
                                      title={'🎉 Congratulations! 🎉'}
                                      discription={'Grate Job!!! Your answer is correct!'}
                                      onClickShowAnswerHandler={onClickShowAnswerHandler}/>
            }
            {
              result === 2 && <ShowAlert goToStart={goToStart}
                                      title={'Sorry!'}
                                      discription={' Your answer is wrong! Try again!'}
                                      onClickShowAnswerHandler={onClickShowAnswerHandler}/>
            }


          </div>

  )
}
