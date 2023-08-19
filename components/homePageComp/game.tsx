"use client";

import { Card } from "@/components/ui/card";
import { updateUser } from "@/lib/actions/user.actions";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
interface Props {
  user: {
    id: string;
    username: string;
    objectId: string;
    correct: number;
    wrong: number;
    totalPlayed: number;
    accumulationTime: number;
    panker: number;
    tinker: number;
    janker: number;
    hanker: number;
  };
}

const Game = ({ user }: Props) => {
  const [startTimer, setStartTimer] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(60);
  const [randomNumbers, setRandomNumbers] = useState<number[]>([]);
  const [userInputs, setUserInputs] = useState<string[]>(Array(5).fill(""));
  const [results, setResults] = useState<boolean[]>(Array(5).fill(false));
  const [showModal, setShowModal] = useState(false);
  const [timerFinished, setTimerFinished] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
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
    getRandomNumber();

    const newRandomNumbers = Array(6).fill(0).map(getRandomNumber);
    setRandomNumbers(newRandomNumbers);
  }, []);

  useEffect(() => {
    if (checkAllInputsFilled()) {
      checkAnswer();
      resetInputsAndRandomNumbers();
    }
  }, [userInputs]);

  const resetInputsAndRandomNumbers = () => {
    const newRandomNumbers = Array(6).fill(0).map(getRandomNumber);
    setRandomNumbers(newRandomNumbers);
    setUserInputs(Array(5).fill(""));
  };

  const checkAllInputsFilled = () => {
    return userInputs.every((input) => input !== "");
  };

  const checkAnswer = () => {
    const userAnswers = userInputs.map((input) => parseInt(input));

    const correctAnswers = randomNumbers.map((num, index) => {
      const nextIndex = index + 1;
      if (nextIndex < randomNumbers.length) {
        return (num + randomNumbers[nextIndex]) % 10;
      }
      return num; // For the last number, no need to take the last digit
    });

    const newResults = userAnswers.map((userAnswer, index) => {
      return userAnswer === correctAnswers[index];
    });

    setResults(newResults);
  };

  const handleUserInputChange = (value: string, index: number) => {
    const updatedInputs = [...userInputs];
    updatedInputs[index] = value;
    setUserInputs(updatedInputs);
  };

  const totalCorrect = results.filter((result) => result).length;
  const totalWrong = results.length - totalCorrect;

  const handleResetTimer = async (values: any) => {
    // await updateUser({
    //   userId: user.id,
    //   username: user.username,
    //   correct: values.correct,
    //   wrong: values.wrong,
    //   totalPlayed: values.totalPlayed,
    //   accumulationTime: values.accumulationTime,
    //   panker: values.panker,
    //   tinker: values.tinker,
    //   janker: values.janker,
    //   hanker: values.hanker,
    //   path: pathname,
    // });
    // if (pathname === "/") {
    //   router.back();
    // } else {
    //   router.push("/");
    // }
    setResults(Array(5).fill(false));
    setUserInputs(Array(5).fill(""));
    setShowModal(false);
    setStartTimer(false);
    setTimerFinished(false);
    clearInterval(intervalNow as NodeJS.Timeout);
    setTimeRemaining(60);
  };

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 10);
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
      <Card className="flex flex-row mt-10 rounded-lg border-2 justify-center items-center p-4 pl-10 gap-4">
        <div className="flex flex-col w-full">
          <ul className="w-full">
            {Array.from({ length: Math.ceil(randomNumbers.length / 6) }).map(
              (_, rowIndex) => (
                <li key={rowIndex} className="flex flex-col">
                  {randomNumbers
                    .slice(rowIndex * 6, rowIndex * 6 + 6)
                    .map((randomNumber, colIndex) => (
                      <React.Fragment key={colIndex}>
                        <span>{randomNumber}</span>
                        {colIndex < 5 && (
                          <input
                            type="number"
                            value={userInputs[rowIndex * 5 + colIndex]}
                            onChange={(e) =>
                              handleUserInputChange(
                                e.target.value,
                                rowIndex * 5 + colIndex
                              )
                            }
                          />
                        )}
                      </React.Fragment>
                    ))}
                </li>
              )
            )}
          </ul>
        </div>
        {/* <div className="flex flex-col w-full">
          <ul className="w-full">
            {Array.from({ length: Math.ceil(randomNumbers.length / 6) }).map(
              (_, rowIndex) => (
                <li key={rowIndex} className="flex flex-col">
                  {randomNumbers
                    .slice(rowIndex * 6, rowIndex * 6 + 6)
                    .map((randomNumber, colIndex) => (
                      <React.Fragment key={colIndex}>
                        <span>{randomNumber}</span>
                        {colIndex < 5 && (
                          <input
                            type="number"
                            value={userInputs[rowIndex * 5 + colIndex]}
                            onChange={(e) =>
                              handleUserInputChange(
                                e.target.value,
                                rowIndex * 5 + colIndex
                              )
                            }
                          />
                        )}
                      </React.Fragment>
                    ))}
                </li>
              )
            )}
          </ul>
        </div>
        <div className="flex flex-col w-full">
          <ul className="w-full">
            {Array.from({ length: Math.ceil(randomNumbers.length / 6) }).map(
              (_, rowIndex) => (
                <li key={rowIndex} className="flex flex-col">
                  {randomNumbers
                    .slice(rowIndex * 6, rowIndex * 6 + 6)
                    .map((randomNumber, colIndex) => (
                      <React.Fragment key={colIndex}>
                        <span>{randomNumber}</span>
                        {colIndex < 5 && (
                          <input
                            type="number"
                            value={userInputs[rowIndex * 5 + colIndex]}
                            onChange={(e) =>
                              handleUserInputChange(
                                e.target.value,
                                rowIndex * 5 + colIndex
                              )
                            }
                          />
                        )}
                      </React.Fragment>
                    ))}
                </li>
              )
            )}
          </ul>
        </div>
        <div className="flex flex-col w-full">
          <ul className="w-full">
            {Array.from({ length: Math.ceil(randomNumbers.length / 6) }).map(
              (_, rowIndex) => (
                <li key={rowIndex} className="flex flex-col">
                  {randomNumbers
                    .slice(rowIndex * 6, rowIndex * 6 + 6)
                    .map((randomNumber, colIndex) => (
                      <React.Fragment key={colIndex}>
                        <span>{randomNumber}</span>
                        {colIndex < 5 && (
                          <input
                            type="number"
                            value={userInputs[rowIndex * 5 + colIndex]}
                            onChange={(e) =>
                              handleUserInputChange(
                                e.target.value,
                                rowIndex * 5 + colIndex
                              )
                            }
                          />
                        )}
                      </React.Fragment>
                    ))}
                </li>
              )
            )}
          </ul>
        </div>
        <div className="flex flex-col w-full">
          <ul className="w-full">
            {Array.from({ length: Math.ceil(randomNumbers.length / 6) }).map(
              (_, rowIndex) => (
                <li key={rowIndex} className="flex flex-col">
                  {randomNumbers
                    .slice(rowIndex * 6, rowIndex * 6 + 6)
                    .map((randomNumber, colIndex) => (
                      <React.Fragment key={colIndex}>
                        <span>{randomNumber}</span>
                        {colIndex < 5 && (
                          <input
                            type="number"
                            value={userInputs[rowIndex * 5 + colIndex]}
                            onChange={(e) =>
                              handleUserInputChange(
                                e.target.value,
                                rowIndex * 5 + colIndex
                              )
                            }
                          />
                        )}
                      </React.Fragment>
                    ))}
                </li>
              )
            )}
          </ul>
        </div> */}
      </Card>
      <button onClick={checkAnswer}>Check Answers</button>
      {totalCorrect > 0 && <p>Total Benar: {totalCorrect}</p>}
      {totalWrong > 0 && <p>Total Salah: {totalWrong}</p>}
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
