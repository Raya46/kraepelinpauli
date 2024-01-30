"use client";

import { Card, CardTitle } from "@/components/ui/card";
import { updateUser } from "@/lib/actions/user.actions";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
import { SignedIn } from "@clerk/nextjs";
interface Props {
  userDataAccount: {
    id: string | undefined;
    username: string | null | undefined;
  };
}

const Game = ({ userDataAccount }: Props) => {
  const [startTimer, setStartTimer] = useState(false);
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(10);
  const [randomNumbers, setRandomNumbers] = useState<number[]>([]);
  const [randomNumbers2, setRandomNumbers2] = useState<number[]>([]);
  const [randomNumbers3, setRandomNumbers3] = useState<number[]>([]);
  const [randomNumbers4, setRandomNumbers4] = useState<number[]>([]);
  const [randomNumbers5, setRandomNumbers5] = useState<number[]>([]);
  const [userInputs, setUserInputs] = useState<string[]>(Array(5).fill(""));
  const [userInputs2, setUserInputs2] = useState<string[]>(Array(5).fill(""));
  const [userInputs3, setUserInputs3] = useState<string[]>(Array(5).fill(""));
  const [userInputs4, setUserInputs4] = useState<string[]>(Array(5).fill(""));
  const [userInputs5, setUserInputs5] = useState<string[]>(Array(5).fill(""));
  const [iteration, setIteration] = useState(1);
  const [results, setResults] = useState<boolean[]>(Array(5).fill(false));
  const [results2, setResults2] = useState<boolean[]>(Array(5).fill(false));
  const [results3, setResults3] = useState<boolean[]>(Array(5).fill(false));
  const [results4, setResults4] = useState<boolean[]>(Array(5).fill(false));
  const [results5, setResults5] = useState<boolean[]>(Array(5).fill(false));
  const [selectedInput, setSelectedInput] = useState(0);
  const [selectedInput2, setSelectedInput2] = useState(0);
  const [selectedInput3, setSelectedInput3] = useState(0);
  const [selectedInput4, setSelectedInput4] = useState(0);
  const [selectedInput5, setSelectedInput5] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [timerFinished, setTimerFinished] = useState(false);
  const [totalCorrectCount, setTotalCorrectCount] = useState(0);
  const [totalCorrectCount2, setTotalCorrectCount2] = useState(0);
  const [totalCorrectCount3, setTotalCorrectCount3] = useState(0);
  const [totalCorrectCount4, setTotalCorrectCount4] = useState(0);
  const [totalCorrectCount5, setTotalCorrectCount5] = useState(0);
  const [totalWrongCount, setTotalWrongCount] = useState(0);
  const [totalWrongCount2, setTotalWrongCount2] = useState(0);
  const [totalWrongCount3, setTotalWrongCount3] = useState(0);
  const [totalWrongCount4, setTotalWrongCount4] = useState(0);
  const [totalWrongCount5, setTotalWrongCount5] = useState(0);
  const pathname = usePathname();
  const router = useRouter();
  let intervalNow: NodeJS.Timeout | null = null;

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedInput((prev) => Math.max(0, prev - 1));
        setSelectedInput2((prev) => Math.max(0, prev - 1));
        setSelectedInput3((prev) => Math.max(0, prev - 1));
        setSelectedInput4((prev) => Math.max(0, prev - 1));
        setSelectedInput5((prev) => Math.max(0, prev - 1));
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedInput((prev) => Math.min(4, prev + 1));
        setSelectedInput2((prev) => Math.min(4, prev + 1));
        setSelectedInput3((prev) => Math.min(4, prev + 1));
        setSelectedInput4((prev) => Math.min(4, prev + 1));
        setSelectedInput5((prev) => Math.min(4, prev + 1));
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  useEffect(() => {
    if (iteration <= 5 && startTimer) {
      intervalNow = setInterval(() => {
        setTimeRemaining((prevTime) => {
          if (prevTime === 0) {
            clearInterval(intervalNow as NodeJS.Timeout);
            if (iteration < 5) {
              setIteration(iteration + 1);
              console.log(iteration);
              setTimeRemaining(10);
              return 10; // Return the new value to satisfy the type
            } else {
              setShowModal(true);
              return prevTime; // Return the same value to satisfy the type
            }
          } else {
            return prevTime - 1;
          }
        });
      }, 1000);
    }

    return () => {
      clearInterval(intervalNow as NodeJS.Timeout);
    };
  }, [timeRemaining, iteration, startTimer]);

  useEffect(() => {
    getRandomNumber();
    const newRandomNumbers = Array(6).fill(0).map(getRandomNumber);
    const newRandomNumbers2 = Array(6).fill(0).map(getRandomNumber);
    const newRandomNumbers3 = Array(6).fill(0).map(getRandomNumber);
    const newRandomNumbers4 = Array(6).fill(0).map(getRandomNumber);
    const newRandomNumbers5 = Array(6).fill(0).map(getRandomNumber);
    setRandomNumbers(newRandomNumbers);
    setRandomNumbers2(newRandomNumbers2);
    setRandomNumbers3(newRandomNumbers3);
    setRandomNumbers4(newRandomNumbers4);
    setRandomNumbers5(newRandomNumbers5);
    const date = new Date();
    const formattedDate = date.toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const time = date.toLocaleTimeString();
    setCurrentDate(formattedDate);
    setCurrentTime(time);
  }, []);

  useEffect(() => {
    if (checkAllInputsFilled()) {
      checkAnswer();
      resetInputsAndRandomNumbers();
    } else if (checkAllInputsFilled2()) {
      checkAnswer2();
      resetInputsAndRandomNumbers2();
    } else if (checkAllInputsFilled3()) {
      checkAnswer3();
      resetInputsAndRandomNumbers3();
    } else if (checkAllInputsFilled4()) {
      checkAnswer4();
      resetInputsAndRandomNumbers4();
    } else if (checkAllInputsFilled5()) {
      checkAnswer5();
      resetInputsAndRandomNumbers5();
    }
  }, [userInputs, userInputs2, userInputs3, userInputs4, userInputs5]);

  const resetInputsAndRandomNumbers = () => {
    const newRandomNumbers = Array(6).fill(0).map(getRandomNumber);
    setRandomNumbers(newRandomNumbers);
    setUserInputs(Array(5).fill(""));
  };
  const resetInputsAndRandomNumbers2 = () => {
    const newRandomNumbers2 = Array(6).fill(0).map(getRandomNumber);
    setRandomNumbers2(newRandomNumbers2);
    setUserInputs2(Array(5).fill(""));
  };
  const resetInputsAndRandomNumbers3 = () => {
    const newRandomNumbers3 = Array(6).fill(0).map(getRandomNumber);
    setRandomNumbers3(newRandomNumbers3);
    setUserInputs3(Array(5).fill(""));
  };
  const resetInputsAndRandomNumbers4 = () => {
    const newRandomNumbers4 = Array(6).fill(0).map(getRandomNumber);
    setRandomNumbers4(newRandomNumbers4);
    setUserInputs4(Array(5).fill(""));
  };
  const resetInputsAndRandomNumbers5 = () => {
    const newRandomNumbers5 = Array(6).fill(0).map(getRandomNumber);
    setRandomNumbers5(newRandomNumbers5);
    setUserInputs5(Array(5).fill(""));
  };

  const checkAllInputsFilled = () => {
    return userInputs.every((input) => input !== "");
  };
  const checkAllInputsFilled2 = () => {
    return userInputs2.every((input) => input !== "");
  };
  const checkAllInputsFilled3 = () => {
    return userInputs3.every((input) => input !== "");
  };
  const checkAllInputsFilled4 = () => {
    return userInputs4.every((input) => input !== "");
  };
  const checkAllInputsFilled5 = () => {
    return userInputs5.every((input) => input !== "");
  };

  const checkAnswer = () => {
    const userAnswers = userInputs.map((input) => parseInt(input));

    const correctAnswers = randomNumbers.map((num, index) => {
      const nextIndex = index + 1;
      if (nextIndex < randomNumbers.length) {
        return (num + randomNumbers[nextIndex]) % 10;
      }
      return num;
    });

    const newResults = userAnswers.map((userAnswer, index) => {
      return userAnswer === correctAnswers[index];
    });

    setResults(newResults);

    const correctCount = newResults.filter((result) => result).length;
    const wrongCount = newResults.length - correctCount;

    setTotalCorrectCount(totalCorrectCount + correctCount);
    setTotalWrongCount(totalWrongCount + wrongCount);
  };

  const checkAnswer2 = () => {
    const userAnswers2 = userInputs2.map((input) => parseInt(input));

    const correctAnswers2 = randomNumbers2.map((num, index) => {
      const nextIndex2 = index + 1;
      if (nextIndex2 < randomNumbers2.length) {
        return (num + randomNumbers2[nextIndex2]) % 10;
      }
      return num;
    });

    const newResults2 = userAnswers2.map((userAnswer2, index) => {
      return userAnswer2 === correctAnswers2[index];
    });

    setResults2(newResults2);

    const correctCount2 = newResults2.filter((result2) => result2).length;
    const wrongCount2 = newResults2.length - correctCount2;

    setTotalCorrectCount2(totalCorrectCount2 + correctCount2);
    setTotalWrongCount2(totalWrongCount2 + wrongCount2);
  };

  const checkAnswer3 = () => {
    const userAnswers3 = userInputs3.map((input3) => parseInt(input3));

    const correctAnswers3 = randomNumbers3.map((num, index) => {
      const nextIndex3 = index + 1;
      if (nextIndex3 < randomNumbers3.length) {
        return (num + randomNumbers3[nextIndex3]) % 10;
      }
      return num;
    });

    const newResults3 = userAnswers3.map((userAnswer3, index) => {
      return userAnswer3 === correctAnswers3[index];
    });

    setResults3(newResults3);

    const correctCount3 = newResults3.filter((result3) => result3).length;
    const wrongCount3 = newResults3.length - correctCount3;

    setTotalCorrectCount3(totalCorrectCount3 + correctCount3);
    setTotalWrongCount3(totalWrongCount3 + wrongCount3);
  };

  const checkAnswer4 = () => {
    const userAnswers4 = userInputs4.map((input) => parseInt(input));

    const correctAnswers4 = randomNumbers4.map((num, index) => {
      const nextIndex = index + 1;
      if (nextIndex < randomNumbers4.length) {
        return (num + randomNumbers4[nextIndex]) % 10;
      }
      return num;
    });

    const newResults = userAnswers4.map((userAnswer4, index) => {
      return userAnswer4 === correctAnswers4[index];
    });

    setResults4(newResults);

    const correctCount4 = newResults.filter((result) => result).length;
    const wrongCount4 = newResults.length - correctCount4;

    setTotalCorrectCount4(totalCorrectCount4 + correctCount4);
    setTotalWrongCount4(totalWrongCount4 + wrongCount4);
  };

  const checkAnswer5 = () => {
    const userAnswers = userInputs5.map((input) => parseInt(input));

    const correctAnswers = randomNumbers5.map((num, index) => {
      const nextIndex = index + 1;
      if (nextIndex < randomNumbers5.length) {
        return (num + randomNumbers5[nextIndex]) % 10;
      }
      return num;
    });

    const newResults = userAnswers.map((userAnswer, index) => {
      return userAnswer === correctAnswers[index];
    });

    setResults5(newResults);

    const correctCount = newResults.filter((result) => result).length;
    const wrongCount = newResults.length - correctCount;

    setTotalCorrectCount5(totalCorrectCount5 + correctCount);
    setTotalWrongCount5(totalWrongCount5 + wrongCount);
  };

  const handleUserInputChange = (value: string, index: number) => {
    if (iteration <= 1) {
      const updatedInputs = [...userInputs];
      updatedInputs[index] = value;
      setUserInputs(updatedInputs);
    } else if (iteration === 2) {
      const updatedInputs2 = [...userInputs2];
      updatedInputs2[index] = value;
      setUserInputs2(updatedInputs2);
    } else if (iteration === 3) {
      const updatedInputs3 = [...userInputs3];
      updatedInputs3[index] = value;
      setUserInputs3(updatedInputs3);
    } else if (iteration === 4) {
      const updatedInputs4 = [...userInputs4];
      updatedInputs4[index] = value;
      setUserInputs4(updatedInputs4);
    } else if (iteration === 5) {
      const updatedInputs5 = [...userInputs5];
      updatedInputs5[index] = value;
      setUserInputs5(updatedInputs5);
    }
  };

  const formatTime = (timeInSeconds: number) => {
    const seconds = timeInSeconds;
    return `00:${seconds.toString().padStart(2, "0")}`;
  };

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 10);
  };

  let gameId = 1;

  const allCorrect =
    totalCorrectCount +
    totalCorrectCount2 +
    totalCorrectCount3 +
    totalCorrectCount4 +
    totalCorrectCount5;

  const allWrong =
    totalWrongCount +
    totalWrongCount2 +
    totalWrongCount3 +
    totalWrongCount4 +
    totalWrongCount5;

  const answered = [
    totalCorrectCount + totalWrongCount,
    totalCorrectCount2 + totalWrongCount2,
    totalCorrectCount3 + totalWrongCount3,
    totalCorrectCount4 + totalWrongCount4,
    totalCorrectCount5 + totalWrongCount5,
  ];

  const correctArray = [
    totalCorrectCount,
    totalCorrectCount2,
    totalCorrectCount3,
    totalCorrectCount4,
    totalCorrectCount5,
  ];

  const correctMax = Math.max(...correctArray);
  const correctMin = Math.min(...correctArray);

  const gap = correctMax - correctMin;

  const totalAnswered = allWrong + allCorrect;

  const calculateAnsweredDifferences = () => {
    const differences = [];
    for (let i = 0; i < answered.length - 1; i++) {
      const difference = Math.abs(answered[i] - answered[i + 1]);
      differences.push(difference);
    }
    return differences;
  };

  const answeredDifferences = calculateAnsweredDifferences();
  const totalDifferences = answeredDifferences.reduce(
    (total, difference) => total + difference,
    0
  );

  const calculateJankerValue = () => {
    let jankerValue = 0;

    if (totalDifferences <= 4) {
      jankerValue = 99;
    } else if (totalDifferences >= 5 && totalDifferences <= 8) {
      jankerValue = 95;
    } else if (totalDifferences >= 9 && totalDifferences <= 11) {
      jankerValue = 90;
    } else if (totalDifferences >= 12 && totalDifferences <= 15) {
      jankerValue = 75;
    } else if (totalDifferences >= 16 && totalDifferences <= 18) {
      jankerValue = 50;
    } else if (totalDifferences >= 19 && totalDifferences <= 20) {
      jankerValue = 25;
    } else if (totalDifferences >= 21) {
      jankerValue = 10;
    } else {
      jankerValue = 0;
    }
    return jankerValue;
  };

  const calculateHankerValue = () => {
    let hankerValue = 0;

    if (gap >= 15) {
      hankerValue = 10;
    } else if (gap === 13 || gap === 14) {
      hankerValue = 25;
    } else if (gap === 11 || gap === 12) {
      hankerValue = 50;
    } else if (gap === 9 || gap === 10) {
      hankerValue = 75;
    } else if (gap === 7 || gap === 8) {
      hankerValue = 90;
    } else if (gap === 4 || gap === 5) {
      hankerValue = 95;
    } else if (gap <= 3) {
      hankerValue = 99;
    } else {
      hankerValue = 0;
    }
    return hankerValue;
  };

  const calculatePankerValue = () => {
    let pankerValue = 0;

    if (totalAnswered <= 20) {
      pankerValue = 10;
    } else if (totalAnswered >= 21 && totalAnswered <= 31) {
      pankerValue = 25;
    } else if (totalAnswered >= 31 && totalAnswered <= 41) {
      pankerValue = 50;
    } else if (totalAnswered >= 50 && totalAnswered <= 78) {
      pankerValue = 75;
    } else if (totalAnswered >= 79 && totalAnswered <= 89) {
      pankerValue = 90;
    } else if (totalAnswered >= 90 && totalAnswered <= 119) {
      pankerValue = 95;
    } else if (totalAnswered >= 120) {
      pankerValue = 99;
    } else {
      pankerValue = 99;
    }
    return pankerValue;
  };

  const calculateTinkerValue = () => {
    let tinkerValue = 0;

    if (allWrong === 0) {
      tinkerValue = 99;
    } else if (allWrong >= 1 && allWrong <= 2) {
      tinkerValue = 95;
    } else if (allWrong >= 3 && allWrong <= 5) {
      tinkerValue = 90;
    } else if (allWrong >= 6 && allWrong <= 11) {
      tinkerValue = 75;
    } else if (allWrong >= 12 && allWrong <= 22) {
      tinkerValue = 50;
    } else if (allWrong >= 23 && allWrong <= 30) {
      tinkerValue = 25;
    } else if (allWrong >= 31) {
      tinkerValue = 10;
    } else {
      tinkerValue = 0;
    }

    return tinkerValue;
  };

  const jankerValue = calculateJankerValue();
  const pankerValue = calculatePankerValue();
  const hankerValue = calculateHankerValue();
  const tinkerValue = calculateTinkerValue();

  const handleUpdateUser = async () => {
    await updateUser({
      id: userDataAccount.id,
      gameId: gameId,
      username: userDataAccount.username,
      correct: allCorrect,
      wrong: allWrong,
      panker: pankerValue,
      tinker: tinkerValue,
      janker: jankerValue,
      hanker: hankerValue,
      path: pathname,
      date: currentDate,
      time: currentTime,
    });
    if (pathname === "/") {
      router.push("/");
    }
    console.log("success update data user");
  };

  const handleResetTimer = async () => {
    handleUpdateUser();
    setTotalCorrectCount(0);
    setTotalCorrectCount2(0);
    setTotalCorrectCount3(0);
    setTotalCorrectCount4(0);
    setTotalCorrectCount5(0);
    setTotalWrongCount(0);
    setTotalWrongCount2(0);
    setTotalWrongCount3(0);
    setTotalWrongCount4(0);
    setTotalWrongCount5(0);
    setResults(Array(5).fill(false));
    setResults2(Array(5).fill(false));
    setResults3(Array(5).fill(false));
    setResults4(Array(5).fill(false));
    setResults5(Array(5).fill(false));
    setUserInputs(Array(5).fill(""));
    setUserInputs2(Array(5).fill(""));
    setUserInputs3(Array(5).fill(""));
    setUserInputs4(Array(5).fill(""));
    setUserInputs5(Array(5).fill(""));
    setShowModal(false);
    setIteration(1);
    setStartTimer(false);
    setTimerFinished(false);
    clearInterval(intervalNow as NodeJS.Timeout);
    setTimeRemaining(10);
  };

  return (
    <div className="flex flex-col mt-10">
      <div className={`${startTimer ? "fixed" : "hidden"}`}>
        {formatTime(timeRemaining)}
      </div>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <Card className="bg-black p-6 rounded-md">
            <CardTitle>
              <p>Waktu telah habis!</p>
            </CardTitle>
            <div className="flex flex-col mt-4">
              {allCorrect === 0 ? (
                <p>total benar: 0</p>
              ) : (
                <p>total benar: {allCorrect}</p>
              )}
              {allWrong === 0 ? (
                <p>total salah: 0</p>
              ) : (
                <p>total salah: {allWrong}</p>
              )}
              {allWrong === 0 ? (
                <p>Tinker: 0</p>
              ) : (
                <p>Tinker: {calculateTinkerValue()}</p>
              )}
              {allWrong === 0 ? (
                <p>Janker: 0</p>
              ) : (
                <p>Janker: {calculateJankerValue()}</p>
              )}
              {allWrong === 0 ? (
                <p>Panker: 0</p>
              ) : (
                <p>Panker: {calculatePankerValue()}</p>
              )}
              {allWrong === 0 ? (
                <p>Hanker: 0</p>
              ) : (
                <p>Hanker: {calculateHankerValue()}</p>
              )}
            </div>

            <div className="flex justify-between gap-2 mt-4">
              <SignedIn>
              <Button onClick={handleResetTimer}>Save</Button>
              </SignedIn>
              <Button
                className="bg-transparent border text-white"
                onClick={() => setShowModal(false)}
              >
                Close
              </Button>
            </div>
          </Card>
        </div>
      )}
      <Card className="flex flex-col lg:flex-row mt-10 rounded-lg border-2 justify-center items-center p-4 pl-10 gap-4">
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
                            type="text"
                            maxLength={1}
                            pattern="[0-9]"
                            value={userInputs[rowIndex * 5 + colIndex]}
                            onChange={(e) => {
                              const inputValue = e.target.value;
                              if (/^[0-9]*$/.test(inputValue)) {
                                // Mengizinkan string kosong atau angka
                                handleUserInputChange(
                                  inputValue,
                                  rowIndex * 5 + colIndex
                                );
                              }
                            }}
                            disabled={!startTimer || iteration !== 1}
                            ref={(input) => {
                              if (
                                input &&
                                selectedInput === rowIndex * 5 + colIndex
                              ) {
                                input.focus();
                              }
                            }}
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
            {Array.from({ length: Math.ceil(randomNumbers2.length / 6) }).map(
              (_, rowIndex) => (
                <li key={rowIndex} className="flex flex-col">
                  {randomNumbers2
                    .slice(rowIndex * 6, rowIndex * 6 + 6)
                    .map((randomNumber2, colIndex) => (
                      <React.Fragment key={colIndex}>
                        <span>{randomNumber2}</span>
                        {colIndex < 5 && (
                          <input
                            type="text"
                            maxLength={1}
                            pattern="[0-9]"
                            value={userInputs2[rowIndex * 5 + colIndex]}
                            onChange={(e) => {
                              const inputValue = e.target.value;
                              if (/^[0-9]*$/.test(inputValue)) {
                                // Mengizinkan string kosong atau angka
                                handleUserInputChange(
                                  inputValue,
                                  rowIndex * 5 + colIndex
                                );
                              }
                            }}
                            disabled={iteration !== 2}
                            ref={(input) => {
                              if (
                                input &&
                                selectedInput2 === rowIndex * 5 + colIndex
                              ) {
                                input.focus();
                              }
                            }}
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
            {Array.from({ length: Math.ceil(randomNumbers3.length / 6) }).map(
              (_, rowIndex) => (
                <li key={rowIndex} className="flex flex-col">
                  {randomNumbers3
                    .slice(rowIndex * 6, rowIndex * 6 + 6)
                    .map((randomNumber3, colIndex) => (
                      <React.Fragment key={colIndex}>
                        <span>{randomNumber3}</span>
                        {colIndex < 5 && (
                          <input
                            type="text"
                            maxLength={1}
                            pattern="[0-9]"
                            value={userInputs3[rowIndex * 5 + colIndex]}
                            onChange={(e) => {
                              const inputValue = e.target.value;
                              if (/^[0-9]*$/.test(inputValue)) {
                                // Mengizinkan string kosong atau angka
                                handleUserInputChange(
                                  inputValue,
                                  rowIndex * 5 + colIndex
                                );
                              }
                            }}
                            disabled={iteration !== 3}
                            ref={(input) => {
                              if (
                                input &&
                                selectedInput3 === rowIndex * 5 + colIndex
                              ) {
                                input.focus();
                              }
                            }}
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
            {Array.from({ length: Math.ceil(randomNumbers4.length / 6) }).map(
              (_, rowIndex) => (
                <li key={rowIndex} className="flex flex-col">
                  {randomNumbers4
                    .slice(rowIndex * 6, rowIndex * 6 + 6)
                    .map((randomNumber4, colIndex) => (
                      <React.Fragment key={colIndex}>
                        <span>{randomNumber4}</span>
                        {colIndex < 5 && (
                          <input
                            type="text"
                            maxLength={1}
                            pattern="[0-9]"
                            value={userInputs4[rowIndex * 5 + colIndex]}
                            onChange={(e) => {
                              const inputValue = e.target.value;
                              if (/^[0-9]*$/.test(inputValue)) {
                                // Mengizinkan string kosong atau angka
                                handleUserInputChange(
                                  inputValue,
                                  rowIndex * 5 + colIndex
                                );
                              }
                            }}
                            disabled={iteration !== 4}
                            ref={(input) => {
                              if (
                                input &&
                                selectedInput4 === rowIndex * 5 + colIndex
                              ) {
                                input.focus();
                              }
                            }}
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
            {Array.from({ length: Math.ceil(randomNumbers5.length / 6) }).map(
              (_, rowIndex) => (
                <li key={rowIndex} className="flex flex-col">
                  {randomNumbers5
                    .slice(rowIndex * 6, rowIndex * 6 + 6)
                    .map((randomNumber5, colIndex) => (
                      <React.Fragment key={colIndex}>
                        <span>{randomNumber5}</span>
                        {colIndex < 5 && (
                          <input
                            type="text"
                            maxLength={1}
                            pattern="[0-9]"
                            value={userInputs5[rowIndex * 5 + colIndex]}
                            onChange={(e) => {
                              const inputValue = e.target.value;
                              if (/^[0-9]*$/.test(inputValue)) {
                                // Mengizinkan string kosong atau angka
                                handleUserInputChange(
                                  inputValue,
                                  rowIndex * 5 + colIndex
                                );
                              }
                            }}
                            disabled={iteration !== 5}
                            ref={(input) => {
                              if (
                                input &&
                                selectedInput5 === rowIndex * 5 + colIndex
                              ) {
                                input.focus();
                              }
                            }}
                          />
                        )}
                      </React.Fragment>
                    ))}
                </li>
              )
            )}
          </ul>
        </div>
      </Card>
      <div className="flex justify-center mt-4">
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
