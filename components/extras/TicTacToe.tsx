"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import CartoonButton from "@/components/CartoonButton";

export default function TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const [winner, setWinner] = useState<string | null>(null);

    const checkWinner = (squares: any[]) => {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    const handleClick = (index: number) => {
        if (board[index] || winner) return;
        const newBoard = [...board];
        newBoard[index] = isXNext ? "X" : "O";
        setBoard(newBoard);
        setWinner(checkWinner(newBoard));
        setIsXNext(!isXNext);
    };

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setWinner(null);
        setIsXNext(true);
    };

    return (
        <div className="bg-white p-6 rounded-2xl border-4 border-border shadow-sticker flex flex-col items-center gap-4">
            <h3 className="text-xl font-bold text-foreground uppercase tracking-wide">Tic-Tac-Toe</h3>

            <div className="grid grid-cols-3 gap-2">
                {board.map((cell, index) => (
                    <motion.button
                        key={index}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleClick(index)}
                        className={`
                            w-16 h-16 sm:w-20 sm:h-20 
                            rounded-xl border-4 border-border 
                            text-3xl font-black flex items-center justify-center
                            transition-colors
                            ${cell === "X" ? "bg-accent-1 text-white border-accent-1" : ""}
                            ${cell === "O" ? "bg-accent-2 text-white border-accent-2" : ""}
                            ${!cell ? "bg-background hover:bg-gray-100" : ""}
                        `}
                    >
                        {cell}
                    </motion.button>
                ))}
            </div>

            <div className="h-8 flex items-center justify-center">
                {winner ? (
                    <span className="font-bold text-green-600 animate-bounce">Winner: {winner}! 🎉</span>
                ) : (
                    <span className="text-sm font-bold text-gray-400">Next Player: {isXNext ? "X" : "O"}</span>
                )}
            </div>

            <CartoonButton onClick={resetGame} className="w-full py-2 text-sm" variant="secondary">
                Restart Game
            </CartoonButton>
        </div>
    );
}
