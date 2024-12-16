"use client";

import React, { useState, useEffect } from "react";
import moment from "moment";

const CountdownTimer = ({countDownTime,timeup}) => {
    const [timeLeft, setTimeLeft] = useState("");

    useEffect(() => {

        const targetTime = moment().add(countDownTime+2, "seconds");

        const timer = setInterval(() => {
            const now = moment();
            const duration = moment.duration(targetTime.diff(now));
 
            if (duration.asSeconds() <= 0) {
                clearInterval(timer);
                timeup();
            } else {
             
                setTimeLeft(
                    `${String(duration.hours()).padStart(2, "0")}:${String(
                        duration.minutes()
                    ).padStart(2, "0")}:${String(duration.seconds()).padStart(
                        2,
                        "0"
                    )}`
                );
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-sm font-semibold text-match">{`You have ${countDownTime}s to handle the game.`}</h1>
            <div className="text-2xl mt-4">{timeLeft}</div>
        </div>
    );
};

export default CountdownTimer;
