import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { tarotCards, type TarotCard } from '../../data/tarotCards';

export default function TarotDraw() {
    const [drawnCard, setDrawnCard] = useState<TarotCard | null>(null);
    const [isShuffling, setIsShuffling] = useState(false);
    const [showResult, setShowResult] = useState(false);

    const handleDraw = () => {
        if (isShuffling) return;

        setIsShuffling(true);
        setDrawnCard(null);
        setShowResult(false);

        // Simulation of shuffling time
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * tarotCards.length);
            setDrawnCard(tarotCards[randomIndex]);
            setIsShuffling(false);

            // Short delay before showing result to allow flip animation or transition
            setTimeout(() => {
                setShowResult(true);
            }, 500);
        }, 2000);
    };

    return (
        <div className="w-full max-w-2xl mx-auto p-4 text-center">
            <div className="relative h-[400px] md:h-[500px] flex items-center justify-center mb-8 perspective-1000">
                <AnimatePresence mode="wait">
                    {!showResult ? (
                        <motion.div
                            key="deck"
                            className="w-48 h-80 md:w-64 md:h-96 bg-gradient-to-br from-blue-900 to-black rounded-xl border-2 border-white/20 shadow-2xl flex items-center justify-center cursor-pointer relative"
                            onClick={handleDraw}
                            initial={{ rotateY: 0 }}
                            animate={isShuffling ? {
                                x: [0, 10, -10, 5, -5, 0],
                                rotateZ: [0, 2, -2, 1, -1, 0],
                                scale: [1, 1.05, 1]
                            } : {
                                y: [0, -10, 0]
                            }}
                            transition={isShuffling ? { duration: 0.5, repeat: 3 } : { duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)" }}
                        >
                            <div className="text-white/30 text-6xl font-serif">?</div>

                            {/* Card Pattern (Decorative) */}
                            <div className="absolute inset-2 border border-white/10 rounded-lg"></div>

                            {isShuffling && (
                                <motion.div
                                    className="absolute inset-0 bg-white/20"
                                    animate={{ opacity: [0, 0.5, 0] }}
                                    transition={{ duration: 0.2, repeat: Infinity }}
                                />
                            )}
                        </motion.div>
                    ) : (
                        drawnCard && (
                            <motion.div
                                key="card"
                                initial={{ rotateY: 180, opacity: 0, scale: 0.8 }}
                                animate={{ rotateY: 360, opacity: 1, scale: 1 }}
                                transition={{ type: "spring", damping: 15, stiffness: 100, duration: 0.8 }}
                                className="w-48 h-80 md:w-64 md:h-96 bg-white rounded-xl shadow-2xl overflow-hidden relative"
                            >
                                {/* Placeholder for card image since we might not have real assets yet */}
                                <div className="w-full h-full bg-gray-200 flex flex-col">
                                    <div className="h-2/3 bg-gray-300 relative overflow-hidden">
                                        {/* Use img tag if asset exists, otherwise fallback */}
                                        <img
                                            src={drawnCard.image}
                                            alt={drawnCard.name}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).style.display = 'none';
                                                (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                                            }}
                                        />
                                        <div className="hidden absolute inset-0 flex items-center justify-center text-gray-500 font-bold text-xl bg-gray-100">
                                            {drawnCard.name}
                                        </div>
                                    </div>
                                    <div className="h-1/3 p-4 flex flex-col justify-center items-center bg-white">
                                        <h3 className="font-serif text-lg font-bold text-gray-800 mb-1">{drawnCard.name}</h3>
                                        <p className="text-xs text-sakura-pink font-bold">{drawnCard.category}</p>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    )}
                </AnimatePresence>
            </div>

            <div className="min-h-[120px]">
                <AnimatePresence>
                    {showResult && drawnCard && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100 inline-block max-w-lg"
                        >
                            <h3 className="text-xl font-bold font-serif text-tarot-blue mb-2">Message</h3>
                            <p className="text-gray-700 leading-relaxed font-sans">{drawnCard.message}</p>

                            <button
                                onClick={handleDraw}
                                className="mt-4 text-sm text-gray-400 hover:text-sakura-pink transition-colors underline underline-offset-4"
                            >
                                もう一度引く
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>

                {!showResult && !isShuffling && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-white/80 text-lg font-serif"
                    >
                        カードをタップしてください
                    </motion.p>
                )}

                {isShuffling && (
                    <p className="text-white/80 animate-pulse font-serif">
                        Shuffling...
                    </p>
                )}
            </div>
        </div>
    );
}
