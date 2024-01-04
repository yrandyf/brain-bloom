export const delay = async (delay = 1000, callback = () => { }) => {

    const delayPromise = (ms: number) => new Promise(res => setTimeout(res, ms))
    await delayPromise(delay)

    callback()
}