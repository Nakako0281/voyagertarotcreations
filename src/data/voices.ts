export interface Voice {
    id: string;
    image?: string; // Optional image URL
    catchphrase: string;
    summary: string;
    points: { label: string; text: string }[];
}

export const voices: Voice[] = [
    {
        id: "voice-01",
        catchphrase: "「私の第二の人生のスタートそのものになりました」",
        summary: "占いには縁がなかった私が、偶発的な出会いからボイジャータロットの世界へ。単なるカードの学習を超え、自分自身と深く向き合うことで「本当にやりたいこと」に気づき、プロとして歩み始めるまでの変容の物語。",
        points: [
            {
                label: "受講のきっかけ",
                text: "自分を見つめ直す時間が持てていなかった中、カードを通じて「自分と見つめ合う」感覚がとても新鮮で、意外な面白さを感じたことが始まりでした。"
            },
            {
                label: "講座の魅力",
                text: "カードの意味だけでなく、講師独自の「世界観」や「表現」を学べました。同期と共に学ぶことで、孤独にならず心強く、対面ならではの良さが詰まっていました。"
            },
            {
                label: "得られた変化",
                text: "「素直に生きる」という体験ができ、第二の人生のスタートとなりました。今ではボイジャータロットを仕事にし、二人三脚で人生を歩んでいます。"
            }
        ]
    }
];
