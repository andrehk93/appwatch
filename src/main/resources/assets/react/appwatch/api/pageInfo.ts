import { Content } from 'enonic-types/content';

export interface PageInfoPayload {
    pages: Content[];
}

export const loadPageInfo = (pageKey: string): Promise<PageInfoPayload> => {
    return fetch(`/_/service/com.andrehk93.appwatch/appwatch/pages/${ pageKey }`).then(res => res.json());
}