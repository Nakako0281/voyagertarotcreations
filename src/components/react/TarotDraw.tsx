import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { tarotCards, type TarotCard } from '../../data/tarotCards';

export default function TarotDraw() {
    const [drawnCard, setDrawnCard] = useState<TarotCard | null>(null);
    const [showResult, setShowResult] = useState(false);
    const [isFlipping, setIsFlipping] = useState(false);

    const handleDraw = () => {
        if (isFlipping) return;

        setIsFlipping(true);
        // Force Star card as per request
        setDrawnCard(tarotCards[17]);

        // Trigger the flip sequence
        setTimeout(() => {
            setShowResult(true);
        }, 50); // Small delay to ensure state update
    };

    const onFlipComplete = () => {
        setIsFlipping(false);
    };

    const handleReset = () => {
        setShowResult(false);
        setDrawnCard(null);
        setIsFlipping(false);
    };

    return (
        <div className="w-full max-w-2xl mx-auto p-4 text-center">
            <div className="relative h-[400px] md:h-[500px] flex items-center justify-center mb-8 perspective-1000">
                <AnimatePresence mode="wait" onExitComplete={() => null}>
                    {!showResult ? (
                        <motion.div
                            key="deck"
                            className="w-48 h-80 md:w-64 md:h-96 rounded-xl border-2 border-white/20 shadow-2xl flex items-center justify-center cursor-pointer relative overflow-hidden bg-tarot-dark"
                            onClick={handleDraw}
                            initial={{ rotateY: 0 }}
                            exit={{
                                rotateY: 90,
                                opacity: 1,
                                transition: { duration: 0.8, ease: "easeIn" }
                            }}
                            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(228, 0, 127, 0.3)" }}
                        >
                            {/* Card Back Image */}
                            <img
                                src="/images/cards/tarot_back.webp"
                                alt="Tarot Back"
                                className="absolute inset-0 w-full h-full object-cover"
                            />

                            <div className="relative z-10 text-white/30 text-6xl font-serif">?</div>

                            {/* Card Pattern (Decorative) */}
                            <div className="absolute inset-2 border border-white/10 rounded-lg z-10"></div>
                        </motion.div>
                    ) : (
                        drawnCard && (
                            <motion.div
                                key="card"
                                initial={{ rotateY: -90, opacity: 1 }}
                                animate={{ rotateY: 0, opacity: 1 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                onAnimationComplete={onFlipComplete}
                                className="w-48 h-80 md:w-64 md:h-96 bg-white rounded-xl shadow-2xl overflow-hidden relative"
                            >
                                {/* Full Card Image Display */}
                                <div className="w-full h-full bg-gray-200 relative">
                                    <img
                                        src={drawnCard.image}
                                        alt={drawnCard.name}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).style.display = 'none';
                                            (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                                        }}
                                    />
                                    {/* Fallback if image fails */}
                                    <div className="hidden absolute inset-0 flex items-center justify-center text-gray-500 font-bold text-xl bg-gray-100">
                                        {drawnCard.name}
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
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100 inline-block max-w-lg"
                        >
                            <h3 className="text-xl font-bold font-serif text-tarot-blue mb-2">Message</h3>
                            <p className="text-gray-700 leading-relaxed font-sans">{drawnCard.message}</p>

                            <button
                                onClick={handleReset}
                                className="mt-4 text-sm text-gray-400 hover:text-sakura-pink transition-colors underline underline-offset-4"
                            >
                                もう一度引く
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>

                {!showResult && !isFlipping && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-white/80 text-lg font-serif"
                    >
                        カードをタップしてください
                    </motion.p>
                )}
            </div>
        </div>
    );
}
