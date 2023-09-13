import { fetchXMLHttpRequest } from './XMLHttpRequest'

export const defaultFetch = (...args) =>
    fetch(...args).then((res) => res.json());

export const xmlFetcher = fetchXMLHttpRequest;