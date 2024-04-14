const getCharacters = async () => {
    try {
        const response = await fetch('https://stardew-api.onrender.com/api/v1/characters');
        if (!response.ok) {
            const status = response.status
            throw new Error(`We couldn't get the characters - ${status}`)
        }
        return await response.json();
    } catch (error: any) {
        console.log('API CALLS catch block', error.message)
        throw error
    }

}

export { getCharacters }