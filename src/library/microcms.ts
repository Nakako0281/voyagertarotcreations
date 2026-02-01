// import { createClient } from "microcms-js-sdk";

// To be used when API keys are available
// export const client = createClient({
//   serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
//   apiKey: import.meta.env.MICROCMS_API_KEY,
// });

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

export const getNews = async (queries?: any): Promise<NewsResponse> => {
    // Simulate API call
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
    queries?: any
): Promise<News> => {
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
