import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { tarotCards, type TarotCard } from '../../data/tarotCards';

export default function TarotDraw() {
    const [deck, setDeck] = useState<TarotCard[]>([]);
    const [selectedCard, setSelectedCard] = useState<TarotCard | null>(null);
    const [isRevealed, setIsRevealed] = useState(false);

    // Shuffle and pick 7 cards
    const containerRef = React.useRef<HTMLDivElement>(null);

    // Shuffle and pick 7 cards
    const shuffleDeck = () => {
        const shuffled = [...tarotCards].sort(() => 0.5 - Math.random());
        setDeck(shuffled.slice(0, 7));
        setSelectedCard(null);
        setIsRevealed(false);
    };

    useEffect(() => {
        shuffleDeck();
    }, []);

    const handleCardClick = (card: TarotCard) => {
        if (selectedCard) return;
        setSelectedCard(card);
        setTimeout(() => {
            setIsRevealed(true);
            // Smooth scroll to container top on reveal
            if (containerRef.current) {
                containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 800);
    };

    const handleReset = () => {
        shuffleDeck();
    };

    return (
        <div ref={containerRef} className="w-full max-w-6xl mx-auto p-4 text-center min-h-[600px] flex flex-col items-center justify-center">

            {/* Content Container: Switches to row layout on desktop when card is selected */}
            <div className={`w-full flex transition-all duration-500 ${selectedCard ? 'flex-col md:flex-row md:items-start md:text-left md:justify-center gap-8' : 'flex-col items-center'}`}>

                {/* Main Display Area (Cards) */}
                <div
                    className={`relative flex items-center justify-center transition-all duration-500 ${selectedCard ? 'w-full md:w-auto' : 'w-full min-h-[400px]'}`}
                    style={{ perspective: "1000px" }}
                >
                    <AnimatePresence mode="wait">
                        {!selectedCard ? (
                            // 7-Card Selection View
                            <>
                                {/* Mobile View: 2-3-2 Layout */}
                                <motion.div
                                    className="flex flex-col gap-4 md:hidden"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    {/* Row 1: 2 Cards */}
                                    <div className="flex justify-center gap-3">
                                        {deck.slice(0, 2).map((card, index) => (
                                            <CardItem key={card.id} card={card} index={index} onClick={handleCardClick} />
                                        ))}
                                    </div>
                                    {/* Row 2: 3 Cards */}
                                    <div className="flex justify-center gap-3">
                                        {deck.slice(2, 5).map((card, index) => (
                                            <CardItem key={card.id} card={card} index={index + 2} onClick={handleCardClick} />
                                        ))}
                                    </div>
                                    {/* Row 3: 2 Cards */}
                                    <div className="flex justify-center gap-3">
                                        {deck.slice(5, 7).map((card, index) => (
                                            <CardItem key={card.id} card={card} index={index + 5} onClick={handleCardClick} />
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Desktop View: Standard Wrap/Row */}
                                <motion.div
                                    className="hidden md:flex flex-wrap justify-center gap-4"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    {deck.map((card, index) => (
                                        <CardItem key={card.id} card={card} index={index} onClick={handleCardClick} />
                                    ))}
                                </motion.div>
                            </>
                        ) : (
                            // Selected Card Reveal View
                            <div className="relative flex flex-col items-center">
                                {/* Reduced size for mobile, standard for desktop */}
                                <div className="relative w-56 h-80 md:w-72 md:h-[432px]">
                                    <motion.div
                                        layoutId={`card-${selectedCard.id}`}
                                        className="w-full h-full relative"
                                        animate={{
                                            rotateY: isRevealed ? 180 : 0,
                                            scale: isRevealed ? [1, 1.05, 1] : 1,
                                            y: isRevealed ? [0, -10, 0] : 0,
                                        }}
                                        transition={{
                                            duration: 0.6,
                                            times: [0, 0.5, 1],
                                            ease: "easeInOut"
                                        }}
                                        style={{ transformStyle: "preserve-3d" }}
                                    >
                                        {/* Back Face */}
                                        <div
                                            className="absolute inset-0 rounded-xl border-2 border-white/20 shadow-2xl overflow-hidden bg-text-dark"
                                            style={{ backfaceVisibility: "hidden", transform: "rotateY(0deg)" }}
                                        >
                                            <img src="/images/cards/tarot_back.webp" alt="Back" className="w-full h-full object-cover" />
                                        </div>

                                        {/* Front Face */}
                                        <div
                                            className="absolute inset-0 bg-white rounded-xl border-2 border-white/20 shadow-2xl overflow-hidden"
                                            style={{
                                                backfaceVisibility: "hidden",
                                                transform: "rotateY(180deg)"
                                            }}
                                        >
                                            <img
                                                src={selectedCard.image}
                                                alt={selectedCard.name}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    (e.target as HTMLImageElement).style.display = 'none';
                                                    (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                                                }}
                                            />
                                            <div className="hidden absolute inset-0 flex items-center justify-center text-gray-500 font-bold text-xl bg-gray-100">
                                                {selectedCard.name}
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Message & Reset Button */}
                <div className={`transition-all duration-500 ${selectedCard ? 'w-full md:flex-1' : 'w-full max-w-lg'}`}>
                    <AnimatePresence>
                        {isRevealed && selectedCard && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center md:items-start"
                            >
                                <h3 className="text-2xl font-bold font-serif text-text-dark mb-4">{selectedCard.name}</h3>
                                <p className="text-gray-700 leading-relaxed font-sans mb-6 text-left w-full">{selectedCard.message}</p>

                                <button
                                    onClick={handleReset}
                                    className="px-8 py-3 bg-text-dark text-white rounded-full hover:bg-sakura-pink transition-colors duration-300 shadow-md text-sm tracking-wider"
                                >
                                    もう一度引く
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {!selectedCard && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-white/80 text-lg font-serif mt-4"
                        >
                            心を落ち着かせて、1枚カードを選んでください
                        </motion.p>
                    )}
                </div>
            </div>
        </div>
    );
}

// Sub-component for individual card rendering to avoid duplication
const CardItem = ({ card, index, onClick }: { card: TarotCard, index: number, onClick: (c: TarotCard) => void }) => (
    <motion.div
        layoutId={`card-${card.id}`}
        className="w-20 h-32 md:w-28 md:h-44 rounded-lg border border-white/20 shadow-lg cursor-pointer relative overflow-hidden bg-text-dark transform hover:-translate-y-2 transition-transform duration-300"
        onClick={() => onClick(card)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { delay: index * 0.05 } }}
        whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(228, 0, 127, 0.4)" }}
    >
        <img src="/images/cards/tarot_back.webp" alt="Back" className="w-full h-full object-cover" />
    </motion.div>
);
