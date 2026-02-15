import React from 'react';

// Common props for consistency
interface IconProps {
    className?: string;
}

// Helper for the "sticker" look - bold outlines and soft fills
const DoodleSvg = ({ children, className = "", viewBox = "0 0 100 100" }: { children: React.ReactNode, className?: string, viewBox?: string }) => (
    <svg
        viewBox={viewBox}
        className={`w-full h-full drop-shadow-sm ${className}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        {children}
    </svg>
);

export const AboutIcon = () => (
    <DoodleSvg>
        <circle cx="50" cy="50" r="40" fill="#E0F7FA" stroke="black" strokeWidth="4" />
        <path d="M50 25 C50 25 35 25 35 45 C35 60 40 70 50 70 C60 70 65 60 65 45 C65 25 50 25 50 25 Z" fill="#FFCCBC" stroke="black" strokeWidth="3" />
        <path d="M30 90 Q50 70 70 90" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" />
        <circle cx="43" cy="45" r="3" fill="black" />
        <circle cx="57" cy="45" r="3" fill="black" />
        <path d="M47 55 Q50 58 53 55" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" />
    </DoodleSvg>
);

export const ExperienceIcon = () => (
    <DoodleSvg>
        <rect x="20" y="35" width="60" height="45" rx="5" fill="#8D6E63" stroke="black" strokeWidth="4" />
        <path d="M35 35 V25 A15 15 0 0 1 65 25 V35" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" />
        <rect x="45" y="35" width="10" height="45" fill="#6D4C41" stroke="none" />
        <circle cx="50" cy="55" r="3" fill="#FFAB91" />
    </DoodleSvg>
);

export const SkillsIcon = () => (
    <DoodleSvg>
        <g transform="rotate(45 50 50)">
            <rect x="45" y="20" width="10" height="60" rx="2" fill="#CFD8DC" stroke="black" strokeWidth="3" />
            <path d="M40 20 L60 20 L65 35 L35 35 Z" fill="#90A4AE" stroke="black" strokeWidth="3" />
            <circle cx="50" cy="70" r="8" fill="#EF9A9A" stroke="black" strokeWidth="3" />
        </g>
        <g transform="rotate(-45 50 50)">
            <rect x="45" y="20" width="10" height="60" rx="2" fill="#FFE082" stroke="black" strokeWidth="3" />
            <path d="M35 20 H65 V30 H35 Z" fill="#FFCA28" stroke="black" strokeWidth="3" />
        </g>
    </DoodleSvg>
);

export const ProjectsIcon = () => (
    <DoodleSvg>
        <path d="M10 25 L35 25 L45 35 L90 35 L90 85 L10 85 Z" fill="#FFE082" stroke="black" strokeWidth="4" strokeLinejoin="round" />
        <path d="M10 45 L90 45" fill="none" stroke="black" strokeWidth="3" />
        <rect x="30" y="55" width="40" height="5" rx="2" fill="#FFF" opacity="0.5" />
    </DoodleSvg>
);

export const BrowserIcon = () => (
    <DoodleSvg>
        <circle cx="50" cy="50" r="40" fill="#4FC3F7" stroke="black" strokeWidth="4" />
        <ellipse cx="50" cy="50" rx="40" ry="15" fill="none" stroke="black" strokeWidth="3" strokeDasharray="5 5" />
        <ellipse cx="50" cy="50" rx="15" ry="40" fill="none" stroke="black" strokeWidth="3" strokeDasharray="5 5" />
        <path d="M15 35 Q50 20 85 35" fill="none" stroke="black" strokeWidth="3" />
    </DoodleSvg>
);

export const ResumeIcon = () => (
    <DoodleSvg>
        <rect x="25" y="15" width="50" height="70" rx="2" fill="#F5F5F5" stroke="black" strokeWidth="4" />
        <path d="M35 30 H65" stroke="#BDBDBD" strokeWidth="3" strokeLinecap="round" />
        <path d="M35 40 H65" stroke="#BDBDBD" strokeWidth="3" strokeLinecap="round" />
        <path d="M35 50 H55" stroke="#BDBDBD" strokeWidth="3" strokeLinecap="round" />
        <circle cx="55" cy="70" r="10" fill="#EF5350" stroke="black" strokeWidth="3" />
        <path d="M50 70 L55 75 L65 65" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </DoodleSvg>
);

export const GamesFolderIcon = () => (
    <DoodleSvg>
        <path d="M10 20 L40 20 L50 30 L90 30 L90 80 L10 80 Z" fill="#CE93D8" stroke="black" strokeWidth="4" strokeLinejoin="round" />
        <circle cx="35" cy="55" r="5" fill="#F48FB1" stroke="black" strokeWidth="2" />
        <path d="M60 55 L70 55 M65 50 L65 60" stroke="#F48FB1" strokeWidth="3" strokeLinecap="round" />
    </DoodleSvg>
);

export const AutomationIcon = () => (
    <DoodleSvg>
        <rect x="25" y="30" width="50" height="45" rx="8" fill="#B0BEC5" stroke="black" strokeWidth="4" />
        <path d="M35 20 V30 M65 20 V30" stroke="black" strokeWidth="4" strokeLinecap="round" />
        <circle cx="35" cy="15" r="5" fill="#EF5350" stroke="black" strokeWidth="3" />
        <circle cx="65" cy="15" r="5" fill="#EF5350" stroke="black" strokeWidth="3" />
        <rect x="35" y="45" width="10" height="5" fill="#29B6F6" />
        <rect x="55" y="45" width="10" height="5" fill="#29B6F6" />
        <path d="M40 65 Q50 70 60 65" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" />
    </DoodleSvg>
);

export const ContactIcon = () => (
    <DoodleSvg>
        <rect x="15" y="30" width="70" height="45" rx="5" fill="#81C784" stroke="black" strokeWidth="4" />
        <path d="M15 30 L50 55 L85 30" fill="none" stroke="black" strokeWidth="3" strokeLinejoin="round" />
        <circle cx="50" cy="52" r="8" fill="#FFF" stroke="black" strokeWidth="2" />
        <text x="50" y="56" textAnchor="middle" fontSize="10" fontWeight="bold" fill="black">@</text>
    </DoodleSvg>
);

export const ChannelsIcon = () => (
    <DoodleSvg>
        <path d="M25 75 Q50 85 75 75" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" />
        <path d="M50 75 L50 45" fill="none" stroke="black" strokeWidth="4" />
        <path d="M25 25 Q50 50 75 25" fill="none" stroke="#EF5350" strokeWidth="4" strokeLinecap="round" />
        <circle cx="50" cy="45" r="5" fill="black" />
        <path d="M20 15 Q50 40 80 15" fill="none" stroke="#EF5350" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
    </DoodleSvg>
);

export const MusicIcon = () => (
    <DoodleSvg>
        <circle cx="50" cy="50" r="40" fill="#F06292" stroke="black" strokeWidth="4" />
        <path d="M40 65 L40 35 L70 25 L70 55" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="35" cy="65" r="8" fill="white" />
        <circle cx="65" cy="55" r="8" fill="white" />
    </DoodleSvg>
);

export const TicTacToeIcon = () => (
    <DoodleSvg>
        <path d="M35 25 V75 M65 25 V75 M25 35 H75 M25 65 H75" stroke="black" strokeWidth="4" strokeLinecap="round" />
        <path d="M30 20 L45 35 M45 20 L30 35" stroke="#EF5350" strokeWidth="3" strokeLinecap="round" />
        <circle cx="60" cy="50" r="8" fill="none" stroke="#42A5F5" strokeWidth="3" />
    </DoodleSvg>
);

export const SnakeIcon = () => (
    <DoodleSvg>
        <path d="M30 60 Q30 40 50 40 T70 60 T90 40" fill="none" stroke="#66BB6A" strokeWidth="8" strokeLinecap="round" />
        <circle cx="30" cy="60" r="6" fill="#66BB6A" />
        <circle cx="90" cy="40" r="8" fill="#66BB6A" />
        <circle cx="92" cy="38" r="2" fill="black" />
    </DoodleSvg>
);
