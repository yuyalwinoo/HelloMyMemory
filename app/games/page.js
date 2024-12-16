import Link from "next/link";
import { games } from "@/app/data/index";
import { Gamepad2 } from "lucide-react";

const GameItem = ({game})=>{
	return(
		<Link href={game.link} className="flex flex-col items-center gap-y-3 bg-primary rounded-md p-4 text-center hover-animate">
			<Gamepad2 />
			<p>{game.title}</p>
		</Link>
	)
}

const page = () => {
  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 m-auto">
			{
				games.map(game=><GameItem key={game.id} game={game}/>)
			}
        </div>
    </div>
  )
}

export default page