export const defaultFetch = (...args) =>
    fetch(...args).then((res) => res.json());
