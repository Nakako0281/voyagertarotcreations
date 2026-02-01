export interface TarotCard {
    id: number;
    name: string;
    image: string; // Path to image
    message: string;
    category: 'Major' | 'World' | 'Crystal' | 'Cup' | 'Wand';
}

export const tarotCards: TarotCard[] = [
    {
        id: 0,
        name: "Fool-Child",
        image: "/images/cards/fool.jpg",
        message: "冒険の始まり。未知の世界へ飛び込みましょう。",
        category: "Major"
    },
    {
        id: 1,
        name: "Magician",
        image: "/images/cards/magician.jpg",
        message: "あなたには魔法を使う力があります。才能を発揮する時です。",
        category: "Major"
    },
    {
        id: 2,
        name: "High Priestess",
        image: "/images/cards/high_priestess.jpg",
        message: "直感を信じてください。答えはあなたの中にあります。",
        category: "Major"
    },
    {
        id: 3,
        name: "Empress",
        image: "/images/cards/empress.jpg",
        message: "豊かさと創造性。愛を受け取り、育みましょう。",
        category: "Major"
    },
    {
        id: 4,
        name: "Emperor",
        image: "/images/cards/emperor.jpg",
        message: "リーダーシップと構造。あなたの王国を築き上げなさい。",
        category: "Major"
    },
    // Add more mock cards as needed for demo
];
