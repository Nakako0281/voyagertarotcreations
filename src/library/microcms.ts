import { createClient, type MicroCMSQueries } from "microcms-js-sdk";
import home1Img from "../assets/images/home/home_1.webp";
import home2Img from "../assets/images/home/home_2.webp";
import home3Img from "../assets/images/home/home_3.webp";
import leader1Img from "../assets/images/home/leader_1.webp";
import coach1Img from "../assets/images/home/coach_1.webp";
import teacher1Img from "../assets/images/home/teacher_1.webp";
import beautyVoyager1Img from "../assets/images/home/beautyvoygerLesson_1.webp";

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
    category?: {
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

export const getNews = async (queries?: MicroCMSQueries): Promise<NewsResponse> => {
    try {
        if (!client) {
            console.warn("MicroCMS client is not initialized. Using empty data fallback.");
            return { contents: [], totalCount: 0, offset: 0, limit: 10 };
        }
        const response = await client.get({
            endpoint: "news",
            queries,
        });
        return response || { contents: [], totalCount: 0, offset: 0, limit: 10 };
    } catch (error) {
        console.warn("MicroCMS Fetch Warning (getNews): Using fallback data.", error);
        return { contents: [], totalCount: 0, offset: 0, limit: 10 };
    }
};

export const getNewsDetail = async (
    contentId: string,
    queries?: MicroCMSQueries
): Promise<News | null> => {
    try {
        if (!client) {
            return null;
        }
        const response = await client.get({
            endpoint: "news",
            contentId,
            queries,
        });
        return response || null;
    } catch (error) {
        console.warn(`MicroCMS Fetch Warning (getNewsDetail ID:${contentId}): Returning null.`, error);
        return null;
    }
};

// --- Members (Profile) ---
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
    introduction: string;
    qualifications?: string[];
}

export interface MemberResponse {
    totalCount: number;
    offset: number;
    limit: number;
    contents: Member[];
}

export const getMembers = async (queries?: MicroCMSQueries): Promise<MemberResponse> => {
    try {
        if (!client) {
            console.warn("MicroCMS client is not initialized. Using empty data fallback.");
            return { contents: [], totalCount: 0, offset: 0, limit: 10 };
        }
        return await client.get({
            endpoint: "members",
            queries,
        });
    } catch (error) {
        console.warn("MicroCMS Fetch Warning (getMembers): Endpoint may not exist, returning empty data.", error);
        return { contents: [], totalCount: 0, offset: 0, limit: 10 };
    }
};


// --- Courses ---
export interface CourseStep {
    stepNumber: number;
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
    id: string;
    title: string;
    subTitle?: string;
    slug: string;
    steps: CourseStep[];
    cards: CourseCard[];
}

export interface CourseResponse {
    totalCount: number;
    offset: number;
    limit: number;
    contents: CourseCategory[];
}

export const getCourses = async (queries?: MicroCMSQueries): Promise<CourseResponse> => {
    try {
        if (!client) {
            console.warn("MicroCMS client is not initialized. Using mock data fallback.");
            return { contents: mockCourses, totalCount: mockCourses.length, offset: 0, limit: 10 };
        }
        const response = await client.get({
            endpoint: "courses",
            queries,
        });
        if (!response || !response.contents || response.contents.length === 0) {
            console.info("MicroCMS returned empty courses. Using mock data fallback.");
            return { contents: mockCourses, totalCount: mockCourses.length, offset: 0, limit: 10 };
        }
        return response;
    } catch (error) {
        console.warn("MicroCMS Fetch Warning (getCourses): Using fallback data.", error);
        return { contents: mockCourses, totalCount: mockCourses.length, offset: 0, limit: 10 };
    }
};

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
            { title: "リーダー認定講座", image: { url: leader1Img as any, height: 300, width: 400 }, url: "/course#course_1" },
            { title: "コーチ認定講座", image: { url: coach1Img as any, height: 300, width: 400 }, url: "/course#course_2" },
            { title: "ティーチャー認定講座", image: { url: teacher1Img as any, height: 300, width: 400 }, url: "/course2#course_1" }
        ]
    },
    {
        id: "other-course",
        slug: "other",
        title: "その他講座",
        subTitle: "Other Courses",
        steps: [],
        cards: [
            { title: "ボイジャータロット体験会", image: { url: home1Img as any, height: 300, width: 400 }, url: "/course#trial-course" },
            { title: "ボイジャータロット入門講座", image: { url: leader1Img as any, height: 300, width: 400 }, url: "/course#intro-course" },
            { title: "ビューティーボイジャーレッスン", image: { url: beautyVoyager1Img as any, height: 300, width: 400 }, url: "/course#beauty-voyager" },
            { title: "ライフクリエイション講座", image: { url: home3Img as any, height: 300, width: 400 }, url: "/course#" }
        ]
    }
];
