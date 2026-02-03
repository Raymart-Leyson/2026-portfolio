"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import CartoonButton from "@/components/CartoonButton";

// Game constants
const GRID_SIZE = 20;
const INITIAL_SPEED = 150;
const SPEED_INCREMENT = 2;

type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";
type Point = { x: number; y: number };

export default function SnakeGame() {
    const [snake, setSnake] = useState<Point[]>([{ x: 10, y: 10 }]);
    const [food, setFood] = useState<Point>({ x: 15, y: 10 });
    const [direction, setDirection] = useState<Direction>("RIGHT");
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [speed, setSpeed] = useState(INITIAL_SPEED);
    const [highScore, setHighScore] = useState(0);

    // Refs to handle closure staleness in intervals/listeners
    const directionRef = useRef<Direction>("RIGHT");
    const isPlayingRef = useRef(false);

    // Initialize/Reset game
    const startGame = () => {
        setSnake([{ x: 10, y: 10 }]);
        setFood(generateFood([{ x: 10, y: 10 }]));
        setDirection("RIGHT");
        directionRef.current = "RIGHT";
        setGameOver(false);
        setScore(0);
        setSpeed(INITIAL_SPEED);
        setIsPlaying(true);
        isPlayingRef.current = true;
    };

    const generateFood = useCallback((currentSnake: Point[]): Point => {
        let newFood: Point;
        let isCollision;
        do {
            newFood = {
                x: Math.floor(Math.random() * GRID_SIZE),
                y: Math.floor(Math.random() * GRID_SIZE),
            };
            isCollision = currentSnake.some(
                segment => segment.x === newFood.x && segment.y === newFood.y
            );
        } while (isCollision);
        return newFood;
    }, []);

    const moveSnake = useCallback(() => {
        if (gameOver || !isPlaying) return;

        setSnake(prevSnake => {
            const head = prevSnake[0];
            const newHead = { ...head };

            switch (directionRef.current) {
                case "UP":
                    newHead.y -= 1;
                    break;
                case "DOWN":
                    newHead.y += 1;
                    break;
                case "LEFT":
                    newHead.x -= 1;
                    break;
                case "RIGHT":
                    newHead.x += 1;
                    break;
            }

            // Check collision with walls
            if (
                newHead.x < 0 ||
                newHead.x >= GRID_SIZE ||
                newHead.y < 0 ||
                newHead.y >= GRID_SIZE
            ) {
                handleGameOver();
                return prevSnake;
            }

            // Check collision with self
            if (prevSnake.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
                handleGameOver();
                return prevSnake;
            }

            const newSnake = [newHead, ...prevSnake];

            // Check collision with food
            if (newHead.x === food.x && newHead.y === food.y) {
                setScore(s => s + 1);
                setSpeed(s => Math.max(50, s - SPEED_INCREMENT));
                setFood(generateFood(newSnake));
                // Don't pop the tail, snake grows
            } else {
                newSnake.pop();
            }

            return newSnake;
        });
    }, [food, gameOver, isPlaying, generateFood]);

    const handleGameOver = () => {
        setGameOver(true);
        setIsPlaying(false);
        isPlayingRef.current = false;
        if (score > highScore) {
            setHighScore(score);
            localStorage.setItem("snakeHighScore", score.toString());
        }
    };

    // Keyboard controls
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isPlayingRef.current) return;

            switch (e.key) {
                case "ArrowUp":
                case "w":
                case "W":
                    if (directionRef.current !== "DOWN") directionRef.current = "UP";
                    break;
                case "ArrowDown":
                case "s":
                case "S":
                    if (directionRef.current !== "UP") directionRef.current = "DOWN";
                    break;
                case "ArrowLeft":
                case "a":
                case "A":
                    if (directionRef.current !== "RIGHT") directionRef.current = "LEFT";
                    break;
                case "ArrowRight":
                case "d":
                case "D":
                    if (directionRef.current !== "LEFT") directionRef.current = "RIGHT";
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    // Game Loop using useInterval pattern for stability
    useInterval(() => {
        if (isPlaying) {
            moveSnake();
        }
    }, isPlaying ? speed : null);

    // Load high score
    useEffect(() => {
        const saved = localStorage.getItem("snakeHighScore");
        if (saved) setHighScore(parseInt(saved));
    }, []);

    // Helper to handle direction change from buttons
    const handleDirectionBtn = (newDir: Direction) => {
        if (
            (newDir === "UP" && directionRef.current !== "DOWN") ||
            (newDir === "DOWN" && directionRef.current !== "UP") ||
            (newDir === "LEFT" && directionRef.current !== "RIGHT") ||
            (newDir === "RIGHT" && directionRef.current !== "LEFT")
        ) {
            directionRef.current = newDir;
        }
    };

    return (
        <div className="bg-white p-6 rounded-2xl border-4 border-border shadow-sticker flex flex-col items-center gap-4 w-full">
            <div className="flex justify-between w-full items-center">
                <h3 className="text-xl font-bold text-foreground uppercase tracking-wide">Snake</h3>
                <div className="text-sm font-bold text-gray-500">
                    High Score: {highScore}
                </div>
            </div>

            <div className="text-2xl font-black text-accent-1">
                Score: {score}
            </div>

            <div
                className="relative bg-gray-100 rounded-xl border-4 border-border overflow-hidden"
                style={{
                    width: "min(300px, 80vw)",
                    height: "min(300px, 80vw)",
                    display: "grid",
                    gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
                    gridTemplateRows: `repeat(${GRID_SIZE}, 1fr)`
                }}
            >
                {/* Overlay for Game Over / Start */}
                {!isPlaying && (
                    <div className="absolute inset-0 bg-black/50 z-10 flex flex-col items-center justify-center text-white p-4 text-center backdrop-blur-sm">
                        <div className="text-2xl font-black mb-2">
                            {gameOver ? "GAME OVER" : "Ready?"}
                        </div>
                        <CartoonButton onClick={startGame} variant="primary" className="text-sm py-2 px-4 shadow-none">
                            {gameOver ? "Try Again" : "Play Now"}
                        </CartoonButton>
                    </div>
                )}

                {/* Grid */}
                {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => {
                    const x = i % GRID_SIZE;
                    const y = Math.floor(i / GRID_SIZE);
                    const isSnakeHead = snake[0].x === x && snake[0].y === y;
                    const isSnakeBody = snake.some((s, idx) => s.x === x && s.y === y && idx !== 0);
                    const isFood = food.x === x && food.y === y;

                    return (
                        <div key={i} className="w-full h-full relative">
                            {isSnakeHead && (
                                <div
                                    className="absolute inset-0 bg-accent-1 rounded-sm z-10"
                                />
                            )}
                            {isSnakeBody && (
                                <div className="absolute inset-0 bg-accent-1/60 rounded-sm" />
                            )}
                            {isFood && (
                                <motion.div
                                    className="absolute inset-0 m-1 bg-accent-2 rounded-full shadow-sm"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ repeat: Infinity, duration: 2 }}
                                />
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Controls */}
            <div className="grid grid-cols-3 gap-2 mt-2 w-full max-w-[200px]">
                <div />
                <button
                    className="p-4 bg-gray-100 rounded-xl border-2 border-border active:bg-gray-200 active:scale-95 transition-all"
                    onClick={() => handleDirectionBtn("UP")}
                >
                    ⬆️
                </button>
                <div />
                <button
                    className="p-4 bg-gray-100 rounded-xl border-2 border-border active:bg-gray-200 active:scale-95 transition-all"
                    onClick={() => handleDirectionBtn("LEFT")}
                >
                    ⬅️
                </button>
                <button
                    className="p-4 bg-gray-100 rounded-xl border-2 border-border active:bg-gray-200 active:scale-95 transition-all"
                    onClick={() => handleDirectionBtn("DOWN")}
                >
                    ⬇️
                </button>
                <button
                    className="p-4 bg-gray-100 rounded-xl border-2 border-border active:bg-gray-200 active:scale-95 transition-all"
                    onClick={() => handleDirectionBtn("RIGHT")}
                >
                    ➡️
                </button>
            </div>

            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-2">
                Use arrow keys, WASD, or buttons
            </p>
        </div>
    );
}

// Custom hook for stable intervals
function useInterval(callback: () => void, delay: number | null) {
    const savedCallback = useRef(callback);

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}
