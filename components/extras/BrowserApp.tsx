"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function BrowserApp() {
    const [url, setUrl] = useState("https://www.wikipedia.org");
    const [inputUrl, setInputUrl] = useState("https://www.wikipedia.org");
    const [history, setHistory] = useState<string[]>(["https://www.wikipedia.org"]);
    const [isLoading, setIsLoading] = useState(false);

    const handleNavigate = (e?: React.FormEvent) => {
        e?.preventDefault();
        let target = inputUrl;
        if (!target.startsWith("http")) {
            target = `https://${target}`;
        }
        setUrl(target);
        setInputUrl(target);
        setIsLoading(true);
    };

    const handleIframeLoad = () => {
        setIsLoading(false);
    };

    return (
        <div className="flex flex-col h-full w-full bg-white">
            {/* Browser Toolbar */}
            <div className="flex items-center gap-2 p-2 bg-gray-100 border-b-2 border-border-main">
                {/* Navigation Controls */}
                <div className="flex gap-1">
                    <button className="p-1.5 rounded-md hover:bg-gray-200 text-gray-600 disabled:opacity-50">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                    </button>
                    <button className="p-1.5 rounded-md hover:bg-gray-200 text-gray-600 disabled:opacity-50">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                    </button>
                    <button
                        onClick={() => { setIsLoading(true); const current = url; setUrl(''); setTimeout(() => setUrl(current), 10); }}
                        className="p-1.5 rounded-md hover:bg-gray-200 text-gray-600"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 4v6h-6" /><path d="M20.49 15a9 9 0 1 1 2.12-9.36L23 10" /></svg>
                    </button>
                </div>

                {/* Address Bar */}
                <form onSubmit={handleNavigate} className="flex-1">
                    <input
                        type="text"
                        value={inputUrl}
                        onChange={(e) => setInputUrl(e.target.value)}
                        className="w-full px-3 py-1.5 text-sm bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-accent-2 transition-all font-mono"
                        placeholder="Search or enter website name"
                    />
                </form>

                {/* Menu Icon */}
                <button className="p-1.5 rounded-md hover:bg-gray-200 text-gray-600">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" /></svg>
                </button>
            </div>

            {/* Browser Content */}
            <div className="flex-1 relative bg-white">
                {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
                        <div className="w-8 h-8 border-4 border-accent-2 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                )}

                <iframe
                    src={url}
                    className="w-full h-full border-0"
                    title="Browser Content"
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                    onLoad={handleIframeLoad}
                />

                {/* Overlay for "Unable to Connect" - simplistic check */}
                <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center bg-gray-50 opacity-0 transition-opacity duration-300">
                    {/* Fallback UI if needed */}
                </div>
            </div>
        </div>
    );
}
