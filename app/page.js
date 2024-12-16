import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="bg-white flex flex-col justify-center items-center">
            <Image
            src="/world-creativity-and-innovation-day.gif"
            width={300}
            height={300}
            alt="You are super smart"
            className="mb-20"
            />
           
            <Link className={buttonVariants()}
                    href='/games'>
                Get Started
            </Link>

		</div>
    );
}
