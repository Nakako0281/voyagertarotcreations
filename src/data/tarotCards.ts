export interface TarotCard {
    id: number;
    name: string;
    image: string; // Path to image
    message: string;
    category: 'Major' | 'World' | 'Crystal' | 'Cup' | 'Wand';
}

export const tarotCards: TarotCard[] = [
    { id: 0, name: "Fool-Child", image: "", message: "始まり。純粋な好奇心で世界へ飛び出しましょう。", category: "Major" },
    { id: 1, name: "Magician", image: "", message: "創造。あなたには現実を変える魔法の力があります。", category: "Major" },
    { id: 2, name: "High Priestess", image: "", message: "直感。静寂の中で内なる声に耳を傾けてください。", category: "Major" },
    { id: 3, name: "Empress", image: "", message: "愛と豊かさ。感情を大切にし、創造性を育みましょう。", category: "Major" },
    { id: 4, name: "Emperor", image: "", message: "リーダーシップ。意志を強く持ち、自分の王国を築きましょう。", category: "Major" },
    { id: 5, name: "Hierophant", image: "", message: "学びと教え。知識を深め、良き指導者となりましょう。", category: "Major" },
    { id: 6, name: "Lovers", image: "", message: "選択と結合。心に従い、愛を持って調和を選びましょう。", category: "Major" },
    { id: 7, name: "Chariot", image: "", message: "勝利と前進。目標に向かって力強く進み続けましょう。", category: "Major" },
    { id: 8, name: "Balance", image: "", message: "均衡。公平な視点を持ち、調和を取り戻しましょう。", category: "Major" },
    { id: 9, name: "Hermit", image: "", message: "内観。一人になって自分自身を見つめ直す時間です。", category: "Major" },
    { id: 10, name: "Fortune", image: "", message: "運命の輪。変化を受け入れ、チャンスを掴みましょう。", category: "Major" },
    { id: 11, name: "Strength", image: "", message: "強さ。困難に立ち向かう勇気と忍耐を持ちましょう。", category: "Major" },
    { id: 12, name: "Hanged Man", image: "", message: "視点の転換。立ち止まり、違う角度から物事を見てみましょう。", category: "Major" },
    { id: 13, name: "Death", image: "", message: "変容。古いものを手放し、新しい自分へと生まれ変わりましょう。", category: "Major" },
    { id: 14, name: "Art", image: "", message: "統合。異なる要素を組み合わせ、新しい価値を生み出しましょう。", category: "Major" },
    { id: 15, name: "Devil", image: "", message: "囚われからの解放。恐れや執着を手放し、自由になりましょう。", category: "Major" },
    { id: 16, name: "Tower", image: "", message: "崩壊と再生。予期せぬ変化は、新しい土台を築くチャンスです。", category: "Major" },
    { id: 17, name: "Star", image: "/images/cards/17_star.webp", message: "希望と輝き。あなたは輝く存在です。自分を信じましょう。", category: "Major" },
    { id: 18, name: "Moon", image: "", message: "潜在意識。不安や迷いを越えて、真実を見極めましょう。", category: "Major" },
    { id: 19, name: "Sun", image: "", message: "生命力と喜び。自分らしさを全開にし、人生を楽しみましょう。", category: "Major" },
    { id: 20, name: "Time-Space", image: "", message: "目覚め。過去と未来を超え、今この瞬間に全力を注ぎましょう。", category: "Major" },
    { id: 21, name: "Universe", image: "", message: "完結。一つのサイクルが終わり、新しい世界が始まります。", category: "Major" },
];
