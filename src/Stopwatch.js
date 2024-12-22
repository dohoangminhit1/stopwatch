import React, { useState, useEffect } from 'react';
import './Stopwatch.css';

function Stopwatch() {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (running) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        }
        return () => clearInterval(interval);
    }, [running]);

    return (
        <div className="stopwatch-container">
            <h1>STOPWATCH</h1>
            <div className="time-display">
                <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
            </div>
            <div className="controls">
                {running ? (
                    <button className="stop" onClick={() => setRunning(false)}>Stop</button>
                ) : (
                    <button className="start" onClick={() => setRunning(true)}>Start</button>
                )}
                <button className="reset" onClick={() => {setTime(0); setRunning(false)}}>Reset</button>
            </div>
        </div>
    );
}

export default Stopwatch;