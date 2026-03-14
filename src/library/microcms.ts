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
        console.error("Failed to fetch members from MicroCMS:", error);
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
            console.warn("MicroCMS client is not initialized. Using empty data fallback.");
            return { contents: [], totalCount: 0, offset: 0, limit: 10 };
        }
        return await client.get({
            endpoint: "courses",
            queries,
        });
    } catch (error) {
        console.error("Failed to fetch courses from MicroCMS:", error);
        return { contents: [], totalCount: 0, offset: 0, limit: 10 };
    }
};
