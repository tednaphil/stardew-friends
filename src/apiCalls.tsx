const getCharacters = async () => {
    try {
        const response = await fetch('https://ruby-stardew-api.onrender.com/characters');
        if (!response.ok) {
            const status = response.status
            throw new Error(`We couldn't get the characters - ${status}`)
        }
        return await response.json();
    } catch (error: unknown) {
        throw error
    }

}

const getCharacter = async (id: string | undefined) => {
    try {
        const response = await fetch(`https://ruby-stardew-api.onrender.com/characters/${id}`);
        if (!response.ok) {
            const status = response.status
            if(response.status === 404) {
                throw new Error(`That character doesn't exist!`)
            } else {
                throw new Error(`We couldn't get that character - ${status}`)
            }
        }
        return await response.json();
    } catch (error: unknown) {
        throw error
    }

}

export { getCharacters, getCharacter }