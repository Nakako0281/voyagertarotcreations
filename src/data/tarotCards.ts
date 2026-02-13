export interface TarotCard {
    id: number;
    name: string;
    image: string; // Path to image
    message: string;
    category: 'Major' | 'World' | 'Crystal' | 'Cup' | 'Wand';
}

export const tarotCards: TarotCard[] = [
    // Major Arcana (0-21)
    { id: 0, name: "Fool-Child", image: "/images/cards/major_00.webp", message: "子供のような純粋な好奇心が、あなたを新しい冒険へと導きます。過去の常識にとらわれず、今この瞬間を楽しみましょう。すべての可能性は、あなたの手の中にあります。", category: "Major" },
    { id: 1, name: "Magician", image: "/images/cards/major_01.webp", message: "あなたは現実を創造する魔法使いです。持てる才能、技術、コミュニケーション能力を駆使して、望む未来を描き出しましょう。準備は整っています。自信を持って、あなたの魔法を世界に披露する時です。", category: "Major" },
    { id: 2, name: "Priestess", image: "/images/cards/major_02.webp", message: "静寂の中で、内なる voice に耳を傾けてください。答えは外側の世界ではなく、あなたの深い直感の中にあります。知識ではなく、感覚を信頼しましょう。神秘のヴェールを開き、真実を見出す時です。", category: "Major" },
    { id: 3, name: "Empress", image: "/images/cards/major_03.webp", message: "愛と豊かさを全身で受け取りましょう。あなたの創造性は枯れることなく溢れ出ています。感情を大切にし、自分自身を慈しんでください。あなたが満たされることで、周りの世界もまた豊かになるのです。", category: "Major" },
    { id: 4, name: "Emperor", image: "/images/cards/major_04.webp", message: "あなたの王国を築く時です。明確なビジョンと強い意志を持ち、リーダーシップを発揮しましょう。自分自身のルールを作り、人生の主導権を握ってください。あなたが決断することで、現実は動き出します。", category: "Major" },
    { id: 5, name: "Hierophant", image: "/images/cards/major_05.webp", message: "学びを深め、得た知識を他者と分かち合いましょう。あなたは良き指導者であり、また良き生徒でもあります。伝統や知恵を尊重しつつ、自分自身の精神性を高めていくことで、より大きな理解へと到達するでしょう。", category: "Major" },
    { id: 6, name: "Lovers", image: "/images/cards/major_06.webp", message: "心の底から惹かれるものを選択してください。義務や理性ではなく、愛と情熱に従うことが調和への鍵です。対立するものを統合し、自分自身との、そして他者との深い結びつきを祝福しましょう。", category: "Major" },
    { id: 7, name: "Chariot", image: "/images/cards/major_07.webp", message: "目標に向かって力強く前進しましょう。迷いを捨て、集中力を高めて走り抜ける時です。感情の手綱をしっかりと握り、困難を乗り越える強い意志を持ってください。勝利はあなたのすぐ目の前にあります。", category: "Major" },
    { id: 8, name: "Balance", image: "/images/cards/major_08.webp", message: "公平な視点を持ち、人生のバランスを取り戻しましょう。偏った考えや行動を見直し、調整するタイミングです。静かな心で状況を見極めることで、調和のとれた最善の道が見えてきます。", category: "Major" },
    { id: 9, name: "Hermit", image: "/images/cards/major_09.webp", message: "外の雑音から離れ、一人静かに自分自身と向き合う時間を持ちましょう。孤独は寂しさではなく、内なる知恵とつながるための神聖な時間です。自分の内側にある「答え」を照らし出してください。", category: "Major" },
    { id: 10, name: "Fortune", image: "/images/cards/major_10.webp", message: "変化の波が訪れています。運命の流れに抵抗せず、柔軟に身を任せましょう。予期せぬ出来事も、すべては成長のためのチャンスです。新しい展開を楽しみ、幸運のサイクルに乗りましょう。", category: "Major" },
    { id: 11, name: "Strength", image: "/images/cards/major_11.webp", message: "真の強さとは、力で押さえつけることではなく、困難を受け入れる勇気と忍耐です。恐れや弱さを認め、それを乗り越える内なる力を信じてください。あなたの優しさと強靭な精神が、どんな障害も克服します。", category: "Major" },
    { id: 12, name: "Hanged Man", image: "/images/cards/major_12.webp", message: "一度立ち止まり、視点を変えてみましょう。行き詰まりを感じるなら、あえて逆の立場から物事を見てみるのです。犠牲を払うのではなく、執着を手放すことで、新しい気づきと解放が訪れます。", category: "Major" },
    { id: 13, name: "Death", image: "/images/cards/major_13.webp", message: "終わりは新しい始まりです。古くなった習慣、関係、考え方を手放し、生まれ変わる準備をしましょう。変化を恐れず、過去に別れを告げることで、素晴らしい再生のエネルギーがあなたに満ちてきます。", category: "Major" },
    { id: 14, name: "Art", image: "/images/cards/major_14.webp", message: "異なる要素を組み合わせ、新しい価値を創造しましょう。対立するものを融合させる錬金術師のように、あなたの人生を芸術作品として彩ってください。調和とバランスの中で、あなただけの美しさを表現するのです。", category: "Major" },
    { id: 15, name: "Devils Play", image: "/images/cards/major_15.webp", message: "あなたを縛り付けているのは、他でもない自分自身の恐れや執着です。制限や思い込みの鎖を断ち切り、自由になりましょう。本能や欲望を否定せず、笑い飛ばすユーモアを持つことで、あなたは解放されます。", category: "Major" },
    { id: 16, name: "Tower", image: "/images/cards/major_16.webp", message: "予期せぬ変化や崩壊は、真実を明らかにするための啓示です。偽りの土台の上に築かれたものは崩れ去りますが、それはより強固な基盤を作るためのチャンスです。衝撃を受け入れ、瓦礫の中から光を見つけ出しましょう。", category: "Major" },
    { id: 17, name: "Star", image: "/images/cards/major_17.webp", message: "あなたは輝く希望の星です。自分自身の才能と可能性を信じ、世界にその光を放ってください。インスピレーションが降り注いでいます。高い理想を掲げ、自信を持って未来へと進みましょう。", category: "Major" },
    { id: 18, name: "Moon", image: "/images/cards/major_18.webp", message: "潜在意識の奥深くへと潜りましょう。不安や迷いの中にこそ、隠された真実があります。直感を羅針盤にして、曖昧な状況の中を進んでください。夜明け前が一番暗いものですが、必ず光は射します。", category: "Major" },
    { id: 19, name: "Sun", image: "/images/cards/major_19.webp", message: "生命力と喜びに満ち溢れています。子供のように無邪気に笑い、自分らしさを全開にして人生を楽しみましょう。あなたの明るいエネルギーは、周りの人々をも照らし、暖めます。成功と幸福を受け取ってください。", category: "Major" },
    { id: 20, name: "Time-Space", image: "/images/cards/major_20.webp", message: "目覚めの時です。過去のカルマや未来への不安を超え、今この瞬間に意識を集中しましょう。あなたは時空を超えて、何度でも生まれ変わることができます。古い殻を破り、新しい次元へと飛躍してください。", category: "Major" },
    { id: 21, name: "Universe", image: "/images/cards/major_21.webp", message: "一つのサイクルが完成し、あなたは全体と調和しています。これまでの旅路を祝福し、達成感を味わいましょう。あなたは宇宙の一部であり、宇宙そのものです。無限の可能性と共に、新しい世界が始まります。", category: "Major" },

    // Crystals (22-35)
    { id: 22, name: "Ace of Crystals (Brilliance)", image: "/images/cards/crystals_01.webp", message: "あなたは完全な存在です。心、体、精神が統合され、一つになる感覚を思い出してください。欠けているものは何もありません。その完全性を信じて行動しましょう。", category: "Crystal" },
    { id: 23, name: "Two of Crystals (Reflection)", image: "/images/cards/crystals_02.webp", message: "自分自身を鏡に映し出すように見つめてください。内面が静かであれば、外側の世界も静まります。澄んだ心で状況を客観的に観察し、真実を映し出しましょう。", category: "Crystal" },
    { id: 24, name: "Three of Crystals (Creativity)", image: "/images/cards/crystals_03.webp", message: "創造力を発揮しましょう。古いアイデアを組み合わせ、全く新しいものを生み出す時です。常識にとらわれない発想が、現状を打破する鍵となります。", category: "Crystal" },
    { id: 25, name: "Four of Crystals (Logic)", image: "/images/cards/crystals_04.webp", message: "論理的に考えましょう。感情に流されず、事実に基づいて筋道を立てることで、解決策が見えてきます。明晰な思考で計画を立て、着実に実行に移してください。", category: "Crystal" },
    { id: 26, name: "Five of Crystals (Negativity)", image: "/images/cards/crystals_05.webp", message: "ネガティブな思考に気づきましょう。不安や自己批判は、あなたの可能性を曇らせる雲のようなものです。思考の癖を自覚し、意識的にポジティブな光を取り入れましょう。", category: "Crystal" },
    { id: 27, name: "Six of Crystals (Confusion)", image: "/images/cards/crystals_06.webp", message: "混乱するのは、変化の最中だからです。無理に答えを出そうとせず、嵐が過ぎ去るのを待ちましょう。混沌の中から、やがて新しい秩序と理解が生まれてきます。", category: "Crystal" },
    { id: 28, name: "Seven of Crystals (Dullness)", image: "/images/cards/crystals_07.webp", message: "感覚が鈍っていませんか？ 惰性で生きていることに気づいたら、意識的に刺激を与えてください。新しいことを学び、好奇心を持って世界を見ることで、輝きを取り戻せます。", category: "Crystal" },
    { id: 29, name: "Eight of Crystals (Synthesis)", image: "/images/cards/crystals_08.webp", message: "情報を統合しましょう。バラバラに見える点と点を結びつけ、全体像を把握してください。詳細にとらわれず、広い視点で見ることで、大きな意味が見えてきます。", category: "Crystal" },
    { id: 30, name: "Nine of Crystals (Narrowness)", image: "/images/cards/crystals_09.webp", message: "自分や他者に厳しくしすぎていませんか？ 強いこだわりは可能性を狭めてしまいます。知性は優しさと共に使ってこそ、真の力を発揮することを忘れないでください。", category: "Crystal" },
    { id: 31, name: "Ten of Crystals (Delusion)", image: "/images/cards/crystals_10.webp", message: "妄想と現実を見極めましょう。思い込みが真実を歪めているかもしれません。クリアな視点で事実を確認し、幻想の霧を晴らすことで、正しい道へ戻ることができます。", category: "Crystal" },
    { id: 32, name: "Child of Crystals (Learner)", image: "/images/cards/crystals_11.webp", message: "初心に返って学びましょう。知らないことを恥じる必要はありません。純粋な知的好奇心を持って問いかけ、知識を吸収することで、あなたは成長し続けます。", category: "Crystal" },
    { id: 33, name: "Man of Crystals (Inventor)", image: "/images/cards/crystals_12.webp", message: "発明家のように考えましょう。既存の枠組みを超え、誰も思いつかなかった方法を試してください。あなたの独創的なアイデアが、世界に革新をもたらします。", category: "Crystal" },
    { id: 34, name: "Woman of Crystals (Guardian)", image: "/images/cards/crystals_13.webp", message: "自分の信念を守りましょう。周囲の雑音に惑わされず、あなたが真実だと信じるものを大切にしてください。知性を持って真理を守護する強さが必要です。", category: "Crystal" },
    { id: 35, name: "Sage of Crystals (Knower)", image: "/images/cards/crystals_14.webp", message: "あなたはすでに答えを知っています。外側に情報を求めるのをやめ、内なる知識にアクセスしてください。深い洞察と叡智が、あなたを導いてくれるでしょう。", category: "Crystal" },

    // Cups (36-49)
    { id: 36, name: "Ace of Cups (Esctasy)", image: "/images/cards/cups_01.webp", message: "至福の喜びに浸りましょう。心が喜ぶこと、ワクワクする事を選択しましょう。愛すること、生きることの喜びを全身で感じ、魂を震わせてください。", category: "Cup" },
    { id: 37, name: "Two of Cups (Equilibrium)", image: "/images/cards/cups_02.webp", message: "心の均衡を保ちましょう。感情の起伏に飲み込まれることなく、静かな湖面のような穏やかさを大切にしてください。流れに任せながら中心軸を保つことで、平和が訪れます。", category: "Cup" },
    { id: 38, name: "Three of Cups (Love)", image: "/images/cards/cups_03.webp", message: "喜びを分かち合いましょう。友人や家族と共に祝い、笑い合うことで、幸せは倍増します。時間をかけゆっくりと育みましょう。素晴らしいものに成長していくはずです。", category: "Cup" },
    { id: 39, name: "Four of Cups (Anger)", image: "/images/cards/cups_04.webp", message: "怒りの感情を否定しないでください。それは変化が必要だというサインです。感情を爆発させるのではなく、そのエネルギーを建設的な行動へと転換させましょう。", category: "Cup" },
    { id: 40, name: "Five of Cups (Disappointment)", image: "/images/cards/cups_05.webp", message: "失望を受け入れましょう。期待が外れたことは悲しいことですが、それは幻想が壊れ、現実に直面できた証拠でもあります。痛みを越えて、新たな一歩を踏み出してください。", category: "Cup" },
    { id: 41, name: "Six of Cups (Sorrow)", image: "/images/cards/cups_06.webp", message: "悲しみを感じることを自分に許してください。涙は心の浄化です。悲しみの底まで降りていけば、やがて癒しが訪れ、再び浮上する力が湧いてくるでしょう。", category: "Cup" },
    { id: 42, name: "Seven of Cups (Fear)", image: "/images/cards/cups_07.webp", message: "恐れと向き合いましょう。正体のわからない不安が影を大きく見せているだけかもしれません。勇気を持って照らせば、恐れは消え去り、真実が見えてきます。", category: "Cup" },
    { id: 43, name: "Eight of Cups (Stagnation)", image: "/images/cards/cups_08.webp", message: "停滞を感じていますか？ 泥沼にはまっているように感じるなら、そこから抜け出す時です。変化を恐れず、淀んだ水を捨てて、清らかな流れの中へ身を投じましょう。", category: "Cup" },
    { id: 44, name: "Nine of Cups (Fulfillment)", image: "/images/cards/cups_09.webp", message: "心が満たされるのを感じてください。願いが叶い、精神的な充足感を得られる時です。感謝の気持ちを持ち、この幸福な瞬間を十分に味わいましょう。", category: "Cup" },
    { id: 45, name: "Ten of Cups (Passion)", image: "/images/cards/cups_10.webp", message: "情熱に従って生きましょう。あなたの魂が燃えるようなことに全力を注いでください。溢れ出る愛と情熱が、人生を鮮やかに彩り、周囲をも巻き込んでいきます。", category: "Cup" },
    { id: 46, name: "Child of Cups (Feeler)", image: "/images/cards/cups_11.webp", message: "感受性を大切にしましょう。繊細であることは弱さではなく、世界を深く味わうための才能です。自分の感情に蓋をせず、ありのままの心で感じ取ってください。", category: "Cup" },
    { id: 47, name: "Man of Cups (Surfer)", image: "/images/cards/cups_12.webp", message: "感情の波に乗りましょう。荒波も穏やかな波も、恐れずにコントロールしながら楽しむのです。柔軟な心で変化に対応し、流れに逆らわず進んでいきましょう。", category: "Cup" },
    { id: 48, name: "Woman of Cups (Rejoicer)", image: "/images/cards/cups_13.webp", message: "感情豊かに表現しましょう。喜びも悲しみも、すべてを祝福として受け入れてください。あなたのオープンな心が、愛と豊かさを引き寄せます。", category: "Cup" },
    { id: 49, name: "Sage of Cups (Regenerator)", image: "/images/cards/cups_14.webp", message: "再生の時です。古い感情を浄化し、心をリフレッシュさせましょう。過去を癒すことで、あなたは何度でも新しく生まれ変わり、愛する力を取り戻します。", category: "Cup" },

    // Worlds (50-63)
    { id: 50, name: "Ace of Worlds (Success)", image: "/images/cards/worlds_01.webp", message: "報酬を受け取る時です。あなたのこれまでの努力が形となり、結果として表れています。遠慮することなく、物質的な豊かさや成功を感謝して受け取りましょう。", category: "World" },
    { id: 51, name: "Two of Worlds (Reflection)", image: "/images/cards/worlds_02.webp", message: "休息を取り、自分の内側を見つめる時間を取ることも大切な行動の一つです。雑音をシャットアウトし、目標に向かって集中力を高めましょう。柔軟に対応し、状況に合わせて形を変えることで、どんな環境でも繁栄できます。", category: "World" },
    { id: 52, name: "Three of Worlds (Nurturing)", image: "/images/cards/worlds_03.webp", message: "仕事に打ち込みましょう。コツコツと積み上げる作業が、確実な成果を生み出します。働く喜びを見出し、自分の能力を社会のために役立ててください。", category: "World" },
    { id: 53, name: "Four of Worlds (Commencement)", image: "/images/cards/worlds_04.webp", message: "粘り強く続けましょう。すぐに結果が出なくても、あきらめないでください。雨だれが石を穿つように、あなたの継続的な努力が大きな山を動かします。", category: "World" },
    { id: 54, name: "Five of Worlds (Setback)", image: "/images/cards/worlds_05.webp", message: "挫折は終わりではありません。それは軌道修正のためのサインであり、成長のための試練です。転んだことに嘆くより、そこから何を学べるかに焦点を当てて立ち上がりましょう。", category: "World" },
    { id: 55, name: "Six of Worlds (Synergy)", image: "/images/cards/worlds_06.webp", message: "欠乏感を手放しましょう。「ない」ものに目を向けるのではなく、「ある」ものに感謝してください。心の豊かさが、物質的な豊かさを引き寄せる磁石となります。", category: "World" },
    { id: 56, name: "Seven of Worlds (Breakthrough)", image: "/images/cards/worlds_07.webp", message: "焦らず待ちましょう。物事には最適なタイミングがあります。遅れは準備期間だと捉え、今は力を蓄え、計画を見直す時間に充ててください。", category: "World" },
    { id: 57, name: "Eight of Worlds (Change)", image: "/images/cards/worlds_08.webp", message: "邪魔が入っても動揺しないでください。柔軟に対応し、状況に合わせて形を変えることで、どんな環境でも繁栄できます。障害物は、あなたの決意を試すテストです。雑音をシャットアウトし、目標に向かって集中力を高めましょう。", category: "World" },
    { id: 58, name: "Nine of Worlds (Harvest)", image: "/images/cards/worlds_09.webp", message: "収穫の時です。長い時間をかけて育ててきた作物が、ついに実りました。努力の結果を刈り取り、達成感を味わいましょう。豊かさを分かち合うことも忘れずに。", category: "World" },
    { id: 59, name: "Ten of Worlds (Reward)", image: "/images/cards/worlds_10.webp", message: "あなたはここまで進んで来ました。一つの到達点に達成したのです。しかし、ここはゴールであると同時に次のスタート地点でもあります。ここからは新しい成長です。更なる新たな高みを目指しましょう。", category: "World" },
    { id: 60, name: "Child of Worlds (Player)", image: "/images/cards/worlds_11.webp", message: "現実世界で遊びましょう。仕事も人生も、ゲームのように楽しんで取り組んでください。深刻さを捨てて、身体を使って体験することで、生きた学びが得られます。", category: "World" },
    { id: 61, name: "Man of Worlds (Achiever)", image: "/images/cards/worlds_12.webp", message: "あなたは達成者です。有言実行で、着実に目標をクリアしていく力があります。自信を持って実力を発揮し、目に見える形での成果を積み上げていきましょう。", category: "World" },
    { id: 62, name: "Woman of Worlds (Preserver)", image: "/images/cards/worlds_13.webp", message: "大切なものを守り育てましょう。自然環境や身体、財産など、豊かさを維持するためのケアをしてください。慈しむ心が、繁栄を長く続かせます。", category: "World" },
    { id: 63, name: "Sage of Worlds (Master)", image: "/images/cards/worlds_14.webp", message: "達人の域に達しています。経験から得た知恵と技術を統合し、人生を自在にコントロールしてください。物質世界と精神世界をバランスよく生きるマスターとなってください。", category: "World" },

    // Wands (64-77)
    { id: 64, name: "Ace of Wands (Illumination)", image: "/images/cards/wands_01.webp", message: "閃きがあなたを照らしています。突然のインスピレーションを行動に移しましょう。情熱の炎を点火し、意識を高く持つことで、新しい道が明るく照らされます。", category: "Wand" },
    { id: 65, name: "Two of Wands (Purity)", image: "/images/cards/wands_02.webp", message: "純粋なエネルギーを取り戻しましょう。複雑に考えすぎず、シンプルに自分の本能に従うことが大切です。余計なものを削ぎ落とし、本当に大切なことに集中してください。", category: "Wand" },
    { id: 66, name: "Three of Wands (Compassion)", image: "/images/cards/wands_03.webp", message: "慈愛の心を持ちましょう。自分自身にも他者にも優しくあることで、癒しのエネルギーが生まれます。感情を素直に表現し、心を開くことで、温かい絆が育まれるでしょう。", category: "Wand" },
    { id: 67, name: "Four of Wands (Commitment)", image: "/images/cards/wands_04.webp", message: "決意を固める時です。目標に向かってエネルギーを注ぎ込み、最後までやり遂げる約束を自分自身と交わしてください。あなたの強いコミットメントが、現実を動かす力となります。", category: "Wand" },
    { id: 68, name: "Five of Wands (Opression)", image: "/images/cards/wands_05.webp", message: "抑圧から抜け出しましょう。自分を押し殺してまで何かに耐える必要はありません。重荷を下ろし、窮屈な場所から飛び出したとき、あなたは自由と本来のパワーを取り戻します。", category: "Wand" },
    { id: 69, name: "Six of Wands (Trust)", image: "/images/cards/wands_06.webp", message: "自分自身を信頼してください。不確かな状況にあっても、必ずうまくいくと信じることが道を切り開きます。恐れを手放し、宇宙の流れに身を任せる勇気を持ちましょう。", category: "Wand" },
    { id: 70, name: "Seven of Wands (Courage)", image: "/images/cards/wands_07.webp", message: "あなたの美徳と誠実さを大切にしてください。外側の評価に惑わされず、自分の信じる正しさを貫きましょう。内なる高潔さが、あなたを正しい方向へと導いてくれます。", category: "Wand" },
    { id: 71, name: "Eight of Wands (Harmony)", image: "/images/cards/wands_08.webp", message: "成長の時です。学び続け、変化し続けることを楽しんでください。古い殻を破り、枝葉を広げるように、あなたの可能性は無限に拡大していきます。", category: "Wand" },
    { id: 72, name: "Nine of Wands (Integrity)", image: "/images/cards/wands_09.webp", message: "言行一致を目指しましょう。心で思っていることと、実際の行動を一致させることで、あなたの誠実さは高まります。自分に嘘をつかない生き方を貫いてください。", category: "Wand" },
    { id: 73, name: "Ten of Wands (Growth)", image: "/images/cards/wands_10.webp", message: "周囲との調和を意識しましょう。独りよがりにならず、環境や他者のエネルギーと同調することで、より大きな流れに乗ることができます。バランスを取り、全体の一部として機能してください。", category: "Wand" },
    { id: 74, name: "Child of Wands (Seeker)", image: "/images/cards/wands_11.webp", message: "人生を遊び場のように楽しみましょう。深刻になりすぎず、ユーモアと遊び心を持って取り組むことで、創造的な解決策が見つかります。無邪気なエネルギーが突破口になります。", category: "Wand" },
    { id: 75, name: "Man of Wands (Actor)", image: "/images/cards/wands_12.webp", message: "あなたは人生という舞台の主役です。堂々と自分を表現し、演じきりましょう。自信に満ちた振る舞いが、周囲を魅了し、物語を望む方向へと進めていきます。", category: "Wand" },
    { id: 76, name: "Woman of Wands (Sensor)", image: "/images/cards/wands_13.webp", message: "直感を研ぎ澄ましましょう。目に見える世界だけでなく、その背後にあるエネルギーを感じ取ってください。内なる眼で見通すことで、真実を捉えることができます。", category: "Wand" },
    { id: 77, name: "Sage of Wands (Seer)", image: "/images/cards/wands_14.webp", message: "癒しの力を行使しましょう。あなた自身の経験や知恵を使って、自分と他者を癒してください。古い傷を手放し、エネルギーを浄化することで、本来の健やかさが戻ります。", category: "Wand" },
];
