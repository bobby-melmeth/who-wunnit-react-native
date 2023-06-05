const asyncTimeout = (milliseconds: number): Promise<null> => {
    return new Promise(resolve => {
        setTimeout(() => resolve(null), milliseconds)
    })
}

export default asyncTimeout