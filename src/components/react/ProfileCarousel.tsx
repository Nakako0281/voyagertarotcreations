import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface StaffMember {
    name: string;
    role: string;
    titleEn?: string;
    image: string;
    description: string;
    qualifications?: string[];
}

interface ProfileCarouselProps {
    members: StaffMember[];
}

export default function ProfileCarousel({ members }: ProfileCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.95
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.95
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        let nextIndex = currentIndex + newDirection;
        if (nextIndex < 0) nextIndex = members.length - 1;
        if (nextIndex >= members.length) nextIndex = 0;
        setCurrentIndex(nextIndex);
    };

    const currentMember = members[currentIndex];

    return (
        <div className="relative w-full max-w-6xl mx-auto px-6 md:px-12">
            {/* Main Carousel Container - Fixed Height for Screen Fit */}
            <div className="relative overflow-hidden h-[85vh] md:h-[500px] min-h-[600px] md:min-h-[400px] flex items-center">
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 },
                            scale: { duration: 0.2 }
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);

                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                            }
                        }}
                        className="w-full h-full absolute inset-0"
                    >
                        {/* Profile Card Content - Full Height */}
                        <section className="bg-white/80 backdrop-blur rounded-[2rem] md:rounded-[3rem] shadow-glass border border-white relative overflow-hidden h-full flex flex-col md:flex-row">
                            {/* Background decoration */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-sakura-light/20 rounded-full blur-[80px] -z-10"></div>

                            {/* Left Column: Image Only */}
                            <div className="w-full md:w-5/12 h-[350px] md:h-full relative flex flex-col bg-gray-50 border-r border-white/50">
                                <div className="flex-1 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-text-dark/10 group-hover:bg-transparent transition-colors z-20 pointer-events-none" />
                                    {currentMember.image ? (
                                        <img
                                            src={currentMember.image}
                                            alt={currentMember.name}
                                            className="w-full h-full object-cover object-top"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center text-gray-300 bg-gray-50">
                                            No Image
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Right Column: Name + Description + Qualifications */}
                            <div className="w-full md:w-7/12 flex-1 flex flex-col overflow-hidden">
                                {/* Header: Name & Title (Fixed) */}
                                <div className="flex-none p-5 pb-2 md:p-8 md:pb-4 border-b border-gray-100/50 bg-white/80 md:bg-white/0 z-10">
                                    <h2 className="text-xl md:text-4xl text-text-dark mb-1 md:mb-2">
                                        {currentMember.name}
                                    </h2>
                                    <p className="text-sakura-vivid font-bold tracking-widest text-[10px] md:text-sm uppercase">
                                        {currentMember.titleEn || currentMember.role}
                                    </p>
                                </div>

                                {/* Scrollable Content: Description + Qualifications */}
                                <div className="flex-1 overflow-y-auto custom-scrollbar p-5 pt-3 md:p-8 md:pt-6">
                                    {/* Description Header */}
                                    <h4 className="font-bold text-sky-400 text-xs md:text-sm flex items-center gap-2 mb-3">
                                        <span className="text-sky-400">●</span> 紹介
                                    </h4>

                                    {/* Description */}
                                    <div className="prose prose-stone text-gray-600 leading-relaxed text-sm md:text-sm font-medium whitespace-pre-wrap mb-6">
                                        {currentMember.description}
                                    </div>

                                    {/* Qualifications (Moved to bottom of right column) */}
                                    {currentMember.qualifications && currentMember.qualifications.length > 0 && (
                                        <div className="pt-6 border-t border-sunshine/30">
                                            <h4 className="font-bold text-sunshine text-xs md:text-sm flex items-center gap-2 mb-3">
                                                <span className="text-sunshine">●</span> 資格等
                                            </h4>
                                            <ul className="space-y-1.5 text-[10px] md:text-xs font-bold pl-1">
                                                {currentMember.qualifications.map((q, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-gray-600">
                                                        <span className="w-1.5 h-1.5 bg-sunshine rounded-full mt-1.5 flex-shrink-0"></span>
                                                        <span>{q}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </section>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Buttons (Outside Container) */}
            {members.length > 1 && (
                <>
                    <button
                        className="absolute top-1/2 -left-2 md:-left-8 transform -translate-y-1/2 bg-white/80 hover:bg-white text-text-dark p-3 md:p-4 rounded-full shadow-lg backdrop-blur-sm transition-all hover:scale-110 z-30 group border border-white"
                        onClick={() => paginate(-1)}
                        aria-label="Previous member"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6 group-hover:text-sky transition-colors">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <button
                        className="absolute top-1/2 -right-2 md:-right-8 transform -translate-y-1/2 bg-white/80 hover:bg-white text-text-dark p-3 md:p-4 rounded-full shadow-lg backdrop-blur-sm transition-all hover:scale-110 z-30 group border border-white"
                        onClick={() => paginate(1)}
                        aria-label="Next member"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6 group-hover:text-sky transition-colors">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </>
            )}

            {/* Pagination Dots */}
            {members.length > 1 && (
                <div className="flex justify-center gap-3 mt-6 absolute -bottom-10 left-0 right-0">
                    {members.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                setDirection(idx > currentIndex ? 1 : -1);
                                setCurrentIndex(idx);
                            }}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 shadow-sm ${idx === currentIndex
                                ? "bg-mint w-8"
                                : "bg-white/50 hover:bg-mint/50 border border-white"
                                }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}


