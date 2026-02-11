export interface TarotCard {
    id: number;
    name: string;
    image: string; // Path to image
    message: string;
    category: 'Major' | 'World' | 'Crystal' | 'Cup' | 'Wand';
}

export const tarotCards: TarotCard[] = [
    // Major Arcana (0-21)
    { id: 0, name: "Fool-Child", image: "/images/cards/major_00.webp", message: "始まり。純粋な好奇心で世界へ飛び出しましょう。", category: "Major" },
    { id: 1, name: "Magician", image: "/images/cards/major_01.webp", message: "創造。あなたには現実を変える魔法の力があります。", category: "Major" },
    { id: 2, name: "High Priestess", image: "/images/cards/major_02.webp", message: "直感。静寂の中で内なる声に耳を傾けてください。", category: "Major" },
    { id: 3, name: "Empress", image: "/images/cards/major_03.webp", message: "愛と豊かさ。感情を大切にし、創造性を育みましょう。", category: "Major" },
    { id: 4, name: "Emperor", image: "/images/cards/major_04.webp", message: "リーダーシップ。意志を強く持ち、自分の王国を築きましょう。", category: "Major" },
    { id: 5, name: "Hierophant", image: "/images/cards/major_05.webp", message: "学びと教え。知識を深め、良き指導者となりましょう。", category: "Major" },
    { id: 6, name: "Lovers", image: "/images/cards/major_06.webp", message: "選択と結合。心に従い、愛を持って調和を選びましょう。", category: "Major" },
    { id: 7, name: "Chariot", image: "/images/cards/major_07.webp", message: "勝利と前進。目標に向かって力強く進み続けましょう。", category: "Major" },
    { id: 8, name: "Balance", image: "/images/cards/major_08.webp", message: "均衡。公平な視点を持ち、調和を取り戻しましょう。", category: "Major" },
    { id: 9, name: "Hermit", image: "/images/cards/major_09.webp", message: "内観。一人になって自分自身を見つめ直す時間です。", category: "Major" },
    { id: 10, name: "Fortune", image: "/images/cards/major_10.webp", message: "運命の輪。変化を受け入れ、チャンスを掴みましょう。", category: "Major" },
    { id: 11, name: "Strength", image: "/images/cards/major_11.webp", message: "強さ。困難に立ち向かう勇気と忍耐を持ちましょう。", category: "Major" },
    { id: 12, name: "Hanged Man", image: "/images/cards/major_12.webp", message: "視点の転換。立ち止まり、違う角度から物事を見てみましょう。", category: "Major" },
    { id: 13, name: "Death", image: "/images/cards/major_13.webp", message: "変容。古いものを手放し、新しい自分へと生まれ変わりましょう。", category: "Major" },
    { id: 14, name: "Art", image: "/images/cards/major_14.webp", message: "統合。異なる要素を組み合わせ、新しい価値を生み出しましょう。", category: "Major" },
    { id: 15, name: "Devil", image: "/images/cards/major_15.webp", message: "囚われからの解放。恐れや執着を手放し、自由になりましょう。", category: "Major" },
    { id: 16, name: "Tower", image: "/images/cards/major_16.webp", message: "崩壊と再生。予期せぬ変化は、新しい土台を築くチャンスです。", category: "Major" },
    { id: 17, name: "Star", image: "/images/cards/major_17.webp", message: "希望と輝き。あなたは輝く存在です。自分を信じましょう。", category: "Major" },
    { id: 18, name: "Moon", image: "/images/cards/major_18.webp", message: "潜在意識。不安や迷いを越えて、真実を見極めましょう。", category: "Major" },
    { id: 19, name: "Sun", image: "/images/cards/major_19.webp", message: "生命力と喜び。自分らしさを全開にし、人生を楽しみましょう。", category: "Major" },
    { id: 20, name: "Time-Space", image: "/images/cards/major_20.webp", message: "目覚め。過去と未来を超え、今この瞬間に全力を注ぎましょう。", category: "Major" },
    { id: 21, name: "Universe", image: "/images/cards/major_21.webp", message: "完結。一つのサイクルが終わり、新しい世界が始まります。", category: "Major" },

    // Crystals (22-35)
    ...Array.from({ length: 14 }, (_, i) => ({
        id: 22 + i,
        name: `Crystals ${i + 1}`,
        image: `/images/cards/crystals_${String(i + 1).padStart(2, '0')}.webp`,
        message: "Message for Crystals card.",
        category: "Crystal" as const
    })),

    // Cups (36-49)
    ...Array.from({ length: 14 }, (_, i) => ({
        id: 36 + i,
        name: `Cups ${i + 1}`,
        image: `/images/cards/cups_${String(i + 1).padStart(2, '0')}.webp`,
        message: "Message for Cups card.",
        category: "Cup" as const
    })),

    // Worlds (50-63)
    ...Array.from({ length: 14 }, (_, i) => ({
        id: 50 + i,
        name: `Worlds ${i + 1}`,
        image: `/images/cards/worlds_${String(i + 1).padStart(2, '0')}.webp`,
        message: "Message for Worlds card.",
        category: "World" as const
    })),

    // Wands (64-77)
    ...Array.from({ length: 14 }, (_, i) => ({
        id: 64 + i,
        name: `Wands ${i + 1}`,
        image: `/images/cards/wands_${String(i + 1).padStart(2, '0')}.webp`,
        message: "Message for Wands card.",
        category: "Wand" as const
    })),
];
