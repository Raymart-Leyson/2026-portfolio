"use client";

import { useWindowContext } from "@/components/hooks/useWindowContext";
import { WindowId } from "@/components/hooks/useWindowContext";
import { TicTacToeIcon, SnakeIcon } from "@/components/icons/DoodleIcons";

const GAMES: { id: WindowId; label: string; icon: React.ReactNode }[] = [
    { id: "tictactoe", label: "Tic-Tac-Toe", icon: <TicTacToeIcon /> },
    { id: "snake", label: "Snake Game", icon: <SnakeIcon /> },
];

export default function GamesFolder() {
    const { openWindow } = useWindowContext();

    return (
        <div className="w-full h-full bg-[#f0f0f0] p-6 flex flex-wrap content-start gap-6 select-none">
            <div className="w-full pb-4 border-b-2 border-gray-300 mb-2">
                <h2 className="text-gray-500 font-bold text-sm uppercase tracking-wider">C:\Users\Drayley\Games</h2>
            </div>
            {GAMES.map((game) => (
                <button
                    key={game.id}
                    onClick={() => openWindow(game.id)}
                    className="flex flex-col items-center gap-2 p-2 w-28 h-28 rounded-xl hover:bg-blue-100 hover:border-blue-300 border border-transparent transition-all group"
                >
                    <div className="w-16 h-16 drop-shadow-sm group-hover:scale-105 transition-transform">{game.icon}</div>
                    <span className="text-sm font-bold text-gray-700 text-center leading-tight">{game.label}</span>
                </button>
            ))}
        </div>
    );
}
