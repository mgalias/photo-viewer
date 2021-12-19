import {
    UNSPLASH_BASE_URL,
    UNSPLASH_COMMON_HEADERS
} from './config'

function fetcher(pathname) {
    return fetch(`${UNSPLASH_BASE_URL}${pathname}`, {
        headers: UNSPLASH_COMMON_HEADERS
    }).then(res => res.json())
}

export const getCollection = () => fetcher('/collections');
export const getSection = (id) => fetcher(`/collections/${id}/photos`);
export const getPhoto = (id) => fetcher(`/photos/${id}`);