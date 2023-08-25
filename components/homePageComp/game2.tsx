// "use client";

// import { Card } from "@/components/ui/card";
// import { updateUser } from "@/lib/actions/user.actions";
// import { useState, useEffect } from "react";
// import { usePathname, useRouter } from "next/navigation";
// import React from "react";

// const GameTwo = () => {
//   const NUM_ROUNDS = 5;
//   const ROUND_SIZE = 5;
//   const TIME_LIMIT = 10;

//   const [startTimer, setStartTimer] = useState(false);
//   const [timeRemaining, setTimeRemaining] = useState(TIME_LIMIT);
//   const [rounds, setRounds] = useState(
//     Array(NUM_ROUNDS).fill({
//       randomNumbers: Array(ROUND_SIZE).fill(0).map(getRandomNumber),
//       userInputs: Array(ROUND_SIZE).fill(""),
//       results: Array(ROUND_SIZE).fill(false),
//       selectedInput: 0,
//       totalCorrectCount: 0,
//       totalWrongCount: 0,
//     })
//   );
//   const [showModal, setShowModal] = useState(false);
//   const [iteration, setIteration] = useState(1);

//   let intervalNow: NodeJS.Timeout | null = null;

//   // Other variables and hooks...

//   useEffect(() => {
//     const handleKeyPress = (e: KeyboardEvent) => {
//       // Handle key presses...
//     };
//     window.addEventListener("keydown", handleKeyPress);
//     return () => {
//       window.removeEventListener("keydown", handleKeyPress);
//     };
//   }, []);

//   useEffect(() => {
//     if (iteration <= NUM_ROUNDS && startTimer) {
//       intervalNow = setInterval(() => {
//         setTimeRemaining((prevTime) => {
//           if (prevTime === 0) {
//             clearInterval(intervalNow as NodeJS.Timeout);
//             if (iteration < 5) {
//               setIteration((prevIteration) => prevIteration + 1);
//               setTimeRemaining(10);
//               return 10; // Return the new value to satisfy the type
//             } else {
//               setShowModal(true);
//               return prevTime; // Return the same value to satisfy the type
//             }
//           } else {
//             return prevTime - 1;
//           }
//         });
//       }, 1000);
//     }
//     return () => {
//       clearInterval(intervalNow as NodeJS.Timeout);
//     };
//   }, [timeRemaining, iteration, startTimer]);

//   useEffect(() => {
//     setRounds((prevRounds) =>
//       prevRounds.map((round) => ({
//         ...round,
//         randomNumbers: Array(ROUND_SIZE).fill(0).map(getRandomNumber),
//       }))
//     );
//   }, []);

//   useEffect(
//     () => {
//       checkAndProcessAnswers();
//     },
//     rounds.map((round) => round.userInputs)
//   );

//   const resetInputsAndRandomNumbers = (roundIndex: number) => {
//     setRounds((prevRounds) =>
//       prevRounds.map((round, index) =>
//         index === roundIndex
//           ? {
//               ...round,
//               randomNumbers: Array(ROUND_SIZE).fill(0).map(getRandomNumber),
//               userInputs: Array(ROUND_SIZE).fill(""),
//             }
//           : round
//       )
//     );
//   };

//   // Other functions...

//   const handleUserInputChange = (
//     value: string,
//     roundIndex: number,
//     inputIndex: number
//   ) => {
//     setRounds((prevRounds) =>
//       prevRounds.map((round, index) =>
//         index === roundIndex
//           ? {
//               ...round,
//               userInputs: round.userInputs.map((input, i) =>
//                 i === inputIndex ? value : input
//               ),
//             }
//           : round
//       )
//     );
//   };

//   const renderRound = (round, roundIndex) => (
//     <div key={roundIndex} className="flex flex-col w-full">
//       <ul className="w-full">
//         {/* Render inputs based on round.randomNumbers */}
//       </ul>
//     </div>
//   );

//   return (
//     <div className="flex flex-col mt-10">
//       {/* Render timer and modal */}
//       <Card className="flex flex-row mt-10 rounded-lg border-2 justify-center items-center p-4 pl-10 gap-4">
//         {rounds.map(renderRound)}
//       </Card>

//       <div className="flex justify-center">
//         {startTimer ? (
//           <button
//             onClick={handleResetTimer}
//             className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
//           >
//             Reset
//           </button>
//         ) : (
//           <button
//             onClick={() => setStartTimer(true)}
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           >
//             Start
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default GameTwo;
