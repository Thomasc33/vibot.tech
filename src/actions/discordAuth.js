const setDiscordAuth = (details) => {
    return {
        type : "SET_DISCORD_AUTH",
        payload : details,
    }
}

export default setDiscordAuth;