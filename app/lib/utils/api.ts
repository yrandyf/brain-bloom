export const fetcher = (...args: any[]) => fetch(...args).then((res) => res.json())
// export const fetcher = (...args: any[]) => fetch(...args).then((res) => res.json()).then(res => res.data)
