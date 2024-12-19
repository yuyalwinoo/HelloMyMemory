"use client";

import { Button } from "../ui/button";

const Start = ({onClick,className=''}) => {

    return (

        <div className={`${className} flex flex-col justify-center items-center  w-2/3 mx-auto`}>
            <Button onClick={onClick} className='hover-animate'>Start</Button>
        </div>

    )
}

export default Start