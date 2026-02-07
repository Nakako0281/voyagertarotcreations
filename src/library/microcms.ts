import { createClient, type MicroCMSQueries } from "microcms-js-sdk";

// Client will be initialized if keys are present
export const client = import.meta.env.MICROCMS_SERVICE_DOMAIN && import.meta.env.MICROCMS_API_KEY
    ? createClient({
        serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
        apiKey: import.meta.env.MICROCMS_API_KEY,
    })
    : null;

export interface News {
    id: string;
    createdAt: string;
    publishedAt: string;
    revisedAt: string;
    title: string;
    content: string;
    category: {
        id: string;
        name: string;
    }[];
    eyecatch?: {
        url: string;
        height: number;
        width: number;
    };
}

export interface NewsResponse {
    totalCount: number;
    offset: number;
    limit: number;
    contents: News[];
}

// Mock Data
const mockNews: News[] = [
    {
        id: "1",
        createdAt: "2026-02-02T10:00:00.000Z",
        publishedAt: "2026-02-02T10:00:00.000Z",
        revisedAt: "2026-02-02T10:00:00.000Z",
        title: "Webサイトをリニューアルしました",
        content: "<p>Voyager Tarot CreationsのWebサイトをリニューアルしました。より見やすく、使いやすいサイトを目指してまいります。<br>今後ともよろしくお願いいたします。</p>",
        category: [{ id: "info", name: "お知らせ" }],
        eyecatch: { url: "/images/news_placeholder.jpg", height: 600, width: 800 }
    },
    {
        id: "2",
        createdAt: "2026-01-20T10:00:00.000Z",
        publishedAt: "2026-01-20T10:00:00.000Z",
        revisedAt: "2026-01-20T10:00:00.000Z",
        title: "【2月開催】認定リーダー養成講座のお知らせ",
        content: "<p>2月の認定リーダー養成講座の日程が決まりました。<br>詳細・お申し込みは講座案内ページをご覧ください。</p><h3>日程</h3><ul><li>2月15日(土) 10:00 - 17:00</li><li>2月16日(日) 10:00 - 17:00</li></ul>",
        category: [{ id: "course", name: "講座情報" }]
    },
    {
        id: "3",
        createdAt: "2026-01-10T10:00:00.000Z",
        publishedAt: "2026-01-10T10:00:00.000Z",
        revisedAt: "2026-01-10T10:00:00.000Z",
        title: "新年のご挨拶",
        content: "<p>あけましておめでとうございます。本年もVoyager Tarot Creationsをよろしくお願いいたします。</p>",
        category: [{ id: "blog", name: "ブログ" }]
    }
];

export const getNews = async (queries?: MicroCMSQueries): Promise<NewsResponse> => {
    if (client) {
        try {
            return await client.get({
                endpoint: "news",
                queries,
            });
        } catch (error) {
            console.error("MicroCMS fetch error:", error);
            // Fallback to mock data on error? Or rethrow? 
            // For now, let's fall back to mock data if API fails to avoid breaking dev
        }
    }

    // Fallback Mock Data
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                totalCount: mockNews.length,
                offset: 0,
                limit: 10,
                contents: mockNews
            });
        }, 100);
    });
};

export const getNewsDetail = async (
    contentId: string,
    queries?: MicroCMSQueries
): Promise<News> => {
    if (client) {
        try {
            return await client.get({
                endpoint: "news",
                contentId,
                queries,
            });
        } catch (error) {
            console.error("MicroCMS detail fetch error:", error);
        }
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const news = mockNews.find(n => n.id === contentId);
            if (news) {
                resolve(news);
            } else {
                reject(new Error("Not found"));
            }
        }, 100);
    });
};

// --- Members (Profile) Type Definition ---
export interface Member {
    id: string;
    name: string;
    titleEn?: string;
    role: string;
    image?: {
        url: string;
        height: number;
        width: number;
    };
    introduction: string; // Rich text or simple text? Plan said textarea (simple text usually, but supports newlines)
    qualifications?: string[]; // Simple list of strings
}

export interface MemberResponse {
    totalCount: number;
    offset: number;
    limit: number;
    contents: Member[];
}

