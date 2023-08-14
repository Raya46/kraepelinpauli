"use client";

import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";

const Game = () => {
  const [startTimer, setStartTimer] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(60);
  const [randomNumbers, setRandomNumbers] = useState<number[]>([]);
  const [randomNumber1, setRandomNumber1] = useState(0);
  const [randomNumber2, setRandomNumber2] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [timerFinished, setTimerFinished] = useState(false);
  const [userInput, setUserInput] = useState("");

  let intervalNow: NodeJS.Timeout | null = null;

  useEffect(() => {
    if (startTimer) {
      intervalNow = setInterval(() => {
        setTimeRemaining((prevTime) => {
          if (prevTime === 0) {
            clearInterval(intervalNow as NodeJS.Timeout);
            setStartTimer(false);
            setTimerFinished(true);
            setShowModal(true);
            return 0;
          } else {
            return prevTime - 1;
          }
        });
      }, 1000);
    } else {
      clearInterval(intervalNow as NodeJS.Timeout);
    }

    return () => {
      clearInterval(intervalNow as NodeJS.Timeout);
    };
  }, [startTimer, timeRemaining]);

  useEffect(() => {
    const newRandomNumbers = Array(5).fill(0).map(getRandomNumber);
    setRandomNumbers(newRandomNumbers);

    setRandomNumber1(newRandomNumbers[0]); // Angka pertama
    setRandomNumber2(newRandomNumbers[1]); // Angka kedua
  }, []);

  const checkAnswer = () => {
    const userAnswer = parseInt(userInput);

    if (userAnswer === randomNumber1 + randomNumber2) {
      console.log("Benar");
    } else {
      console.log("Salah");
    }
  };

  const handleResetTimer = () => {
    setShowModal(false);
    setStartTimer(false);
    setTimerFinished(false);
    clearInterval(intervalNow as NodeJS.Timeout);
    setTimeRemaining(60);
  };

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 10);
  };

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col mt-10">
      <div className={`${startTimer ? "fixed" : "hidden"}`}>
        {formatTime(timeRemaining)}
      </div>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-black p-4 rounded-md">
            <p>Waktu telah habis!</p>
            <button onClick={handleResetTimer}>Save</button>
          </div>
        </div>
      )}
      <Card className="flex flex-row mt-10 rounded-lg border-2 justify-center items-center p-4 pl-10">
        <div className="flex flex-col w-full">
          <ul className="w-full">
            <li>{randomNumber1}</li>
            <input
              type="number"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <li>{randomNumber2}</li>
          </ul>
        </div>
        {/* <div className="flex flex-col w-full">
            <ul className="w-full">
              {randomNumbers.map((randomNum, index) => (
                <div>
                  <li key={index}>{randomNum}</li>
                  <input key={index} type="number" />
                </div>
              ))}
              <li>9</li>
            </ul>
          </div> */}
        {/* <div className="flex flex-col w-full">
            <ul className="w-full">
              <li>1</li>
              <input type="number" />
              <li>1</li>
              <input type="number" />
              <li>1</li>
              <input type="number" />
              <li>1</li>
              <input type="number" />
              <li>1</li>
              <input type="number" />
              <li>1</li>
            </ul>
          </div>
          <div className="flex flex-col w-full">
            <ul className="w-full">
              <li>1</li>
              <input type="number" />
              <li>1</li>
              <input type="number" />
              <li>1</li>
              <input type="number" />
              <li>1</li>
              <input type="number" />
              <li>1</li>
              <input type="number" />
              <li>1</li>
            </ul>
          </div>
          <div className="flex flex-col w-full">
            <ul className="w-full">
              <li>1</li>
              <input type="number" />
              <li>1</li>
              <input type="number" />
              <li>1</li>
              <input type="number" />
              <li>1</li>
              <input type="number" />
              <li>1</li>
              <input type="number" />
              <li>1</li>
            </ul>
          </div> */}
      </Card>
      <button onClick={checkAnswer}>Check Answer</button>
      <div className="flex justify-center">
        {startTimer ? (
          <button
            onClick={handleResetTimer}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Reset
          </button>
        ) : (
          <button
            onClick={() => setStartTimer(true)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Start
          </button>
        )}
      </div>
    </div>
  );
};

export default Game;
