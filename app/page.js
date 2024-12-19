
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
    return (
        <div className="mx-auto flex justify-center ">

            
            <div className=" flex flex-col z-10 px-28 my-28">
                
                <h1 className="text-5xl font-bold">Hello <span>My Memory ⋅°₊ • ୨୧ ‧₊° ⋅</span></h1>
                <p className="text-md w-2/3 tracking-wider my-8">You are incredibly smart—don't ever doubt it! The challenges you face today are simply stepping stones, and you have everything it takes to overcome them. Believe in yourself, trust in your abilities, and keep moving forward. You've got this! </p>
               

                <Button asChild className='w-fit hover-animate'>
                    <Link href="/games" className="text-secondary">Get Started</Link>
                </Button>

            </div>
            
            <div className="fixed flex w-full px-10 bottom-0 justify-between">
                <p className=" text-xs mb-3 p-2">gameTime</p>
                <p className=" text-xs mb-3 p-2 ">you'reSmart</p>
                <p className=" text-xs mb-3 p-2 ">timeToShine</p>
            </div>

        </div>


    );
}