const mockMembers: Member[] = [
    {
        id: "sakura-aoki",
        name: "青木 咲羅",
        role: "Voyager Tarot Creations代表",
        titleEn: "Sakura Aoki / Voyager Tarot Creations代表",
        image: { url: "/images/sakura_aoki.webp", height: 800, width: 600 },
        introduction: `祖父・母共に占い師という家庭に生まれ、幼い頃からスピリチュアルな環境で育つ。
保育士をしながらカウンセリング、心理療法を学び、2003年占い師、心理セラピストとして開業。
その後、ボイジャータロットJAPANでの北海道初の認定カウンセラーとなり、2013年から認定ティーチャーとしてその普及も努める。

マスターティーチャーとして長年在籍したボイジャータロットJAPANを卒業し、2025年に新たに『Voyager Tarot Creations』を設立。
ボイジャータロットカウンセリング及びヒプノセラピーを中心に、癒しや願望実現まで、様々な心の問題に対応すると共に、新しい時代に活躍出来るリーダー、コーチ、ティーチャーの育成を目指している。
イベント出演やセミナー、執筆なども精力的に活動中。`,
        qualifications: [
            "ボイジャータロット国際認定ティーチャー",
            "米国催眠療法協会認定　ヒプノセラピスト",
            "日本催眠学会会員",
            "日本ビューティーヘルス協会札幌校代表　認定美容栄養学専門士",
            "認定オーラクレンズプラクティショナー",
            "認定カルマクリアプラクティショナー",
            "代替療法士会会員",
            "CAMESE認定　カラーセラピスト",
            "認定瞑想ファシリテーター",
        ],
    },
    {
        id: "hanako-yamada",
        name: "山田 花子",
        role: "認定コーチ",
        titleEn: "Hanako Yamada / Certified Coach",
        image: { url: "/images/profile_placeholder.jpg", height: 800, width: 600 },
        introduction: "丁寧なセッションで定評がある認定コーチ。クライアントの本来の輝きを引き出すことを得意とする。自身の経験に基づいた深い共感力で、多くのクライアントから信頼を得ている。\n\n現在はオンラインを中心に活動中。",
        qualifications: ["ボイジャータロット認定コーチ"],
    },
    {
        id: "coming-soon",
        name: "Coming Soon",
        role: "認定リーダー",
        image: undefined,
        introduction: "新たな認定メンバーがここに掲載されます。",
        qualifications: [],
    },
];

export const getMembers = async (queries?: MicroCMSQueries): Promise<MemberResponse> => {
    if (client) {
        try {
            return await client.get({
                endpoint: "members",
                queries,
            });
        } catch (error) {
            console.error("MicroCMS members fetch error:", error);
            // Fallback to mock
        }
    }

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                totalCount: mockMembers.length,
                offset: 0,
                limit: 10,
                contents: mockMembers
            });
        }, 100);
    });
};


// --- Courses Type Definition ---
export interface CourseStep {
    stepNumber: number; // Changed from 'step' to 'stepNumber' for clarity in CMS
    label: string;
}

export interface CourseCard {
    title: string;
    image?: {
        url: string;
        height: number;
        width: number;
    };
    url: string;
}

export interface CourseCategory {
    id: string; // This will likely be the contentId in MicroCMS
    title: string; // 'name' in code, 'title' in CMS
    subTitle?: string; // 'description'/eng title
    slug: string; // specific ID for anchor links if contentId is uuid
    steps: CourseStep[];
    cards: CourseCard[];
}

export interface CourseResponse {
    totalCount: number;
    offset: number;
    limit: number;
    contents: CourseCategory[];
}

const mockCourses: CourseCategory[] = [
    {
        id: "tarot-course",
        slug: "tarot",
        title: "ボイジャータロット",
        subTitle: "Voyager Tarot",
        steps: [
            { stepNumber: 1, label: "リーダー認定" },
            { stepNumber: 2, label: "コーチ認定" },
            { stepNumber: 3, label: "ティーチャー認定" }
        ],
        cards: [
            { title: "リーダー認定講座", image: { url: "/images/top_2-1.webp", height: 300, width: 400 }, url: "/course#course_1" },
            { title: "コーチ認定講座", image: { url: "/images/top_2-2.webp", height: 300, width: 400 }, url: "/course#course_2" },
            { title: "ティーチャー認定講座", image: { url: "/images/top_2-3.webp", height: 300, width: 400 }, url: "/course2#course_1" }
        ]
    },
    {
        id: "other-course",
        slug: "other",
        title: "（例）その他講座",
        subTitle: "Other Courses",
        steps: [
            { stepNumber: 1, label: "入門" },
            { stepNumber: 2, label: "応用" },
            { stepNumber: 3, label: "マスター" }
        ],
        cards: [
            { title: "入門講座", image: { url: "/images/top_2-1.webp", height: 300, width: 400 }, url: "#" },
            { title: "応用講座", image: { url: "/images/top_2-2.webp", height: 300, width: 400 }, url: "#" },
            { title: "マスター講座", image: { url: "/images/top_2-3.webp", height: 300, width: 400 }, url: "#" }
        ]
    }
];

export const getCourses = async (queries?: MicroCMSQueries): Promise<CourseResponse> => {
    if (client) {
        try {
            return await client.get({
                endpoint: "courses",
                queries,
            });
        } catch (error) {
            console.error("MicroCMS courses fetch error:", error);
            // Fallback
        }
    }

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                totalCount: mockCourses.length,
                offset: 0,
                limit: 10,
                contents: mockCourses
            });
        }, 100);
    });
};
